import { apiClient } from './api/config';
import { MvtStkRequestDto, MvtStkResponseDto } from '../types/api';

export interface MvtStk extends MvtStkResponseDto {}
export interface CreateMvtStkRequest extends MvtStkRequestDto {}

class MvtStkService {
  async getAllMvtStk(): Promise<MvtStk[]> {
    const response = await apiClient.get('/mvtstk/showAll');
    return response.data;
  }

  async getMvtStkById(id: number): Promise<MvtStk> {
    const response = await apiClient.get(`/mvtstk/${id}`);
    return response.data;
  }

  async createMvtStk(mvtStk: CreateMvtStkRequest): Promise<MvtStk> {
    const response = await apiClient.post('/mvtstk/create', mvtStk);
    return response.data;
  }

  async updateMvtStk(id: number, mvtStk: CreateMvtStkRequest): Promise<MvtStk> {
    const response = await apiClient.put(`/mvtstk/update/${id}`, mvtStk);
    return response.data;
  }

  async deleteMvtStk(id: number): Promise<void> {
    await apiClient.delete(`/mvtstk/delete/${id}`);
  }
}

export const mvtStkService = new MvtStkService();
export default mvtStkService;