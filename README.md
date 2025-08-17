# Jornada ENEM - API REST

![NestJS](https://img.shields.io/badge/NestJS-v10-red) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue) 
![Node.js](https://img.shields.io/badge/Node.js-v20-green)
![Docker](https://img.shields.io/badge/Docker-20-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

API REST para gerenciamento de usuários, construída como desafio técnico da Jornada ENEM.  
O projeto utiliza NestJS, Prisma, PostgreSQL, autenticação JWT e Docker, seguindo boas práticas de desenvolvimento de APIs.

---

## 🛠 Tecnologias Utilizadas

- **Backend:** NestJS + TypeScript
- **Banco de dados:** PostgreSQL
- **ORM:** Prisma
- **Autenticação:** JWT + bcrypt
- **Validação:** class-validator
- **Containerização:** Docker + Docker Compose
- **Variáveis de ambiente:** `.env`

---

## 📋 Funcionalidades

### Autenticação
- `POST /auth/register` → Cria um novo usuário.
- `POST /auth/login` → Retorna token JWT para autenticação.

### Usuários (rotas protegidas por JWT)
- `GET /users` → Lista todos os usuários (ordenados por ID). *Tem que estar logado*
- `GET /users/:id` → Retorna um usuário específico. * Tem que estar logado*
- `PUT /users/:id` → Atualiza dados do próprio usuário ou se for admin atualiza qualquer usuário.
- `DELETE /users/:id` → Remove o próprio usuário ou se for admin deleta qualquer usuário.

---

## 🐳 Docker

O projeto possui **docker-compose** para rodar o PostgreSQL.  
Comando para iniciar o ambiente:

```bash
docker-compose up -d
