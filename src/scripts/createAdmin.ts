// scripts/createAdmin.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdmin() {
  const hashedPassword = await bcrypt.hash('@everTechSolutionS', 10); // Hash password

  const admin = await prisma.admin.create({
    data: {
      email: 'everTechSolutions@gmail.com',
      password: hashedPassword,
    },
  });

  console.log('Admin created:', admin);
}

createAdmin()
  .catch((err) => console.error(err))
  .finally(() => prisma.$disconnect());
