import { apiClient } from './api/config';
import { ArticleResponseDto, ArticleRequestDto } from '../types/api';

export interface Article extends ArticleResponseDto {}
export interface CreateArticleRequest extends ArticleRequestDto {}

class ArticleService {
  async getAllArticles(): Promise<Article[]> {
    const response = await apiClient.get('/articles/showAll');
    return response.data;
  }

  async getArticleById(id: number): Promise<Article> {
    const response = await apiClient.get(`/articles/id/${id}`);
    return response.data;
  }

  async createArticle(articleData: CreateArticleRequest, image?: File): Promise<Article> {
    const formData = new FormData();
    formData.append('codeArticle', articleData.codeArticle);
    formData.append('designation', articleData.designation);
    formData.append('categorieId', articleData.categorieId.toString());
    formData.append('entrepriseId', articleData.entrepriseId.toString());
    formData.append('prixUnitaire', articleData.prixUnitaire.toString());
    formData.append('tauxTva', articleData.tauxTva.toString());
    formData.append('prixUnitaireTtc', articleData.prixUnitaireTtc.toString());
    if (image) formData.append('image', image);
    
    const response = await apiClient.post('/articles/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async updateArticle(id: number, articleData: Partial<CreateArticleRequest>, image?: File): Promise<Article> {
    const formData = new FormData();
    if (articleData.codeArticle) formData.append('codeArticle', articleData.codeArticle);
    if (articleData.designation) formData.append('designation', articleData.designation);
    if (articleData.categorieId) formData.append('categorieId', articleData.categorieId.toString());
    if (articleData.entrepriseId) formData.append('entrepriseId', articleData.entrepriseId.toString());
    if (articleData.prixUnitaire) formData.append('prixUnitaire', articleData.prixUnitaire.toString());
    if (articleData.tauxTva) formData.append('tauxTva', articleData.tauxTva.toString());
    if (articleData.prixUnitaireTtc) formData.append('prixUnitaireTtc', articleData.prixUnitaireTtc.toString());
    if (image) formData.append('image', image);
    
    const response = await apiClient.put(`/articles/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async deleteArticle(id: number): Promise<void> {
    await apiClient.delete(`/articles/delete/${id}`);
  }

  async getArticleByCode(codeArticle: string): Promise<Article> {
    const response = await apiClient.get(`/articles/code/${codeArticle}`);
    return response.data;
  }
}

export const articleService = new ArticleService();
export default articleService;