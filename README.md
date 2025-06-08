# BobApp - CI/CD 

Application fullstack Angular + Spring Boot, dockerisée et intégrée à une pipeline CI/CD complète via GitHub Actions et SonarCloud.

---

## 🧩 Cloner le projet

```bash
git clone https://github.com/shishifoxy/bobapp-ci-cd.git
cd bobapp-ci-cd
```

---

## 🌐 Lancer l’application en développement (via Docker Compose)

Ce mode **compile les images à partir du code local**.  
Utile pour tester localement après une modification.

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### ➕ Prérequis

- [Docker](https://www.docker.com/)
- Docker Desktop ou moteur Docker installé et lancé

L'application sera disponible sur :
- `http://localhost:8080` (backend)
- `http://localhost:8081` (frontend)

### 🔐 Secrets GitHub requis

Pour que le workflow CI/CD fonctionne correctement, assurez-vous de configurer les secrets suivants dans votre repository GitHub :

- `SONAR_TOKEN` : token SonarCloud (Settings > Security > Secrets and variables > Actions)
- `DOCKERHUB_USERNAME` : votre identifiant Docker Hub
- `DOCKERHUB_TOKEN` : token d’accès Docker Hub (non votre mot de passe)
---

## 🚢 Lancer la version de production simulée

Ce mode **télécharge les images publiées sur Docker  et relance les containers** (via la pipeline GitHub Actions).

```bash
docker-compose pull & docker-compose up -d
```

Les images utilisées sont :
- `shishifoxy1/bobapp-back:latest`
- `shishifoxy1/bobapp-front:latest`

---

## 🧪 Lancer les tests manuellement

### Backend (Spring Boot)

```bash
cd back
mvn clean test
```

### Frontend (Angular)

```bash
cd front
npm install
npm test
```

---

## 🐳 Docker : commandes manuelles 

### Backend

```bash
cd back
docker build -t bobapp-back .
docker run -p 8080:8080 --name bobapp-back -d bobapp-back
```

### Frontend

```bash
cd front
docker build -t bobapp-front .
docker run -p 8081:80 --name bobapp-front -d bobapp-front
```

---

## 📦 Pipeline CI/CD

- ✅ Tests automatiques
- ✅ Analyse de qualité de code avec SonarCloud
- ✅ Build d’images Docker
- ✅ Push automatique sur Docker Hub
- ✅ Déploiement simulé via `docker-compose`

---

## 🛠 Technologies utilisées

- Angular 14
- Spring Boot (Java 11)
- Docker / Docker Compose (Lien vers les images dans DockerHub : https://hub.docker.com/r/shishifoxy1/bobapp-back & https://hub.docker.com/r/shishifoxy1/bobapp-front)
- GitHub Actions https://github.com/Shishifoxy/bobapp-ci-cd/actions
- SonarCloud : https://sonarcloud.io/code?id=Shishifoxy_bobapp-ci-cd
