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
    title: "Paperlist for Embodied Foundation Model",
    description:
      "Curating and keep maintaining the awesome embodied foundation model work both from academic and industrial fields.",
    projectUrl: "hhttps://vapour-x.cn/docs/foundation/paper-list/",
    imageUrl:
      "/images/paperlist.png",
    codeUrl: "https://github.com/VapourX-ScaleLab/Embodied-Manipulation-Foundation-Model-Paper-List",
  },
  {
    title: "VapourX Open Platform",
    description:
      "Me and my co-workers founded VapourX, and we have posted several blogs and academic activities on the platform. We are warmly welcoming anyone who want to make a change to the society.",
    projectUrl: "https://vapour-x.cn",
    imageUrl:
      "/images/VapourXlogo.png",
    codeUrl: "https://github.com/VapourX-ScaleLab/VapourX-ScaleLab.github.io",
  },
  {
    title: "ScaleLab Newcomer Guide",
    description:
      "We build the guide for newcomer who want to join ScaleLab for research internship or further education!",
    projectUrl: "https://scalelab-sjtu.github.io/start.html",
    imageUrl:
      "/images/guide.png",
  },
];
