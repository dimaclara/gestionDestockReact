import { apiClient } from './api/config';
import { UtilisateurResponseDto } from '../types/api';

export interface Utilisateur extends UtilisateurResponseDto {}

export interface CreateUtilisateurRequest {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  dateDeNaissance: string;
  adresse1: string;
  adresse2?: string;
  ville: string;
  codePostal: string;
  pays: string;
  entrepriseId: number;
}

class UtilisateurService {
  async getAllUtilisateurs(): Promise<Utilisateur[]> {
    const response = await apiClient.get('/utilisateurs/showAll');
    return response.data;
  }

  async getUtilisateurById(id: number): Promise<Utilisateur> {
    const response = await apiClient.get(`/utilisateurs/${id}`);
    return response.data;
  }

  async createUtilisateur(utilisateurData: CreateUtilisateurRequest, image?: File): Promise<Utilisateur> {
    const formData = new FormData();
    formData.append('nom', utilisateurData.nom);
    formData.append('prenom', utilisateurData.prenom);
    formData.append('email', utilisateurData.email);
    formData.append('motDePasse', utilisateurData.motDePasse);
    formData.append('dateDeNaissance', utilisateurData.dateDeNaissance);
    formData.append('adresse1', utilisateurData.adresse1);
    if (utilisateurData.adresse2) formData.append('adresse2', utilisateurData.adresse2);
    formData.append('ville', utilisateurData.ville);
    formData.append('codePostal', utilisateurData.codePostal);
    formData.append('pays', utilisateurData.pays);
    formData.append('entrepriseId', utilisateurData.entrepriseId.toString());
    if (image) formData.append('image', image);

    const response = await apiClient.post('/utilisateurs/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async updateUtilisateur(id: number, utilisateurData: CreateUtilisateurRequest, image?: File): Promise<Utilisateur> {
    const formData = new FormData();
    formData.append('nom', utilisateurData.nom);
    formData.append('prenom', utilisateurData.prenom);
    formData.append('email', utilisateurData.email);
    formData.append('motDePasse', utilisateurData.motDePasse);
    formData.append('dateDeNaissance', utilisateurData.dateDeNaissance);
    formData.append('adresse1', utilisateurData.adresse1);
    if (utilisateurData.adresse2) formData.append('adresse2', utilisateurData.adresse2);
    formData.append('ville', utilisateurData.ville);
    formData.append('codePostal', utilisateurData.codePostal);
    formData.append('pays', utilisateurData.pays);
    formData.append('entrepriseId', utilisateurData.entrepriseId.toString());
    if (image) formData.append('image', image);

    const response = await apiClient.put(`/utilisateurs/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

  async deleteUtilisateur(id: number): Promise<void> {
    await apiClient.delete(`/utilisateurs/delete/${id}`);
  }
}

export const utilisateurService = new UtilisateurService();
export default utilisateurService;