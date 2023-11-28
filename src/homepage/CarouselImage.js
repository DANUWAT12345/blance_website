import React from 'react';

function CarouselImage({ text }) {
  return (
    text === '1' ? (
      <img
        src={`https://static.vecteezy.com/system/resources/thumbnails/008/175/512/original/modern-interior-design-living-room-with-large-white-classic-panels-and-wall-mock-up-3d-render-illustration-4k-animation-scene-video.jpg`}
        alt={text}
        style={{ maxHeight: '600px', width: '100%'}}
        className="img-fluid"
      />
    ) : text === '2' ? (
      <img
        src={`https://wallpaperswide.com/download/minimalist_interior_design-wallpaper-2560x1440.jpg`}
        alt={text}
        style={{ maxHeight: '600px', width: '100%'}}
        className="img-fluid"
      />
    ) : text === '3' ? (
      <img
        src={`https://static.vecteezy.com/system/resources/thumbnails/009/904/355/original/modern-interior-japandi-style-design-livingroom-scandinavian-apartment-with-wooden-furniture-high-quality-footage-4k-3d-render-illustration-video.jpg`}
        alt={text}
        style={{ maxHeight: '600px', width: '100%'}}
        className="img-fluid"
      />
    ) : null
  );
}

export default CarouselImage;
