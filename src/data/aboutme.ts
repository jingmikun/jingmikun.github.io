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
  name: "Mingwei Li",
  title: "Incoming Master Student & Possible PhD Candidate",
  institution: "Shanghai Jiao Tong University",
  // Note that links work in the description
  description:
    "I'm a Senior Student in <a href='https://www.sjtu.edu.cn'>SJTU</a> in <a href='https://smse.sjtu.edu.cn/'>School of Material Science and Engineering</a> as an <b> incoming Master Candidate </b> under supervision of <a href='https://smse.sjtu.edu.cn/people/detail_new/20308'>Prof.Xu YanLing</a> working on <b>Automatic Programing for Welding Robots</b>. \n I am recently interested in <b> Reinforcement Learning, Agentic AI </b> and <b>3D Vision Tasks</b>. As a rookie and self-learner in these field, I am excited to learn from the community, share and talk with friends interested in these topics as well. \n Reinforcement Learning Engineer, Jazz and Modern Music Enthusiast, Poet and Social Science Lover, <b> Be open-minded and explore the rest of the world</b>.",
  email: "jingmikun@sjtu.edu.cn",
  imageUrl:
    "https://avatars.githubusercontent.com/u/122981269?s=400&u=c7410fbe3a43aad5daf11dd9f9d3c50147a4453c&v=4",
  githubUsername: "jingmikun",
  galleryUrl: "/gallery",
  institutionUrl: "https://www.sjtu.edu.cn",
  // altName: "",
  // secretDescription: "I like dogs.",
};
