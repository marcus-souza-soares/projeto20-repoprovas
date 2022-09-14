import { Request, Response } from "express";
import * as userService from "../services/userServices.js";

export async function register(req: Request, res: Response){
    const { email, password, name } = req.body;
    if(!email || !password || !name) return res.status(417);
    await userService.createUser({email, password, name});
    res.sendStatus(201);
}

export async function login(req: Request, res: Response){
    const { email, password } = req.body;
    if(!email || !password) return res.status(417)
    const token = await userService.login(email, password);
    res.status(200).send({token});
}