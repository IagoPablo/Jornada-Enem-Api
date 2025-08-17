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



## Guia de como Rodar:

## **🔁 Resumo do fluxo correto**

1. Clonar o repositório  
2. Configurar Docker Compose
3. Criar `.env`  (há uma env de exemplo no repositório (**.env.example**)
4. Subir o Docker (`docker-compose up -d`)  
5. Instalar dependências (`npm install`)  
6. Gerar Prisma Client (`npx prisma generate`)  
7. Rodar migrações (`npx prisma migrate dev` ou `deploy`)  
8. Rodar seed (`node prisma/seed.js`)  ( **vai criar o admin de nossa aplicação no banco de dados** )
9. Iniciar o projeto (`npm run start:dev`)

---

> Seguindo este fluxo, a aplicação deve rodar corretamente em qualquer ambiente local com Docker e Node.js.


## Explicação:

## **1️⃣ Clonar o repositório**

Clone o repositório do projeto e entre na pasta:

- `git clone <URL_DO_REPOSITORIO>`
- `cd <PASTA_DO_PROJETO>`

---

## **2️⃣ Configurar Docker Compose**

Prepare o `docker-compose.yml` para o banco de dados PostgreSQL.  
Configure usuário, senha e nome do banco que serão usados no `.env`.

- Confirme que a porta do PostgreSQL (geralmente 5432) está disponível.
- Ajuste volumes se quiser persistir os dados do banco.

---

## **3️⃣ Subir o Docker**

Execute o Docker Compose para criar e iniciar o container do banco de dados:

- O container deve iniciar sem erros.
- Verifique se o PostgreSQL está rodando e acessível.

---

## **4️⃣ Configurar o arquivo `.env`**

Crie ou edite o arquivo `.env` na raiz do projeto, com as variáveis de ambiente:

- `DATABASE_URL` → string de conexão com o PostgreSQL (usuário, senha, host, porta e banco)
- `JWT_SECRET` → chave secreta para autenticação
- `ADMIN_EMAIL` e `ADMIN_PASSWORD` → conta de administrador para testes

Confirme que os dados batem com os do Docker Compose.

---

## **5️⃣ Instalar dependências**

Instale todas as dependências do Node.js e do projeto:

- Isso inclui Prisma, Express e quaisquer pacotes necessários.

---

## **6️⃣ Gerar Prisma Client**

Gere o Prisma Client para que a aplicação possa se comunicar com o banco de dados:

- Sempre que `.env` ou `schema.prisma` forem alterados, é necessário gerar novamente.

---

## **7️⃣ Rodar migrações do banco**

Aplique as migrações do Prisma para criar as tabelas no PostgreSQL:

- Se for a primeira vez, use o modo de desenvolvimento (`dev`) para criar e aplicar migrações.
- Se o banco já tiver migrations prontas, use o modo de deploy (`deploy`).

---

## **8️⃣ Rodar seed**

O seed vai gerar o Admin no banco de dados com dados iniciais usando o script de seed (seed.js)

---

## **9️⃣ Rodar o projeto**

Inicie o servidor da aplicação:

- O servidor deve iniciar sem erros e estar acessível na porta configurada.
- Agora é possível testar todas as funcionalidades do projeto localmente.

---




