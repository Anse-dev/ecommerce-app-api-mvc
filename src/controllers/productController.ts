import { Request, Response } from 'express';
import * as productService from '../services/productService'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getProducts();
        if (products.length < 1) {
            return res.json({ status: 200, data: products, message: "Yako y'a rien dedans!" })
        }
        return res.json({ status: 200, data: products, message: "Tous les products" })
    } catch (error) {
        return res.status(500).json({ status: 500, data: [], message: "Erreur serveur" });
    }
}