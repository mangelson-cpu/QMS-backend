# QMS-backend-Node

Queue Management System (QMS) Backend application built with Node.js and Express.

## Project Structure

```
├── node_modules/       # Dépendances (généré par npm)
├── src/                # Code source principal
│   ├── config/         # Fichiers de configuration (db, auth)
│   ├── controllers/    # Logique de gestion des requêtes
│   ├── models/         # Définition des données (schémas DB)
│   ├── routes/         # Définition des points de terminaison API
│   ├── middlewares/    # Fonctions intermédiaires (auth, logs)
│   ├── utils/          # Fonctions utilitaires partagées
│   └── app.js          # Point d'entrée de l'application
├── tests/              # Tests unitaires et d'intégration
├── .env                # Variables d'environnement
├── .gitignore          # Fichiers à ignorer par Git
├── package.json        # Métadonnées et dépendances
└── README.md           # Documentation du projet
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`

### Running the App

- Development mode:
  ```bash
   npm run dev
   ```
- Production mode:
  ```bash
   npm start
   ```

## License

ISC
