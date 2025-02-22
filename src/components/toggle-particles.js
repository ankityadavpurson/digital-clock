import React, { useContext, useState } from 'react';
import ColorContext from '../store/color-context';
import Particle from '../board/Particle';

const ToggleParticles = () => {
  const colorCtx = useContext(ColorContext);
  const [showParticle, setShowParticle] = useState(false);
  return (
    <>
      {showParticle &&
        Array.from({ length: 16 }, (_, i) => i).map((num) => (
          <Particle key={`Particle-${num}`} timeout={num} />
        ))}
      <button
        title="Show Particles"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 35,
          marginBlock: 9,
          marginInline: 5,
          backgroundColor: 'transparent',
          border: 0,
        }}
        onClick={() => setShowParticle((s) => !s)}
      >
        <div
          className="transition"
          style={{
            width: 45,
            height: 21,
            borderRadius: 30,
            border: '1px solid white',
            position: 'relative',
            backgroundColor: 'transparent',
          }}
        >
          <div
            className="transition"
            style={{
              width: 17,
              height: 17,
              borderRadius: 20,
              margin: 1,
              position: 'absolute',
              border: '0.5px solid white',
              backgroundColor: showParticle ? colorCtx.pixelColor : '#32323280',
              left: showParticle ? 24 : 0,
            }}
          />
        </div>
        <input hidden type="checkbox" defaultValue={showParticle} />
      </button>
    </>
  );
};

export default ToggleParticles;
