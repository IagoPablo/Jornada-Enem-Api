# Jornada ENEM - API REST

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


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
- `GET /users/:id` → Retorna um usuário específico. *Tem que estar logado*
- `PUT /users/:id` → Atualiza dados do próprio usuário ou se for admin atualiza qualquer usuário.
- `DELETE /users/:id` → Remove o próprio usuário ou se for admin deleta qualquer usuário.

---

## 🐳 Docker

O projeto possui **docker-compose** para rodar o PostgreSQL.  
Comando para iniciar o ambiente:

```bash
docker-compose up -d
```

## ✅ Boas práticas aplicadas

-Uso de DTOs e class-validator para validação de dados.
-Tratamento de erros com filtros personalizados (HttpExceptionFilter).
-Arquitetura modular: AuthModule, UserModule, etc.
-Variáveis de ambiente para configuração segura.
-Senhas armazenadas com hash (bcrypt).
-Rotas protegidas por JWT.

