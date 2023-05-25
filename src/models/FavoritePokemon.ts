import mongoose, { Schema } from "mongoose";

export const FavoritePokemonSchema = new Schema(
  {
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    imagemPokemon: {
      type: String,
      required: false,
    },
    experiencia: {
      type: String,
      required: false,
    },
    peso: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const FavoritePokemonModel = mongoose.model("FavoritePokemon", FavoritePokemonSchema);
