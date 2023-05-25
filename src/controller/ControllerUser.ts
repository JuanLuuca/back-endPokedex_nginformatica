import { Request, Response } from "express";
import { UsersModel } from "../models/UsersModel";
import { TypeBody } from "@/types/types";

export const controllerUsers = {

  async login(req: Request, res: Response) {
    try {
      const response = await UsersModel.findOne({ email: req.body.email, password: req.body.password });

      if(response == null) {
        res
        .status(400)
        .json({ message: "O Usuario não existe" });
      } else {
        return res
        .status(200)
        .json({ response, message: "Usuario encontrado com sucesso" });
      }
    } catch (error) {
      return console.log('error na api de login');
    }
  },

  async register(req: Request, res: Response) {
    try {
      const data: TypeBody = {
        email: req.body.email as string,
        password: req.body.password as string,
        token: Math.random().toString(36).substr(2)
      };

      const findUser = await UsersModel.findOne({ email: req.body.email, password: req.body.password });

      if(findUser?.email == req.body.email) {
        return res.status(400).json({ message: 'este email ja existe' })
      } else {
        const response = await UsersModel.create(data);
        return res.status(200).json({ response, message: "Usuario criado com sucesso" });
      }
    } catch (error) {
      return res.status(400).json({ message: "error no back-end" });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      let id = req.params.id

      const user = await UsersModel.findById(id);

      console.log(user);

      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }

      } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ message: 'Erro ao obter informações do usuário' });
      }
  },

};