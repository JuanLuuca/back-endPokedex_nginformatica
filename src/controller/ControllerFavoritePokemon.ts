import { typeFavor } from "../types/types";
import { UsersModel } from "../models/UsersModel";
import { Request, Response } from "express";

export const ControllerFavoritePokemon = {

  async insertInfoFavorite(req: Request, res: Response) {
    try {
        let id = req.params.id

        const arrayFavor: typeFavor[] = req.body.map((item: typeFavor) => ({
            id: item.id,
            name: item.name,
            imagemPokemon: item.imagemPokemon,
            experiencia: item.experiencia,
            peso: item.peso,
        }));

        console.log(arrayFavor);

        const update = {
            $push: { favoritesPokemon: { $each: arrayFavor } },
        };

        UsersModel.findByIdAndUpdate(id, update)
            .then(() => {
                res.status(200).json({ message: 'Informações do favoritos inseridas com sucesso' });
            })
            .catch((error) => {
                res.status(500).json({ message: 'Informações não foram inseridas', error });
            });
    } catch (error) {
        res.status(400).json({ message: 'O endpoint não chegou ou deu errado' });
    }
  },   

};