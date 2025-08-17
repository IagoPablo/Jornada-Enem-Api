import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(nome: string, email: string, senha: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) throw new ConflictException('Email já cadastrado');
    const hashedPassword = await bcrypt.hash(senha, 10);
    const user = await this.usersService.create({ nome, email, senha: hashedPassword });
    return { id: user.id, nome: user.nome, email: user.email };
  }

  async login(email: string, senha: string) {
  const user = await this.usersService.findByEmail(email);
  if (!user) throw new UnauthorizedException('Credenciais inválidas');
  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) throw new UnauthorizedException('Credenciais inválidas');
  const payload = { sub: user.id, email: user.email, role: user.role };
  return { access_token: this.jwtService.sign(payload) };
  }
}
