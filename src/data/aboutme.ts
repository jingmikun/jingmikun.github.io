export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  galleryUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "ACondawayUNo \n Congsheng Xu",
  title: "Incoming Ph.D. Student",
  institution: "Shanghai Jiao Tong University",
  // Note that links work in the description
  description:
    "I'm a Senior Student in <a href='https://www.sjtu.edu.cn'>SJTU</a> as well as the <b>Incoming Ph.D. Student</b> of <a href='https://scalelab-sjtu.github.io'>ScaleLab, SJTU</a>, under supervision of <a href='https://icne.sjtu.edu.cn/info/1064/1078.htm'>Prof. Xiaokang Yang</a> and <a href='https://yaomarkmu.github.io'>Prof. Yao Mu</a> in intersection of Embodied AI and AIGC. \n Before that, I work firmly with <a href='https://daodaofr.github.io'>Prof. Yichao Yan</a> and <a href='https://liangxuy.github.io'>Ph.D. Liang Xu</a> at Metaverse Lab, SJTU. \n I recently focus on topics like <b>Visuo-tactile Manipulation</b>, <b>Dexterous Hands</b> and <b>World Model</b>, if you are interested in my research, please feel free to contact me! \n I am also the founder of <a href='https://vapour-x.cn'>VapourX</a>, a platform for AIGC and E-AI, now I am happy that friends from everywhere and different field join here, I hope I will make it better with core members, don't hesitate to contact me to join! \n I spend exciting time with my friends in <a href='https://emagen.ai'>Emagen</a>, anyone who is enthusiastic about changing the world, <b>this is the place to be!</b>",
  email: "acondaway@sjtu.edu.cn",
  imageUrl:
    "https://avatars.githubusercontent.com/u/115391544?v=4",
  googleScholarUrl: "https://scholar.google.com/citations?user=PYFaxeoAAAAJ&hl=en",
  githubUsername: "ACondaway",
  linkedinUsername: "congsheng-xu-85944036b",
  blogUrl: "https://vapour-x.cn/authors/acondaway/",
  galleryUrl: "/gallery",
  institutionUrl: "https://www.sjtu.edu.cn",
  // altName: "",
  // secretDescription: "I like dogs.",
};
