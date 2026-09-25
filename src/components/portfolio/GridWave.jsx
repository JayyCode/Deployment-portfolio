import React, { useEffect, useRef } from 'react';

const GAP = 28;
const INK = '#121212';
const ACCENT = '#ff4d00';

export default function GridWave({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame;
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / GAP) + 1;
      rows = Math.ceil(height / GAP) + 1;
    };

    const draw = (t) => {
      const time = t * 0.0011;
      ctx.clearRect(0, 0, width, height);
      const breathe = 0.85 + 0.15 * Math.sin(time * 0.4);

      ctx.fillStyle = INK;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const p = 0.5 + 0.5 * Math.sin(time - (i + j) * 0.24);
          ctx.globalAlpha = (0.05 + p * 0.42) * breathe;
          const size = 0.8 + p * 3.2;
          ctx.fillRect(i * GAP - size / 2, j * GAP - size / 2, size, size);
        }
      }

      ctx.fillStyle = ACCENT;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const p = 0.5 + 0.5 * Math.sin(time - (i + j) * 0.24);
          const crest = (p - 0.82) / 0.18;
          if (crest <= 0) continue;
          ctx.globalAlpha = crest * crest * 0.85 * breathe;
          const size = 1.6 + crest * 3.2;
          ctx.fillRect(i * GAP - size / 2, j * GAP - size / 2, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reduce) draw(0);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}