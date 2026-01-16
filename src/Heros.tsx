// src/Hero.tsx
import React, { useEffect, useRef } from 'react';

const FRAME_COUNT = 100; // 🔁 change to your real frame count

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const safeCanvas = canvas;
    const safeSection = section;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    contextRef.current = ctx;

    const resize = () => {
      safeCanvas.width = window.innerWidth;
      safeCanvas.height = window.innerHeight;
      render();
    };

    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const index = String(i + 1).padStart(4, '0');
      img.onload = () => {
        // no-op, ensures image is marked as loaded
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${index}`);
      };
      img.src = `/title-sequence/title-${index}.webp`;
      images.current.push(img);
    }

    images.current[0].onload = () => {
      currentFrame.current = 0;
      render();
    };

    function render() {
      if (!contextRef.current) return;
      const img = images.current[currentFrame.current];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      contextRef.current.clearRect(0, 0, safeCanvas.width, safeCanvas.height);
      contextRef.current.drawImage(img, 0, 0, safeCanvas.width, safeCanvas.height);
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = safeSection.getBoundingClientRect();
          const scrollableHeight = safeSection.offsetHeight - window.innerHeight;
          const scrollY = Math.min(
            Math.max(-rect.top, 0),
            scrollableHeight
          );

          const progress = scrollY / scrollableHeight;
          currentFrame.current = Math.min(
            FRAME_COUNT - 1,
            Math.floor(progress * FRAME_COUNT)
          );

          render();
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: '300vh',
        background: '#000',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;