'use client'
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import {Modal,ModalContent} from "aspect-ui"
import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  },[images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrevious]);

  if (!isOpen || images.length === 0) return null;

  return (
    <Modal isOpenExternal={isOpen}>
      <ModalContent className="max-w-5xl p-0 overflow-hidden bg-black/50 border-none rounded-2xl">
        <div className="relative flex items-center justify-center w-full h-full">
          <Button
            className="absolute top-4 right-4 rounded-full z-50 bg-black/70 hover:bg-black/90"
            size="icon"
            variant="ghost"
            onClick={onClose}
          >
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="relative flex items-center justify-center w-full">
            <Button
              className="absolute left-4 z-10 rounded-full bg-black/50 hover:bg-black/70"
              size="icon"
              variant="ghost"
              onClick={handlePrevious}
            >
              <ArrowLeft className="h-6 w-6 text-white" />
              <span className="sr-only">Previous image</span>
            </Button>

            <div className="w-full flex justify-center items-center bg-transparent">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={1080} height={720}
                className="max-h-[80vh] bg-transparent max-w-full object-contain"
              />
            </div>

            <Button
              className="absolute right-4 z-10 rounded-full bg-black/50 hover:bg-black/70"
              size="icon"
              variant="ghost"
              onClick={handleNext}
            >
              <ArrowRight className="h-6 w-6 text-white" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>

          <div className="absolute bottom-4 text-sm text-white/90">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImageLightbox;