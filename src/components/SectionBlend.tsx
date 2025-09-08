import React from 'react';

interface SectionBlendProps {
  from: string; // hex or rgba for the top color (previous section)
  to: string;   // hex or rgba for the bottom color (next section)
  height?: number; // px height of the blend zone
  overlap?: number; // px negative margin to overlap both sections
  blurPx?: number; // strength of blur
  opacity?: number; // 0-1 opacity of the blend overlay
  backdropBlurPx?: number; // additional backdrop blur to smear underlying pixels
}

const SectionBlend: React.FC<SectionBlendProps> = ({
  from,
  to,
  height = 200,
  overlap = 80,
  blurPx = 24,
  opacity = 0.95,
  backdropBlurPx = 18,
}) => {
  return (
    <div
      className="relative pointer-events-none"
      style={{
        height: `${height}px`,
        marginTop: `-${overlap}px`,
      }}
    >
      {/* Backdrop blur layer to mix actual pixels from both sections */}
      <div
        className="absolute inset-0"
        style={{
          // Using both standard and WebKit properties for broad support
          backdropFilter: `blur(${backdropBlurPx}px)`,
          WebkitBackdropFilter: `blur(${backdropBlurPx}px)`,
          background: 'transparent',
        }}
      />
      {/* Soft gradient layer with blur to smear the boundary */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${from} 0%, ${from}80 25%, ${to}B3 70%, ${to} 100%)`,
          filter: `blur(${blurPx}px)`,
          opacity,
        }}
      />
      {/* A second subtle feather to avoid any residual banding */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${from}1a 35%, ${to}1a 65%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default SectionBlend;
