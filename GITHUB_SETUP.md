# 🚀 Guide pour ajouter le projet sur GitHub

## 📋 Prérequis

1. **Git installé** sur votre machine
2. **Compte GitHub** créé
3. **GitHub CLI** (optionnel mais recommandé)

## 🔧 Étapes pour ajouter le projet sur GitHub

### 1. Initialiser le repository Git local

Ouvrez un terminal dans le dossier racine du projet (`C:\Users\ABDO EL IDRISSI\Desktop\tp6`) et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Student Management System with Spring Boot and Next.js"
```

### 2. Créer le repository sur GitHub

#### Option A : Via l'interface GitHub (Recommandé)

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** ou **"+"** → **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `student-management-system`
   - **Description** : `Full-stack student management system with Spring Boot backend and Next.js frontend`
   - **Visibility** : Public ou Private (selon votre choix)
   - **NE PAS** cocher "Add a README file" (nous en avons déjà un)
   - **NE PAS** cocher "Add .gitignore" (nous en avons déjà un)
4. Cliquez sur **"Create repository"**

#### Option B : Via GitHub CLI

```bash
# Installer GitHub CLI si pas déjà fait
# Puis créer le repository
gh repo create student-management-system --public --description "Full-stack student management system with Spring Boot backend and Next.js frontend"
```

### 3. Connecter le repository local à GitHub

```bash
# Ajouter l'origine remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/student-management-system.git

# Vérifier la connexion
git remote -v
```

### 4. Pousser le code vers GitHub

```bash
# Pousser vers la branche main
git branch -M main
git push -u origin main
```

## 🎯 Commandes Git utiles

### Vérifier le statut
```bash
git status
```

### Ajouter des fichiers spécifiques
```bash
git add nom-du-fichier
```

### Commit avec message
```bash
git commit -m "Description des modifications"
```

### Pousser les modifications
```bash
git push
```

### Récupérer les modifications
```bash
git pull
```

## 📁 Structure du projet sur GitHub

Votre repository contiendra :

```
student-management-system/
├── README.md                    # Documentation principale
├── GITHUB_SETUP.md             # Ce guide
├── .gitignore                  # Fichiers à ignorer
├── restart-backend.bat         # Script de démarrage backend
├── start-frontend.bat          # Script de démarrage frontend
├── student-management tp6/     # Frontend Next.js
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── package.json
│   └── .gitignore
└── TP6-SpringBoot-Swagger/     # Backend Spring Boot
    ├── src/
    ├── pom.xml
    └── .gitignore
```

## 🔄 Workflow de développement

### Pour ajouter de nouvelles fonctionnalités

1. **Créer une nouvelle branche**
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```

2. **Faire les modifications**
3. **Commit les changements**
   ```bash
   git add .
   git commit -m "Ajout de la nouvelle fonctionnalité"
   ```

4. **Pousser la branche**
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```

5. **Créer une Pull Request sur GitHub**

### Pour corriger des bugs

1. **Créer une branche de correction**
   ```bash
   git checkout -b fix/correction-bug
   ```

2. **Faire les corrections**
3. **Commit et push**
   ```bash
   git add .
   git commit -m "Correction du bug"
   git push origin fix/correction-bug
   ```

## 🌟 Améliorer votre repository

### Ajouter des badges dans le README

```markdown
![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-green)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)
```

### Ajouter des topics/tags

Sur la page de votre repository GitHub :
1. Cliquez sur l'engrenage ⚙️ à côté d'About
2. Ajoutez des topics : `spring-boot`, `nextjs`, `typescript`, `mysql`, `student-management`, `fullstack`

## 🚨 Problèmes courants

### Erreur d'authentification
```bash
# Configurer Git avec vos informations
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### Erreur de push
```bash
# Forcer le push (attention, utilisez avec précaution)
git push -f origin main
```

### Repository déjà existant
```bash
# Cloner un repository existant
git clone https://github.com/USERNAME/student-management-system.git
```

## 📚 Ressources utiles

- [Documentation Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [GitHub CLI](https://cli.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

## ✅ Checklist finale

- [ ] Git initialisé localement
- [ ] Repository créé sur GitHub
- [ ] Remote origin configuré
- [ ] Code poussé vers GitHub
- [ ] README mis à jour
- [ ] .gitignore configuré
- [ ] Topics ajoutés sur GitHub
- [ ] Description du repository remplie

🎉 **Félicitations !** Votre projet est maintenant sur GitHub !
