import { apiClient } from './api/config';
import { EntrepriseRequestDto, EntrepriseResponseDto } from '../types/api';

export interface Entreprise extends EntrepriseResponseDto {}
export interface CreateEntrepriseRequest extends EntrepriseRequestDto {}

class EntrepriseService {
  async getAllEntreprises(): Promise<Entreprise[]> {
    const response = await apiClient.get('/entreprises/showAll');
    return response.data;
  }

  async getEntrepriseById(id: number): Promise<Entreprise> {
    const response = await apiClient.get(`/entreprises/${id}`);
    return response.data;
  }

  async createEntreprise(entrepriseData: CreateEntrepriseRequest, image?: File): Promise<Entreprise> {
    const formData = new FormData();
    formData.append('nomEntreprise', entrepriseData.nomEntreprise);
    if (entrepriseData.description) formData.append('description', entrepriseData.description);
    formData.append('email', entrepriseData.email);
    formData.append('adresse1', entrepriseData.adresse.adresse1);
    if (entrepriseData.adresse.adresse2) formData.append('adresse2', entrepriseData.adresse.adresse2);
    formData.append('ville', entrepriseData.adresse.ville);
    formData.append('codePostal', entrepriseData.adresse.codePostal);
    formData.append('pays', entrepriseData.adresse.pays);
    formData.append('codeFiscal', entrepriseData.codeFiscal);
    formData.append('numTel', entrepriseData.numTel);
    if (entrepriseData.steWeb) formData.append('steWeb', entrepriseData.steWeb);
    if (image) formData.append('image', image);

    const response = await apiClient.post('/entreprises/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async updateEntreprise(id: number, entrepriseData: Partial<CreateEntrepriseRequest>, image?: File): Promise<Entreprise> {
    const formData = new FormData();
    if (entrepriseData.nomEntreprise) formData.append('nomEntreprise', entrepriseData.nomEntreprise);
    if (entrepriseData.description) formData.append('description', entrepriseData.description);
    if (entrepriseData.email) formData.append('email', entrepriseData.email);
    if (entrepriseData.adresse?.adresse1) formData.append('adresse1', entrepriseData.adresse.adresse1);
    if (entrepriseData.adresse?.adresse2) formData.append('adresse2', entrepriseData.adresse.adresse2);
    if (entrepriseData.adresse?.ville) formData.append('ville', entrepriseData.adresse.ville);
    if (entrepriseData.adresse?.codePostal) formData.append('codePostal', entrepriseData.adresse.codePostal);
    if (entrepriseData.adresse?.pays) formData.append('pays', entrepriseData.adresse.pays);
    if (entrepriseData.codeFiscal) formData.append('codeFiscal', entrepriseData.codeFiscal);
    if (entrepriseData.numTel) formData.append('numTel', entrepriseData.numTel);
    if (entrepriseData.steWeb) formData.append('steWeb', entrepriseData.steWeb);
    if (image) formData.append('image', image);

    const response = await apiClient.put(`/entreprises/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async deleteEntreprise(id: number): Promise<void> {
    await apiClient.delete(`/entreprises/delete/${id}`);
  }
}

export const entrepriseService = new EntrepriseService();
export default entrepriseService;