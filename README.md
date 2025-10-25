
<img width="1910" height="987" alt="image" src="https://github.com/user-attachments/assets/d902f1aa-8914-495d-b590-418bdc069b39" />
<img width="1919" height="981" alt="image" src="https://github.com/user-attachments/assets/8d4d07da-fa66-4187-a026-14a96ea7ff97" />

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/b6cd678f-0c13-4ef5-a9c9-7085b16c52e0" />


# 🎓 Student Management System

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-green?style=for-the-badge&logo=spring)](https://spring.io/projects/spring-boot)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Un système de gestion d'étudiants moderne avec une architecture full-stack séparée, utilisant Spring Boot pour le backend et Next.js pour le frontend.

## ✨ Fonctionnalités

- 🎯 **Dashboard interactif** avec statistiques en temps réel
- 📊 **Graphiques** par année d'inscription
- 👥 **Gestion complète** des étudiants (CRUD)
- 🎨 **Interface moderne** et responsive
- 🔒 **API sécurisée** avec documentation Swagger
- 🗄️ **Base de données** MySQL persistante

## 🏗️ Architecture

- **Backend**: Spring Boot avec MySQL
- **Frontend**: Next.js avec TypeScript
- **Base de données**: MySQL

## 🚀 Démarrage rapide

### Prérequis

- Java 21+
- Node.js 18+
- MySQL 8.0+
- Maven 3.6+

### 1. Configuration de la base de données

Créez une base de données MySQL nommée `studenttp6` :

```sql
CREATE DATABASE studenttp6;
```

### 2. Démarrage du Backend (Spring Boot)

```bash
cd TP6-SpringBoot-Swagger
./mvnw spring-boot:run
```

**OU utilisez le script Windows :**
```bash
restart-backend.bat
```

Le backend sera disponible sur : http://localhost:8080

**Documentation API (Swagger)**: http://localhost:8080/swagger-ui.html

> ⚠️ **Important** : Le backend doit être démarré AVANT le frontend pour éviter les erreurs CORS.

### 3. Démarrage du Frontend (Next.js)

```bash
cd "student-management tp6"
npm install
npm run dev
```

**OU utilisez le script Windows :**
```bash
start-frontend.bat
```

Le frontend sera disponible sur : http://localhost:3000

## 📋 Fonctionnalités

### Backend (Spring Boot)
- ✅ CRUD des étudiants
- ✅ Statistiques par année
- ✅ Documentation Swagger
- ✅ Base de données MySQL

### Frontend (Next.js)
- ✅ Dashboard avec statistiques
- ✅ Liste des étudiants
- ✅ Formulaire d'ajout
- ✅ Interface moderne et responsive

## 🔧 Modèle de données

### Student Entity
```java
{
  "id": number,
  "nom": string,        // Nom de famille
  "prenom": string,     // Prénom
  "email": string,      // Email
  "year": number,       // Année d'inscription
  "dateNaissance": Date // Date de naissance
}
```

## 📡 Endpoints API

- `POST /students/save` - Créer un étudiant
- `GET /students/all` - Récupérer tous les étudiants
- `DELETE /students/delete/{id}` - Supprimer un étudiant
- `GET /students/count` - Compter les étudiants
- `GET /students/byYear` - Statistiques par année

## 🎨 Interface utilisateur

- **Dashboard**: Vue d'ensemble avec statistiques
- **Liste des étudiants**: Affichage et suppression
- **Ajout d'étudiant**: Formulaire avec validation
- **Navigation**: Menu responsive

## 🔄 Intégration

Les deux projets sont maintenant parfaitement synchronisés :

1. **Modèles de données** alignés entre frontend et backend
2. **Types TypeScript** correspondant aux entités Java
3. **API calls** configurés pour communiquer avec Spring Boot
4. **Statistiques** fonctionnelles avec graphiques

## 🛠️ Technologies utilisées

### Backend
- Spring Boot 3.5.7
- Spring Data JPA
- MySQL Connector
- Swagger/OpenAPI
- Maven

### Frontend
- Next.js 16.0.0
- React 19.2.0
- TypeScript
- Tailwind CSS
- Radix UI
- Axios
- Recharts

## 🔧 Dépannage

### Erreurs CORS
Si vous rencontrez des erreurs CORS comme :
```
Access to XMLHttpRequest at 'http://localhost:8080/students/all' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solutions :**
1. Redémarrez le backend Spring Boot (les modifications CORS nécessitent un redémarrage)
2. Vérifiez que le backend est démarré avant le frontend
3. Utilisez les scripts fournis : `restart-backend.bat` puis `start-frontend.bat`

### Erreurs de base de données
Si vous avez des erreurs de connexion MySQL :
1. Vérifiez que MySQL est démarré
2. Créez la base de données : `CREATE DATABASE studenttp6;`
3. Vérifiez les credentials dans `application.properties`

## 📝 Notes

- Le backend utilise le port 8080
- Le frontend utilise le port 3000
- La base de données MySQL doit être configurée avant le démarrage
- Les deux services doivent être démarrés pour une utilisation complète
- **Ordre de démarrage** : Backend → Frontend

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**ABDO EL IDRISSI**
- GitHub: [@votre-username](https://github.com/votre-username)

## 🙏 Remerciements

- [Spring Boot](https://spring.io/projects/spring-boot) pour le framework backend
- [Next.js](https://nextjs.org/) pour le framework frontend
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- [Radix UI](https://www.radix-ui.com/) pour les composants
- [Recharts](https://recharts.org/) pour les graphiques

---

⭐ **N'oubliez pas de mettre une étoile si ce projet vous a aidé !**
