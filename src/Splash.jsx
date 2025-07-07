import React from 'react';

function Splash() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white p-4">
      <img
        src="/logo.png"
        alt="Sriaara Logo"
        className="max-h-[60vh] max-w-[80vw] object-contain"
      />
    </div>
  );
}

export default Splash;
