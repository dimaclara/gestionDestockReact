import { apiClient } from './api/config';
import { VentesRequestDto, VentesResponseDto } from '../types/api';

export interface Ventes extends VentesResponseDto {}
export interface CreateVentesRequest extends VentesRequestDto {}

class VentesService {
  async getAllVentes(): Promise<Ventes[]> {
    const response = await apiClient.get('/ventes/showAll');
    return response.data;
  }

  async getVentesById(id: number): Promise<Ventes> {
    const response = await apiClient.get(`/ventes/${id}`);
    return response.data;
  }

  async getVentesByCode(code: string): Promise<Ventes> {
    const response = await apiClient.get(`/ventes/code/${code}`);
    return response.data;
  }

  async createVentes(ventes: CreateVentesRequest): Promise<Ventes> {
    const response = await apiClient.post('/ventes/create', ventes);
    return response.data;
  }

  async updateVentes(id: number, ventes: CreateVentesRequest): Promise<Ventes> {
    const response = await apiClient.put(`/ventes/update/${id}`, ventes);
    return response.data;
  }

  async deleteVentes(id: number): Promise<void> {
    await apiClient.delete(`/ventes/delete/${id}`);
  }
}

export const ventesService = new VentesService();
export default ventesService;