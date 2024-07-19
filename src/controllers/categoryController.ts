import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../services/categoryService';
import { ErrorHandler } from '../utils/errorHandler';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await categoryService.getCategories();

        if (categories.length === 0) {
            return res.status(200).json({
                status: 200,
                data: categories,
                message: "Aucune catégorie trouvée."
            });
        }

        return res.status(200).json({
            status: 200,
            data: categories,
            message: "Catégories récupérées avec succès."
        });
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);

        if (category) {
            return res.status(200).json({
                status: 200,
                data: category,
                message: "Catégorie récupérée avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Catégorie non trouvée'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.createCategory(req.body);
        return res.status(201).json({
            status: 201,
            data: category,
            message: "Catégorie créée avec succès."
        });
    } catch (error) {
        next(new ErrorHandler(400, 'Erreur lors de la création de la catégorie'));
    }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);

        if (category) {
            return res.status(200).json({
                status: 200,
                data: category,
                message: "Catégorie mise à jour avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Catégorie non trouvée'));
        }
    } catch (error) {
        next(new ErrorHandler(400, 'Erreur lors de la mise à jour de la catégorie'));
    }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);

        if (category) {
            return res.status(200).json({
                status: 200,
                message: 'Catégorie supprimée avec succès.'
            });
        } else {
            next(new ErrorHandler(404, 'Catégorie non trouvée'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};
