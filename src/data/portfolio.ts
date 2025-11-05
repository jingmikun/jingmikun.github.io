export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Poementer app by Vibe Coding",
    description:
      "Construct a platform for poemlovers and potential poets to share their masterpieces and inspirations, this work is empowered by AI",
    projectUrl: "hhttps://vapour-x.cn/docs/foundation/paper-list/",
    imageUrl:
      "/images/poementer.png",
    codeUrl: "https://github.com/VapourX-ScaleLab/Embodied-Manipulation-Foundation-Model-Paper-List",
  },
];
