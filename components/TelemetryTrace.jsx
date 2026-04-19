"use client";
import { useEffect, useRef } from "react";

export default function TelemetryTrace({
  color,
  speed,
  amplitude,
  offsetY,
  opacity,
}) {
  const canvasRef = useRef(null);
  const phase = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = canvas.offsetWidth * 2);
    const h = (canvas.height = canvas.offsetHeight * 2);
    ctx.scale(2, 2);
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      const halfH = h / 4;
      for (let x = 0; x < w / 2; x++) {
        const noise1 = Math.sin(x * 0.008 + phase.current) * amplitude;
        const noise2 =
          Math.sin(x * 0.023 + phase.current * 1.3) * (amplitude * 0.4);
        const noise3 =
          Math.sin(x * 0.051 + phase.current * 0.7) * (amplitude * 0.15);
        const y = halfH + offsetY + noise1 + noise2 + noise3;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = opacity;
      ctx.stroke();
      phase.current += speed;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [color, speed, amplitude, offsetY, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
