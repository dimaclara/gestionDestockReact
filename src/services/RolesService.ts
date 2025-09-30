import { apiClient } from './api/config';
import { RolesRequestDto, RolesResponseDto } from '../types/api';

export interface Roles extends RolesResponseDto {}
export interface CreateRolesRequest extends RolesRequestDto {}

class RolesService {
  async getAllRoles(): Promise<Roles[]> {
    const response = await apiClient.get('/roles/showAll');
    return response.data;
  }

  async getRolesById(id: number): Promise<Roles> {
    const response = await apiClient.get(`/roles/${id}`);
    return response.data;
  }

  async createRoles(roles: CreateRolesRequest): Promise<Roles> {
    const response = await apiClient.post('/roles/create', roles);
    return response.data;
  }

  async updateRoles(id: number, roles: Partial<CreateRolesRequest>): Promise<Roles> {
    const response = await apiClient.put(`/roles/update/${id}`, roles);
    return response.data;
  }

  async deleteRoles(id: number): Promise<void> {
    await apiClient.delete(`/roles/delete/${id}`);
  }
}

export const rolesService = new RolesService();
export default rolesService;