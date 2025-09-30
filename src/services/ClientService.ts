import { apiClient } from './api/config';
import { ClientResponseDto, ClientRequestDto, AdresseRequestDto } from '../types/api';

export interface Client extends ClientResponseDto {}
export interface CreateClientRequest {
  nom: string;
  prenom: string;
  email: string;
  adresse: AdresseRequestDto;
  numTel: string;
  entrepriseId: number;
}

class ClientService {
  async getAllClients(): Promise<Client[]> {
    const response = await apiClient.get('/clients/showAll');
    return response.data;
  }

  async getClientById(id: number): Promise<Client> {
    const response = await apiClient.get(`/clients/${id}`);
    return response.data;
  }

  async createClient(clientData: CreateClientRequest, image?: File): Promise<Client> {
    const formData = new FormData();
    formData.append('nom', clientData.nom);
    formData.append('prenom', clientData.prenom);
    formData.append('email', clientData.email);
    formData.append('adresse1', clientData.adresse.adresse1);
    if (clientData.adresse.adresse2) formData.append('adresse2', clientData.adresse.adresse2);
    formData.append('ville', clientData.adresse.ville);
    formData.append('codePostal', clientData.adresse.codePostal);
    formData.append('pays', clientData.adresse.pays);
    formData.append('numTel', clientData.numTel);
    formData.append('entrepriseId', clientData.entrepriseId.toString());
    if (image) formData.append('image', image);

    const response = await apiClient.post('/clients/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async updateClient(id: number, clientData: Partial<CreateClientRequest>, image?: File): Promise<Client> {
    const formData = new FormData();
    if (clientData.nom) formData.append('nom', clientData.nom);
    if (clientData.prenom) formData.append('prenom', clientData.prenom);
    if (clientData.email) formData.append('email', clientData.email);
    if (clientData.adresse?.adresse1) formData.append('adresse1', clientData.adresse.adresse1);
    if (clientData.adresse?.adresse2) formData.append('adresse2', clientData.adresse.adresse2);
    if (clientData.adresse?.ville) formData.append('ville', clientData.adresse.ville);
    if (clientData.adresse?.codePostal) formData.append('codePostal', clientData.adresse.codePostal);
    if (clientData.adresse?.pays) formData.append('pays', clientData.adresse.pays);
    if (clientData.numTel) formData.append('numTel', clientData.numTel);
    if (clientData.entrepriseId) formData.append('entrepriseId', clientData.entrepriseId.toString());
    if (image) formData.append('image', image);

    const response = await apiClient.put(`/clients/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async deleteClient(id: number): Promise<void> {
    await apiClient.delete(`/clients/delete/${id}`);
  }
}

export const clientService = new ClientService();
export default clientService;