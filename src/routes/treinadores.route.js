import { Router } from 'express';
import { treinadoresServices } from '../services/treinadores.services.js';

export const treinadoresRouter = Router();

treinadoresRouter.get('/', async (_req, res) => {
  try {
    return res.json(await treinadoresServices.getall());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao buscar treinadores.' });
  }
});

treinadoresRouter.get('/:id', async (req, res) => {
  try {
    const treinador = await treinadoresServices.getById(req.params.id);
    if (!treinador) return res.status(404).json({ erro: 'Treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao buscar treinador.' });
  }
});

treinadoresRouter.post('/', async (req, res) => {
  try {
    return res.status(201).json(await treinadoresServices.create(req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao cadastrar treinador.' });
  }
});

treinadoresRouter.put('/:id', async (req, res) => {
  try {
    const treinador = await treinadoresServices.update(req.params.id, req.body);
    if (!treinador) return res.status(404).json({ erro: 'Treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao atualizar treinador.' });
  }
});

treinadoresRouter.delete('/:id', async (req, res) => {
  try {
    const treinador = await treinadoresServices.delete(req.params.id);
    if (!treinador) return res.status(404).json({ erro: 'Treinador não encontrado.' });
    return res.json(treinador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao excluir treinador.' });
  }
});
