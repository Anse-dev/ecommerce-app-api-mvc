import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';
import { ErrorHandler } from '../utils/errorHandler';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getUsers();

        if (users.length === 0) {
            return res.status(200).json({
                status: 200,
                data: users,
                message: "Aucun utilisateur trouvé."
            });
        }

        return res.status(200).json({
            status: 200,
            data: users,
            message: "Utilisateurs récupérés avec succès."
        });
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (user) {
            return res.status(200).json({
                status: 200,
                data: user,
                message: "Utilisateur récupéré avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Utilisateur non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            status: 201,
            data: user,
            message: "Utilisateur créé avec succès."
        });
    } catch (error) {
        next(new ErrorHandler(400, 'Erreur lors de la création de l\'utilisateur'));
    }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);

        if (user) {
            return res.status(200).json({
                status: 200,
                data: user,
                message: "Utilisateur mis à jour avec succès."
            });
        } else {
            next(new ErrorHandler(404, 'Utilisateur non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(400, 'Erreur lors de la mise à jour de l\'utilisateur'));
    }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.deleteUser(req.params.id);

        if (user) {
            return res.status(200).json({
                status: 200,
                message: 'Utilisateur supprimé avec succès.'
            });
        } else {
            next(new ErrorHandler(404, 'Utilisateur non trouvé'));
        }
    } catch (error) {
        next(new ErrorHandler(500, 'Erreur serveur'));
    }
};
