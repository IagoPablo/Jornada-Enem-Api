import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string; email: string; senha: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAll(): Promise<User[]> {
  return this.prisma.user.findMany({ orderBy: { id: 'asc' } });
}

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    try {
      if (data.senha) {
        data.senha = await bcrypt.hash(data.senha, 10);
      }

      return await this.prisma.user.update({ where: { id }, data });
    } catch (error) {

      if (error.code === 'P2025') {
        throw new NotFoundException(`Usuário com id ${id} não encontrado`);
      }
      if (error.code === 'P2002') {
        throw new ForbiddenException(`O email já está em uso por outro usuário`);
      }
      throw error;
    }
  }

  async remove(id: number): Promise<User> {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Usuário com id ${id} não encontrado`);
      }
      throw error;
    }
  }
}
