import Image from "next/image";
import { GalleryImage } from "@/data/gallery";

interface GalleryEntryProps {
  image: GalleryImage;
  onClick?: (image: GalleryImage) => void;
}

export function GalleryEntry({ image, onClick }: GalleryEntryProps) {
  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm border border-zinc-200 hover:shadow-md transition-all duration-300"
      onClick={() => onClick?.(image)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.thumbnailUrl || image.imageUrl}
          alt={image.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-sm font-medium text-zinc-900 mb-1 line-clamp-1">
          {image.title}
        </h3>
        {image.description && (
          <p className="text-xs text-zinc-600 line-clamp-2 mb-2">
            {image.description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-zinc-500">
          {image.category && (
            <span className="px-2 py-1 bg-zinc-100 rounded-full">
              {image.category}
            </span>
          )}
          {image.date && (
            <span>{new Date(image.date).toLocaleDateString()}</span>
          )}
        </div>
        {image.tags && image.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {image.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-1.5 py-0.5 bg-zinc-50 text-zinc-600 rounded"
              >
                #{tag}
              </span>
            ))}
            {image.tags.length > 3 && (
              <span className="text-xs text-zinc-400">
                +{image.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
