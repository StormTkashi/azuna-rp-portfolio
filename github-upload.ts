import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Função para converter arquivo para base64
function fileToBase64(filePath: string): string {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    return fileBuffer.toString('base64');
  } catch (error) {
    console.error(`Erro ao ler arquivo ${filePath}:`, error);
    throw error;
  }
}

// Função para verificar se é um arquivo binário
function isBinaryFile(filePath: string): boolean {
  const binaryExtensions = ['.mp4', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
  const ext = path.extname(filePath).toLowerCase();
  return binaryExtensions.includes(ext);
}

// Função recursiva para obter todos os arquivos
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Ignorar certas pastas
      if (!['node_modules', 'dist', '.git', '.replit-storage'].includes(file)) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function uploadToGitHub() {
  try {
    console.log('🚀 Iniciando upload para o GitHub...');
    
    const octokit = await getUncachableGitHubClient();
    
    // Obter informações do usuário
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log(`📝 Usuário autenticado: ${user.login}`);
    
    // Nome do repositório
    const repoName = 'azuna-rp-portfolio';
    
    console.log(`📁 Criando repositório: ${repoName}...`);
    
    // Criar repositório
    const { data: repo } = await octokit.rest.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Portfolio interativo da personagem Azuna de RP com interface moderna e responsiva',
      private: false,
      auto_init: false
    });
    
    console.log(`✅ Repositório criado: ${repo.html_url}`);
    
    // Obter todos os arquivos do projeto
    const projectRoot = process.cwd();
    const allFiles = getAllFiles(projectRoot);
    
    // Filtrar arquivos que não devemos fazer upload
    const filesToUpload = allFiles.filter(file => {
      const relativePath = path.relative(projectRoot, file);
      
      // Ignorar arquivos específicos
      const ignorePatterns = [
        'node_modules/',
        'dist/',
        '.git/',
        '.replit-storage/',
        'package-lock.json',
        '.replit',
        'server/github-upload.ts' // Não incluir este próprio script
      ];
      
      return !ignorePatterns.some(pattern => relativePath.includes(pattern));
    });
    
    console.log(`📦 Preparando upload de ${filesToUpload.length} arquivos...`);
    
    // Upload dos arquivos
    for (const filePath of filesToUpload) {
      const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
      
      console.log(`⬆️  Uploading: ${relativePath}`);
      
      let content: string;
      let encoding: 'utf-8' | 'base64' = 'utf-8';
      
      if (isBinaryFile(filePath)) {
        content = fileToBase64(filePath);
        encoding = 'base64';
      } else {
        content = fs.readFileSync(filePath, 'utf-8');
      }
      
      try {
        await octokit.rest.repos.createOrUpdateFileContents({
          owner: user.login,
          repo: repoName,
          path: relativePath,
          message: `Add ${relativePath}`,
          content: encoding === 'base64' ? content : Buffer.from(content).toString('base64'),
          branch: 'main'
        });
      } catch (error) {
        console.error(`❌ Erro ao fazer upload de ${relativePath}:`, error);
      }
    }
    
    console.log('🎉 Upload concluído com sucesso!');
    console.log(`🔗 Repositório: ${repo.html_url}`);
    console.log(`🌐 GitHub Pages (após configurar): https://${user.login}.github.io/${repoName}`);
    
    return repo;
    
  } catch (error) {
    console.error('❌ Erro durante o upload:', error);
    throw error;
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  uploadToGitHub()
    .then(() => {
      console.log('✅ Script concluído!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Script falhou:', error);
      process.exit(1);
    });
}

export { uploadToGitHub };