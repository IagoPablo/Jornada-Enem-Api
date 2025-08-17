import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {
      message: 'Lista de usuários carregada com sucesso',
      data: users,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(Number(id));
    return {
      message: 'Usuário encontrado com sucesso',
      data: user,
    };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
}

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Req() req) {
    const user = req.user;
    if (user.role !== 'ADMIN' && user.id !== Number(id)) {
      throw new ForbiddenException('Você não tem permissão para atualizar este usuário');
    }
    const updatedUser = await this.usersService.update(Number(id), updateUserDto);
    return {
      message: 'Usuário atualizado com sucesso',
      data: updatedUser,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const user = req.user;
    if (user.role !== 'ADMIN' && user.id !== Number(id)) {
      throw new ForbiddenException('Você não tem permissão para deletar este usuário');
    }
    await this.usersService.remove(Number(id));
    return {
      message: 'Usuário deletado com sucesso',
    };
  }
}
