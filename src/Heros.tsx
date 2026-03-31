// src/Hero.tsx
import React, { useEffect, useRef } from 'react';

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

    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const index = String(i + 1).padStart(4, '0');
      img.src = `/title-sequence/title-${index}.webp`;
      images.current.push(img);
    }

    // Start render once first image loads
    if (images.current[0]) {
      images.current[0].onload = () => {
        currentFrame.current = 0;
        render();
      };
    }

    function render() {
      if (!contextRef.current || !canvas) return;
      const img = images.current[currentFrame.current];
      
      // Safety check if image isn't loaded yet
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
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

      contextRef.current.clearRect(0, 0, canvasWidth, canvasHeight);
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
          // Calculate progress based on total page scroll
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Define how many "screens" of scrolling should play the full animation
          // 1.5 = Animation finishes after scrolling 1.5 screens down
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
    
    // Trigger once on load
    onScroll();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed Canvas Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1, // Puts canvas BEHIND your content
          background: '#000',
          pointerEvents: 'none', // Lets clicks pass through
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

      {/* Actual Content Section (Only 100vh tall) */}
      <section
        style={{
          position: 'relative',
          height: '100vh', // Takes up exactly one screen
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff', // Ensure text is visible over black canvas
          zIndex: 1,
        }}
      >
        {/* You can add a title or CTA here if you want */}
        {/* <h1>Fanny Vo</h1> */}
      </section>
    </>
  );
};

export default Hero;