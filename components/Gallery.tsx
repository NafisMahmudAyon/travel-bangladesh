'use client'
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
const Gallery = ({ gallery, title }: { gallery: string[], title: string }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {
        gallery && gallery.length > 0 && (
          <div className="mb-10">
            <SectionTitle title="Gallery" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    width={320} height={200}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>)}
      {/* Lightbox */}
      {gallery && (
        <ImageLightbox
          images={gallery}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

export default Gallery