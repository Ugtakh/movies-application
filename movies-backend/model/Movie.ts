import { Schema, model } from "mongoose";

interface IMovie {
  plot: String;
  genres: [String];
  runtime: Number;
  cast: [String];
  num_mflix_comments: Number;
  poster: String;
  title: String;
  fullplot: String;
  countries: [String];
  released: Date;
  directors: [String];
  writers: [String];
  awards: {
    wins: Number;
    nominations: Number;
    text: String;
  };
  lastupdated: String;
  year: Number;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  type: String;
  tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
    };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
