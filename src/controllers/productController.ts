import { Request, Response, NextFunction } from 'express';
import * as productService from '../services/productService';
import { ErrorHandler } from '../utils/errorHandler';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productService.getProducts();

        if (products.length === 0) {
            return res.status(200).json({
                status: 200,
                data: products,
                message: "Aucun produit trouvé."
            });
        }

        return res.status(200).json({
            status: 200,
            data: products,
            message: "Produits récupérés avec succès."
        });
    } catch (error) {

        next(new ErrorHandler(500, "Erreur serveur"));
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productService.getProductById(req.params.id);

        if (product) {
            return res.status(200).json({
                status: 200,
                data: product,
                message: "Produit récupéré avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Produit non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).json({
            status: 201,
            data: product,
            message: "Produit créé avec succès."
        });
    } catch (error) {

        next(new ErrorHandler(400, 'Erreur lors de la création du produit'));
    }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);

        if (product) {
            return res.status(200).json({
                status: 200,
                data: product,
                message: "Produit mis à jour avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Produit non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(400, 'Erreur lors de la mise à jour du produit'));
    }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productService.deleteProduct(req.params.id);

        if (product) {
            return res.status(200).json({
                status: 200,
                message: 'Produit supprimé avec succès.'
            });
        } else {
            next(new ErrorHandler(404, 'Produit non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};