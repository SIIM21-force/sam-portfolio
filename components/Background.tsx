import React, { useEffect, useRef } from 'react';

interface BackgroundProps {
  theme: string;
}

const Background: React.FC<BackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Configuration
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 100;
    const connectionDistance = isMobile ? 80 : 150;
    const mouseInteractionDistance = 200;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges (or wrap around)
        if (this.x < 0) this.x = w;
        else if (this.x > w) this.x = 0;
        
        if (this.y < 0) this.y = h;
        else if (this.y > h) this.y = 0;

        // Mouse Interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInteractionDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseInteractionDistance - distance) / mouseInteractionDistance;
          
          // Gentle push away from mouse
          const strength = 1.5; 
          this.x -= forceDirectionX * force * strength;
          this.y -= forceDirectionY * force * strength;
        }
      }

      draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = theme === 'dark';
      
      // Theme-based styling
      // Dark mode: White glowing particles
      // Light mode: Dark gray subtle particles
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(26, 26, 26, 0.2)';
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(26, 26, 26, 0.05)';

      particles.forEach((particle, index) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, particleColor);

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = lineColor;
            // Opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500"
    />
  );
};

export default Background;