import mongoose, { Schema } from "mongoose";

export const CapturePokemonSchema = new Schema(
  {
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
    habitat: {
      type: String,
      required: false,
    },
    local_captura: {
      type: String,
      required: false,
    },
    alimentacao: {
      type: String,
      require: false
    },
    fraquezas: {
        type: String,
        require: false
    },
    ataques: {
        type: String,
        require: false
    },
  },
  { timestamps: true }
);

export const CapturePokemonModel = mongoose.model("CapturePokemon", CapturePokemonSchema);
