export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2022—2026",
    institution: "Shanghai Jiao Tong University",
    degree: "Bachelor in Information Engineering",
  },
  {
    year: "From 2026",
    institution: "Shanghai Jiao Tong University",
    degree: "Incoming Ph.D. Student",
    advisor: "Prof. Xiaokang Yang & Prof. Yao Mu",
  },
];
