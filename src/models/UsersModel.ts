import mongoose, { Schema } from "mongoose";
import { CapturePokemonSchema } from "./CapturePokemon";
import { FavoritePokemonSchema } from "./FavoritePokemon";

export const UsersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      require: false
    },
    infoCapturePokemon: [CapturePokemonSchema],
    favoritesPokemon: [FavoritePokemonSchema]
  },
  { timestamps: true }
);

export const UsersModel = mongoose.model("Users", UsersSchema);
