import mongoose from "mongoose";

export async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${process.env.MONGOATLASUSER}:${process.env.MONGOATLASPASSWORD}@cluster0.7vy22pj.mongodb.net/?retryWrites=true&w=majority`
    );
    return console.log("Banco conectado com sucesso");
  } catch (error) {
    return console.log("Error ao conectar com o banco " + error);
  }
}
