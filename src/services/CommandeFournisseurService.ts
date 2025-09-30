import { apiClient } from './api/config';
import { CommandeFournisseurRequestDto, CommandeFournisseurResponseDto } from '../types/api';

export interface CommandeFournisseur extends CommandeFournisseurResponseDto {}
export interface CreateCommandeFournisseurRequest extends CommandeFournisseurRequestDto {}

class CommandeFournisseurService {
  async getAllCommandeFournisseurs(): Promise<CommandeFournisseur[]> {
    const response = await apiClient.get('/commandefournisseurs/showAll');
    return response.data;
  }

  async getCommandeFournisseurById(id: number): Promise<CommandeFournisseur> {
    const response = await apiClient.get(`/commandefournisseurs/${id}`);
    return response.data;
  }

  async createCommandeFournisseur(commande: CreateCommandeFournisseurRequest): Promise<CommandeFournisseur> {
    const response = await apiClient.post('/commandefournisseurs/create', commande);
    return response.data;
  }

  async updateCommandeFournisseur(id: number, commande: Partial<CreateCommandeFournisseurRequest>): Promise<CommandeFournisseur> {
    const response = await apiClient.put(`/commandefournisseurs/update/${id}`, commande);
    return response.data;
  }

  async deleteCommandeFournisseur(id: number): Promise<void> {
    await apiClient.delete(`/commandefournisseurs/delete/${id}`);
  }
}

export const commandeFournisseurService = new CommandeFournisseurService();
export default commandeFournisseurService;