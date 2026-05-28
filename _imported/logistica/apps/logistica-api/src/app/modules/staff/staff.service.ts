import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class StaffService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async getRoles() {
    const roles = await this.knex('role_permissions')
      .distinct('role_name')
      .whereLike('role_name', 'log_%')
      .orderBy('role_name');
    return roles.map(r => {
      const clean = r.role_name.replace('log_', '').replace('_', ' ');
      return {
        label: clean.replace(/\b\w/g, (c: string) => c.toUpperCase()),
        value: r.role_name.replace('log_', '')
      };
    });
  }

  async findAll() {
    return this.knex('logistica_colaboradores').select('*').orderBy('nombre', 'asc');
  }

  async findOne(id: string) {
    return this.knex('logistica_colaboradores').where({ id }).first();
  }

  async create(data: Partial<any>) {
    const [result] = await this.knex('logistica_colaboradores').insert({
      ...data,
      roles: Array.isArray(data.roles) ? data.roles : [data.roles]
    }).returning('*');
    return result;
  }

  async update(id: string, data: Partial<any>) {
    const payload: any = { ...data, updated_at: new Date() };
    if (payload.roles && !Array.isArray(payload.roles)) {
      payload.roles = [payload.roles];
    }
    const [result] = await this.knex('logistica_colaboradores')
      .where({ id })
      .update(payload)
      .returning('*');
    return result;
  }

  async remove(id: string) {
    return this.knex('logistica_colaboradores').where({ id }).del();
  }
}
