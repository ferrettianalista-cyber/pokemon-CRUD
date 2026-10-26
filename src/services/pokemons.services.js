import { randomUUID } from 'node:crypto';
import { knex } from '../database/knex.js';

class PokemonsService {
  async getall() {
    return knex('pokemons').select('*');
  }

  async getById(id) {
    return knex('pokemons').where({ id }).first();
  }

  async create({ nome, nivel, tipo, treinador_id }) {
    const [pokemon] = await knex('pokemons')
      .insert({ id: randomUUID(), nome, nivel, tipo, treinador_id })
      .returning('*');
    return pokemon;
  }

  async update(id, dados) {
    const [pokemon] = await knex('pokemons').where({ id }).update(dados).returning('*');
    return pokemon;
  }

  async delete(id) {
    const [pokemon] = await knex('pokemons').where({ id }).delete().returning('*');
    return pokemon;
  }
}

export const pokemonsServices = new PokemonsService();
