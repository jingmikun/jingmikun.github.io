export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  projectUrl?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "IROS Workshop",
    title: "InsertScale: A Benchmark towards Foundation Visuo-Tactile Policy for Insertion Task",
    authors: "<b>Congsheng Xu*</b>, Jingxiang Guo*, Baijun Chen*,  Liuhaichen Yang, Zhen Zou, Yuzhang Li, Jieji Ren, Yiming Wang, Yichao Yan, Yao Mu†, Xiaokang Yang†",
    tldr: "Propose a visuo-tactile benchmark and scalable policy learning framework for insertion tasks, providing standardized tasks, metrics, and multi-modal datasets to evaluate and train foundation policies.",
    imageUrl:
      "/images/InsertScale.png",
    award: "Accepted by IROS'25 Workshop on Latest Result!"
  },
  {
    year: "2025",
    conference: "ICCV Workshop",
    title: "HyCodePolicy: Hybrid Language Controllers for Multimodal Monitoring and Decision in Embodied Agents",
    authors: "Yibin Liu*, Zhixuan Liang‡, Zanxin Chen*, Tianxing Chen, Mengkang Hu, Wanxi Dong, <b>Congsheng Xu</b>, Zhaoming Han, Yusen Qin, Yao Mu†",
    tldr: "Propose a visuo-tactile benchmark and scalable policy learning framework for insertion tasks, providing standardized tasks, metrics, and multi-modal datasets to evaluate and train foundation policies.",
    imageUrl:
      "/images/hycode.png",
    award: "Accepted by ICCV'25 Workshop on MMR!",
    paperUrl: "https://arxiv.org/pdf/2508.02629",
    projectUrl: "https://huggingface.co/papers/2508.02629",
  },
  {
    year: "2025",
    conference: "ICCV & ICCV Workshop",
    title: "Perceiving and Acting in First-Person: A Dataset and Benchmark for Egocentric Human-Object-Human Interactions",
    authors: "Liang Xu, Chengqun Yang, Zili Lin, Fei Xu, Yifan Liu, <b>Congsheng Xu</b>, Yiyi Zhang, Jie Qin, Xingdong Sheng, Yunhui Liu, Xin Jin, Yichao Yan1*, Wenjun Zeng, Xiaokang Yang",
    tldr: "InterVLA features a large-scale human-object-human interaction dataset in a vision-language-action scheme, where an assistant provides services to an instructor based on egocentric perception and verbal commands.",
    imageUrl:
      "/images/intervla.png",
    award: "Accepted as ICCV'25 Poster and ICCV HRSIC Workshop!",
    paperUrl: "https://arxiv.org/pdf/2508.04681",
    projectUrl: "https://liangxuy.github.io/InterVLA/"
  },
  {
    year: "2024",
    conference: "ECCV",
    title: "HIMO: A New Benchmark for Full-Body Human Interacting with Multiple Objects",
    authors: "Xintao Lv*, Liang Xu*, Yichao Yan, Xin Jin, <b>Congsheng Xu</b>, Shuwen Wu, Yifan Liu, Lincheng Li, Mengxiao Bi,Wenjun Zeng ,Xiaokang Yang",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We propose HIMO, a large-scale MoCap dataset of full-body human interacting with multiple objects, containing 3.3K 4D HOI sequences and 4.08M 3D HOI frames. We also annotate HIMO with detailed textual descriptions and temporal segments, benchmarking two novel tasks of HOI synthesis conditioned on either the whole text prompt or the segmented text prompts as fine-grained timeline control.",
    imageUrl:
      "/images/himo.png",
    award: "Accepted as ECCV'24 Poster!",
    projectUrl: "https://lvxintao.github.io/himo/",
    paperUrl: "https://arxiv.org/pdf/2407.12371",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "Inter-X: Towards Versatile Human-Human Interaction Analysis",
    authors: "Liang Xu, Xintao Lv, Yichao Yan*, Xin Jin*, Shuwen Wu, <b>Congsheng Xu</b>, Yifan Liu, Yizhou Zhou, Fengyun Rao, Xingdong Sheng, Yunhui Liu, Wenjun Zeng, Xiaokang Yang",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "To better perceive and generate human-human interactions, we propose Inter-X, a currently largest human-human interaction dataset with accurate body movements and diverse interaction patterns, together with detailed hand gestures.",
    imageUrl:
      "/images/interx.png",
    award: "Accepted as CVPR'24 Poster!",
    projectUrl: "https://liangxuy.github.io/inter-x/",
    paperUrl: "https://arxiv.org/pdf/2312.16051",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
