import { useEffect, useState } from 'react';

interface Strawberry {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export default function FallingStrawberries() {
  const [strawberries, setStrawberries] = useState<Strawberry[]>([]);

  useEffect(() => {
    const createStrawberry = () => {
      const newStrawberry: Strawberry = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4, // 3-7 segundos
        size: 0.5 + Math.random() * 0.5, // 0.5x a 1.0x do tamanho normal
        delay: Math.random() * 2, // delay de 0-2 segundos
      };
      
      setStrawberries(prev => [...prev, newStrawberry]);
      
      // Remove o morango após a animação
      setTimeout(() => {
        setStrawberries(prev => prev.filter(s => s.id !== newStrawberry.id));
      }, (newStrawberry.animationDuration + newStrawberry.delay) * 1000);
    };

    // Cria morangos a cada 800ms-2s
    const interval = setInterval(() => {
      createStrawberry();
    }, 800 + Math.random() * 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {strawberries.map((strawberry) => (
        <div
          key={strawberry.id}
          className="absolute text-pink-400 opacity-80"
          style={{
            left: `${strawberry.left}%`,
            top: '-50px',
            fontSize: `${strawberry.size * 24}px`,
            animation: `fallDown ${strawberry.animationDuration}s linear ${strawberry.delay}s forwards`,
          }}
        >
          🍓
        </div>
      ))}
    </div>
  );
}