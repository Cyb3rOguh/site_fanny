// src/Hero.tsx
import React, { useEffect, useRef } from 'react';
import './Heros.css';

const FRAME_COUNT = 100; 

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    contextRef.current = ctx;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    // Preload images (Your existing logic)
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const index = String(i + 1).padStart(4, '0');
      // Ensure this path is correct relative to your 'public' folder
      img.src = `/title-sequence/title-${index}.webp`;
      images.current.push(img);
    }

    if (images.current[0]) {
      images.current[0].onload = () => {
        currentFrame.current = 0;
        render();
      };
    }

    function render() {
      if (!contextRef.current || !canvas) return;
      const img = images.current[currentFrame.current];
      
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Optional: Clear only if you want transparency. 
      // If your images are full rectangles, clearRect is good practice.
      contextRef.current.clearRect(0, 0, canvasWidth, canvasHeight);

      // Logic to center the image sequence (keeping your original scaling)
      const maxDrawWidth = canvasWidth * 0.8; 
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;

      let drawWidth = maxDrawWidth;
      let drawHeight = drawWidth / imgRatio;

      if (drawHeight > canvasHeight) {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imgRatio;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      contextRef.current.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      );
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const triggerDistance = windowHeight * 1.5; 

          const progress = Math.min(Math.max(scrollY / triggerDistance, 0), 1);
          
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
    onScroll();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      {/* 1. Background Video */}
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Replace with your actual video path */}
        <source src="/herobg.mp4" type="video/mp4" />
        
      </video>

      {/* 2. Image Sequence Canvas (Sits on top of video) */}
      <canvas
        ref={canvasRef}
        className="hero-canvas"
      />
      
      {/* 3. Optional Text Overlay (Sits on top of everything) */}
      <div className="hero-content">
        {/* <h1 className="hero-title">Fanny Vo</h1> */}
      </div>
    </div>
  );
};

export default Hero;