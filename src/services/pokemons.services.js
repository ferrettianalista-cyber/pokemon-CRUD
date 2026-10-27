import { randomUUID } from 'node:crypto';
import { knex } from '../database/knex.js';
import { pokemonsRepository } from '../repositories/pokemon.repositorie.js';


class PokemonsService {
  async getall() {
    return pokemonsRepository.getall()
  }

  async getById(id) {
    return pokemonsRepository.getById(id)
  }

  async create({ nome, nivel, tipo, treinador_id }) {
   return pokemonsRepository.create()
  }

  async update(id, dados) {
   
    return pokemonsRepository.update
  }

  async delete(id) {
   
    return pokemonsRepository.delete
  }
}

export const pokemonsServices = new PokemonsService();
