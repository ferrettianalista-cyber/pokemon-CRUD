import { randomUUID } from 'node:crypto';
import { knex } from '../database/knex.js';

class TreinadoresService {
  async getall() {
    return knex('treinadores').select('*');
  }

  async getById(id) {
    return knex('treinadores').where({ id }).first();
  }

  async create({ nome }) {
    const [treinador] = await knex('treinadores')
      .insert({ id: randomUUID(), nome })
      .returning('*');
    return treinador;
  }

  async update(id, { nome }) {
    const [treinador] = await knex('treinadores')
      .where({ id })
      .update({ nome })
      .returning('*');
    return treinador;
  }

  async delete(id) {
    const [treinador] = await knex('treinadores').where({ id }).delete().returning('*');
    return treinador;
  }
}

export const treinadoresServices = new TreinadoresService();
