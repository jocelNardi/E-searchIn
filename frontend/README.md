# E-searchIn Frontend

Application React pour faciliter la recherche de services locaux.

## Fonctionnalités

- Page d'accueil avec affichage des catégories de services
- Design responsive avec Tailwind CSS
- Interface moderne et intuitive
- Catégories disponibles :
  - Hôtels
  - Chauffeurs
  - Locations de véhicules
  - Restaurants
  - Guides touristiques
  - Activités
  - Shopping
  - Services divers

## Technologies Utilisées

- **React 19** - Bibliothèque UI
- **TypeScript 5.9** - Typage statique
- **Tailwind CSS 4.1** - Framework CSS utilitaire
- **Vite 7.1** - Build tool rapide

## Installation

```bash
# Installer les dépendances
npm install
```

## Développement

```bash
# Démarrer le serveur de développement
npm run dev
```

L'application sera accessible sur http://localhost:5173

## Build Production

```bash
# Créer un build de production
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Prévisualisation du Build

```bash
# Prévisualiser le build de production
npm run preview
```

## Linting

```bash
# Vérifier la qualité du code
npm run lint
```

## Structure du Projet

```
frontend/
├── src/
│   ├── components/
│   │   └── Dashboard.tsx    # Composant principal du dashboard
│   ├── App.tsx              # Composant racine
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles globaux avec Tailwind
├── public/                  # Ressources statiques
└── index.html              # Template HTML
```

## Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie la qualité du code avec ESLint

## Prochaines Étapes

- [ ] Ajouter la fonctionnalité de recherche
- [ ] Implémenter les pages de détails pour chaque catégorie
- [ ] Ajouter l'authentification utilisateur
- [ ] Connecter à une API backend
- [ ] Ajouter des filtres de recherche avancés
