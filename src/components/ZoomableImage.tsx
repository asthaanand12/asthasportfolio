
import React, { useRef, useState } from "react";

interface ZoomableImageProps {
  src?: string;
  alt: string;
  srcList?: string[]; // new: supports multi-page
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, srcList }) => {
  const [scale, setScale] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 2));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.5));
  const handleReset = () => setScale(1);

  // Scroll controls (optional)
  const scroll = (dx: number, dy: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: dx, top: dy, behavior: "smooth" });
    }
  };

  // Use either a single image or a list
  const images = srcList && srcList.length > 0 ? srcList : src ? [src] : [];

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
        <div style={{ width: "100%" }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${alt}${images.length > 1 ? ` (page ${idx + 1})` : ""}`}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                transition: "transform 0.25s",
                marginBottom: idx !== images.length - 1 ? 24 : 0,
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage;
