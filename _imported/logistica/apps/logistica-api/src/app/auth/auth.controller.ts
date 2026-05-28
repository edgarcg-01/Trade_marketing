import { Controller, Post, Body, Get, Put, Delete, Param, UnauthorizedException, Inject, UseGuards } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../shared/database/database.module';
import type { Knex } from 'knex';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex: Knex,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const { username, password } = credentials;

    // Buscar usuario en la base de datos
    const user = await this.knex('users')
      .where({ username })
      .first();

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Obtener permisos del rol
    const rolePermissions = await this.knex('role_permissions')
      .where({ role_name: user.role_name })
      .first();

    const permissions = rolePermissions?.permissions || {};

    // Actualizar último acceso
    await this.knex('users')
      .where({ id: user.id })
      .update({ ultimo_acceso: new Date() });

    // Generar JWT
    const payload = {
      sub: user.id,
      username: user.username,
      role_name: user.role_name,
      roles: user.roles || [], // Roles secundarios
      permissions: permissions,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        username: user.username,
        nombre: user.nombre,
        role_name: user.role_name,
      },
    };
  }

  @Get('users')
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    console.log('[AuthController] getUsers - Iniciando consulta de choferes');
    // Buscar usuarios que tengan 'chofer' en sus roles
    const users = await this.knex('users')
      .select('id', 'username', 'nombre', 'email', 'role_name', 'roles', 'activo', 'ultimo_acceso', 'created_at')
      .whereRaw("'chofer' = ANY(roles)")
      .orWhere('role_name', 'chofer')
      .orderBy('nombre', 'asc');
    
    console.log('[AuthController] getUsers - Choferes encontrados:', users.length);
    console.log('[AuthController] getUsers - Datos:', JSON.stringify(users, null, 2));
    return users;
  }

  @Post('register')
  @UseGuards(JwtAuthGuard)
  async register(@Body() body: { username: string; password: string; nombre: string; email?: string; role_name?: string }) {
    const { username, password, nombre, email, role_name = 'chofer' } = body;

    // Verificar si el usuario ya existe
    const existingUser = await this.knex('users').where({ username }).first();
    if (existingUser) {
      throw new UnauthorizedException('El nombre de usuario ya existe');
    }

    // Hash de la contraseña
    const password_hash = await bcrypt.hash(password, 10);

    // Crear usuario
    const [newUser] = await this.knex('users')
      .insert({
        username,
        password_hash,
        nombre,
        email,
        role_name,
        activo: true,
        created_at: new Date()
      })
      .returning(['id', 'username', 'nombre', 'email', 'role_name', 'activo', 'created_at']);

    return newUser;
  }

  @Put('users/:id')
  @UseGuards(JwtAuthGuard)
  async updateUser(@Param('id') id: string, @Body() body: { nombre?: string; email?: string; role_name?: string; activo?: boolean }) {
    const updateData: any = {};

    if (body.nombre !== undefined) updateData.nombre = body.nombre;
    if (body.email !== undefined) updateData.email = body.email;
    if (body.role_name !== undefined) updateData.role_name = body.role_name;
    if (body.activo !== undefined) updateData.activo = body.activo;

    const [updatedUser] = await this.knex('users')
      .where({ id })
      .update(updateData)
      .returning(['id', 'username', 'nombre', 'email', 'role_name', 'activo']);

    if (!updatedUser) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return updatedUser;
  }

  @Put('users/:id/password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(@Param('id') id: string, @Body() body: { password: string }) {
    const { password } = body;

    if (!password || password.length < 6) {
      throw new UnauthorizedException('La contraseña debe tener al menos 6 caracteres');
    }

    const password_hash = await bcrypt.hash(password, 10);

    await this.knex('users')
      .where({ id })
      .update({
        password_hash
      });

    return { success: true, message: 'Contraseña actualizada correctamente' };
  }

  @Delete('users/:id')
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Param('id') id: string) {
    const deleted = await this.knex('users').where({ id }).del();

    if (!deleted) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return { success: true, message: 'Usuario eliminado correctamente' };
  }
}
