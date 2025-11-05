"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryData, GalleryImage } from "@/data/gallery";
import { GalleryEntry } from "@/components/gallery-entry";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryData[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-xl mx-auto px-8 py-24">
        <div className="mb-12">
          <h1 className="font-serif text-4xl font-light tracking-wide mb-4">
            Image Gallery
          </h1>
          <p className="text-zinc-600 max-w-2xl">
            A collection of photos from my research journey, conferences, and collaborations. (Under Construction...)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryData
            .filter((image) => image.show !== false)
            .map((image, index) => (
              <GalleryEntry
                key={image.id}
                image={image}
                onClick={() => openModal(image, index)}
              />
            ))}
        </div>

        {galleryData.filter((image) => image.show !== false).length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500">No images in gallery yet.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-medium mb-2">
                  {selectedImage.title}
                </h2>
                {selectedImage.description && (
                  <p className="text-zinc-600 mb-4">{selectedImage.description}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  {selectedImage.category && (
                    <span className="px-3 py-1 bg-zinc-100 rounded-full">
                      {selectedImage.category}
                    </span>
                  )}
                  {selectedImage.date && (
                    <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                  )}
                </div>
                {selectedImage.tags && selectedImage.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
