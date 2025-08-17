require('dotenv').config(); 
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@email.com';
  const adminPassword = process.env.ADMIN_PASSWORD || '123456';

  const senhaHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      nome: 'Administrador',
      email: adminEmail,
      senha: senhaHash,
      role: 'ADMIN',
    },
  });

  console.log('Seed do admin rodado com sucesso!');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
