
import React, { useRef, useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt }) => {
  const [scale, setScale] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale(s => Math.min(s + 0.1, 2));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.1, 0.5));
  const handleReset = () => setScale(1);

  // Scroll controls (optional)
  const scroll = (dx: number, dy: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: dx, top: dy, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-2">
        <button onClick={handleZoomOut} className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">-</button>
        <button onClick={handleZoomIn} className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">+</button>
        <button onClick={handleReset} className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">Reset</button>
        <div className="grow" />
        <button onClick={() => scroll(0, -80)} aria-label="Scroll Up" className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">↑</button>
        <button onClick={() => scroll(-80, 0)} aria-label="Scroll Left" className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">←</button>
        <button onClick={() => scroll(80, 0)} aria-label="Scroll Right" className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">→</button>
        <button onClick={() => scroll(0, 80)} aria-label="Scroll Down" className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">↓</button>
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-auto border rounded-lg bg-gray-50 mx-auto max-h-[70vh] max-w-full" 
        style={{ minHeight: 300 }}
      >
        <img
          src={src}
          alt={alt}
          style={{ transform: `scale(${scale})`, transformOrigin: "top left", transition: "transform 0.25s" }}
          className="block"
        />
      </div>
    </div>
  );
};

export default ZoomableImage;
