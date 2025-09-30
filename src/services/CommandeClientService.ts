import { apiClient } from './api/config';
import { CommandeClientRequestDto, CommandeClientResponseDto } from '../types/api';

export interface CommandeClient extends CommandeClientResponseDto {}
export interface CreateCommandeClientRequest extends CommandeClientRequestDto {}

class CommandeClientService {
  async getAllCommandeClients(): Promise<CommandeClient[]> {
    const response = await apiClient.get('/commandesclients/showAll');
    return response.data;
  }

  async getCommandeClientById(id: number): Promise<CommandeClient> {
    const response = await apiClient.get(`/commandesclients/${id}`);
    return response.data;
  }

  async getCommandeClientByCode(code: string): Promise<CommandeClient> {
    const response = await apiClient.get(`/commandesclients/code/${code}`);
    return response.data;
  }

  async createCommandeClient(commande: CreateCommandeClientRequest): Promise<CommandeClient> {
    const response = await apiClient.post('/commandesclients/create', commande);
    return response.data;
  }

  async updateCommandeClient(id: number, commande: CreateCommandeClientRequest): Promise<CommandeClient> {
    const response = await apiClient.put(`/commandesclients/update/${id}`, commande);
    return response.data;
  }

  async deleteCommandeClient(id: number): Promise<void> {
    await apiClient.delete(`/commandesclients/delete/${id}`);
  }
}

export const commandeClientService = new CommandeClientService();
export default commandeClientService;