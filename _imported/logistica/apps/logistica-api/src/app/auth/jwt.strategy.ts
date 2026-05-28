import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { KNEX_CONNECTION } from '../../shared/database/database.module';
import { Inject } from '@nestjs/common';
import type { Knex } from 'knex';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'super_secret_dev_key_change_in_prod'
    });
  }

  async validate(payload: any) {
    // Verificar que el usuario existe y está activo
    const user = await this.knex('users')
      .where({ username: payload.username })
      .first();
    
    if (!user || !user.activo) {
      throw new UnauthorizedException('Usuario no encontrado o inactivo');
    }

    return {
      sub: payload.sub,
      username: payload.username,
      role_name: payload.role_name,
      roles: payload.roles || [], // Roles secundarios
      permissions: payload.permissions,
    };
  }
}
