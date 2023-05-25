import { typeCapture } from "@/types/types";
import { UsersModel } from "../models/UsersModel";
import { Request, Response } from "express"
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export const ControllerCapturePokemon = {

    async insertInfoCapture(req: Request, res: Response) {
        try {
            let id = req.params.id
    
            const arrayCapture: typeCapture[] = req.body.map((item: typeCapture) => ({
                id: item.id,
                name: item.name,
                imagemPokemon: item.imagemPokemon,
                experiencia: item.experiencia,
                peso: item.peso,
                habitat: '',
                local_captura: '',
                alimentacao: '',
                fraquezas: '',
                ataques: '',
            }));
    
            console.log(arrayCapture);
    
            const update = {
                $push: { infoCapturePokemon: { $each: arrayCapture } },
            };
    
            UsersModel.findByIdAndUpdate(id, update)
                .then(() => {
                    res.status(200).json({ message: 'Informações do capturados inseridas com sucesso' });
                })
                .catch((error) => {
                    res.status(500).json({ message: 'Informações não foram inseridas', error });
                });
        } catch (error) {
            res.status(400).json({ message: 'O endpoint não chegou ou deu errado' });
        }
      },

      async UpdateIdCapture(req: Request, res: Response) {
        try {


            const result = await UsersModel.updateOne(
                {
                    email: req.body.email
                },
                {
                    $set: {
                        "infoCapturePokemon.$[elem].habitat": req.body.habitat,
                        "infoCapturePokemon.$[elem].local_captura": req.body.local_captura,
                        "infoCapturePokemon.$[elem].alimentacao": req.body.alimentacao,
                        "infoCapturePokemon.$[elem].fraquezas": req.body.fraquezas,
                        "infoCapturePokemon.$[elem].ataques": req.body.ataques,
                    }
                },
                {
                    arrayFilters: [
                        {
                            "elem._id": new ObjectId(req.body._id)
                        }
                    ],
                    returnOriginal: false
                }
            )

            res.status(200).json({ result, message: 'deu certo'})
        } catch (error) {
            res.status(400).json({ message: 'O endpoint não chegou ou deu errado' });
        }
      },
};