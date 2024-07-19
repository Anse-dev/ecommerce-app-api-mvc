
# e-Commerce API

Une API RESTful pour une application de commerce électronique, construite avec TypeScript, Express.js et MongoDB.

## Table des Matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement de l'Application](#lancement-de-lapplication)
- [Endpoints de l'API](#endpoints-de-lapi)
  - [Produits](#produits)
  - [Catégories](#catégories)
  - [Utilisateurs](#utilisateurs)
- [Gestion des Erreurs](#gestion-des-erreurs)
- [Structure du Projet](#structure-du-projet)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (ou utilisez [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/Anse-dev/ecommerce-app-api-mvc
cd ecommerce-api
npm install
```

## Configuration

Créez un fichier `.env` à la racine du projet et ajoutez les configurations suivantes :

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
```

Assurez-vous que MongoDB est en cours d'exécution si vous utilisez une instance locale.

## Lancement de l'Application

Pour lancer l'application en mode développement :

```bash
npm run dev
```

Pour lancer l'application en mode production :

```bash
npm start
```

## Endpoints de l'API

### Produits

- **GET /api/v1/products** : Récupérer tous les produits
- **GET /api/v1/products/:id** : Récupérer un produit par son ID
- **POST /api/v1/products** : Créer un nouveau produit
- **PUT /api/v1/products/:id** : Mettre à jour un produit par son ID
- **DELETE /api/v1/products/:id** : Supprimer un produit par son ID

### Catégories

- **GET /api/v1/categories** : Récupérer toutes les catégories
- **GET /api/v1/categories/:id** : Récupérer une catégorie par son ID
- **POST /api/v1/categories** : Créer une nouvelle catégorie
- **PUT /api/v1/categories/:id** : Mettre à jour une catégorie par son ID
- **DELETE /api/v1/categories/:id** : Supprimer une catégorie par son ID

### Utilisateurs

- **GET /api/v1/users** : Récupérer tous les utilisateurs
- **GET /api/v1/users/:id** : Récupérer un utilisateur par son ID
- **POST /api/v1/users** : Créer un nouvel utilisateur
- **PUT /api/v1/users/:id** : Mettre à jour un utilisateur par son ID
- **DELETE /api/v1/users/:id** : Supprimer un utilisateur par son ID

## Gestion des Erreurs

L'application utilise un middleware de gestion des erreurs pour capturer et gérer les erreurs de manière cohérente. Les erreurs sont formatées et renvoyées au client avec le code de statut HTTP approprié.

## Structure du Projet

```plaintext
src/
│
├── config/
│   └── db.ts                # Configuration de la base de données
│
├── controllers/
│   ├── categoryController.ts # Contrôleur pour les catégories
│   ├── productController.ts  # Contrôleur pour les produits
│   └── userController.ts     # Contrôleur pour les utilisateurs
│
├── middlewares/
│   ├── errorHandler.ts       # Middleware de gestion des erreurs
│
├── models/
│   ├── categoryModel.ts      # Modèle de catégorie
│   ├── productModel.ts       # Modèle de produit
│   └── userModel.ts          # Modèle d'utilisateur
│
├── routes/
│   ├── categoryRoutes.ts     # Routes pour les catégories
│   ├── productRoutes.ts      # Routes pour les produits
│   └── userRoutes.ts         # Routes pour les utilisateurs
│
├── services/
│   ├── categoryService.ts    # Service pour les catégories
│   ├── productService.ts     # Service pour les produits
│   └── userService.ts        # Service pour les utilisateurs
│
├── utils/
│   ├── errorHandler.ts       # Utilitaire pour la gestion des erreurs
│
├── app.ts                    # Configuration et démarrage de l'application Express
└── server.ts                 # Serveur HTTP
```

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes pour contribuer :

1. Fork le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Poussez à la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

