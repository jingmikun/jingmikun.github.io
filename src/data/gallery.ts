export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  category?: string;
  date?: string;
  tags?: string[];
  show?: boolean;
}

export const galleryData: GalleryImage[] = [
  {
    id: "1",
    title: "Research Conference 2024",
    description: "Presenting my latest research at the international conference",
    imageUrl: "/images/conference-2024.jpg",
    thumbnailUrl: "/images/conference-2024-thumb.jpg",
    category: "Research",
    date: "2024-03-15",
    tags: ["conference", "research", "presentation"],
    show: false
  },
];
