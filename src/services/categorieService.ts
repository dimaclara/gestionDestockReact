import { apiClient } from './api/config';
import { CategorieResponseDto, CategorieRequestDto } from '../types/api';

export interface Categorie extends CategorieResponseDto {}
export interface CreateCategorieRequest extends CategorieRequestDto {}

class CategorieService {
  async getAllCategories(): Promise<Categorie[]> {
    const response = await apiClient.get('/categories/showAll');
    return response.data;
  }

  async getCategorieById(id: number): Promise<Categorie> {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  }

  async createCategorie(categorie: CreateCategorieRequest): Promise<Categorie> {
    const response = await apiClient.post('/categories/create', categorie);
    return response.data;
  }

  async updateCategorie(id: number, categorie: Partial<CreateCategorieRequest>): Promise<Categorie> {
    const response = await apiClient.put(`/categories/update/${id}`, categorie);
    return response.data;
  }

  async deleteCategorie(id: number): Promise<void> {
    await apiClient.delete(`/categories/delete/${id}`);
  }

  async getCategorieByCode(code: string): Promise<Categorie> {
    const response = await apiClient.get(`/categories/code/${code}`);
    return response.data;
  }
}

export const categorieService = new CategorieService();
export default categorieService;