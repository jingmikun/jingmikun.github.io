export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "2025-09-12",
    title: "I am now so-called a Master Zero Student!",
    description: "Thankfully, I got recommended for admission and I am now busy working on my Bachelor Thesis.",
  },

  // If you don't want to show news, just make the array empty.
  /*{
    date: "March 2024",
    title: "Paper accepted at ICML 2024",
    description: "Our work on causal discovery in time series data has been accepted at ICML 2024.",
    link: "https://icml.cc/",
  }*/
];
