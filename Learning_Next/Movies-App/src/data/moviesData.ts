interface Movie {
  id: string;
  title: string;
  comments: number;
  rating: number;
  description: string;
  commentsList: string[];
}

const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    comments: 124,
    rating: 4.7,
    description: "A mind-bending thriller by Christopher Nolan.",
    commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
  },
  {
    id: "2",
    title: "Interstellar",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
    commentsList: [
      "Amazing visual effects!",
      "Loved the soundtrack.",
      "A bit confusing but great.",
    ],
  },
  {
    id: "3",
    title: "The Dark Knight",
    comments: 255,
    rating: 4.9,
    description: "The iconic Batman film directed by Christopher Nolan.",
    commentsList: [
      "The best Batman movie!",
      "Heath Ledger was outstanding.",
      "Iconic movie.",
    ],
  },
];

export default movies;
