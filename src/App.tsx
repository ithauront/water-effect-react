import { useRef } from "react";
import { AppContainer } from "./styles/appStyles";

export function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const app = appRef.current;
    if (!app) return;

    const rect = app.getBoundingClientRect();
    const size = Math.max(app.offsetWidth, app.offsetHeight) / 8;

    for (let i = 0; i < 3; i++) {
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ink = document.createElement('span');
      ink.className = 'ink';
      ink.style.width = `${size}px`;
      ink.style.height = `${size}px`;
      ink.style.left = `${x}px`;
      ink.style.top = `${y}px`;
      ink.style.position = 'absolute';

      setTimeout(() => {
        app.appendChild(ink);
        setTimeout(() => ink.remove(), 850);
      }, i * 100);
    }
  };

  return (
    <AppContainer ref={appRef} onMouseMove={handleMouseMove} />
  );
}
