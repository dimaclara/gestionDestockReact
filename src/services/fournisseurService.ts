import { api } from './api';

export interface Fournisseur {
  id?: number;
  nom: string;
  prenom: string;
  adresse: {
    adresse1: string;
    adresse2?: string;
    ville: string;
    codePostale: string;
    pays: string;
  };
  photo?: string;
  mail: string;
  numTel: string;
  idEntreprise?: number;
}

export interface CreateFournisseurRequest {
  nom: string;
  prenom: string;
  adresse: {
    adresse1: string;
    adresse2?: string;
    ville: string;
    codePostale: string;
    pays: string;
  };
  photo?: string;
  mail: string;
  numTel: string;
  idEntreprise: number;
}

class FournisseurService {
  async getAllFournisseurs(): Promise<Fournisseur[]> {
    try {
      const response = await api.get('/fournisseurs/all');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch suppliers');
    }
  }

  async getFournisseurById(id: number): Promise<Fournisseur> {
    try {
      const response = await api.get(`/fournisseurs/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch supplier');
    }
  }

  async createFournisseur(fournisseur: CreateFournisseurRequest): Promise<Fournisseur> {
    try {
      const response = await api.post('/fournisseurs/create', fournisseur);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to create supplier');
    }
  }

  async updateFournisseur(id: number, fournisseur: Partial<CreateFournisseurRequest>): Promise<Fournisseur> {
    try {
      const response = await api.patch(`/fournisseurs/update/${id}`, fournisseur);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update supplier');
    }
  }

  async deleteFournisseur(id: number): Promise<void> {
    try {
      await api.delete(`/fournisseurs/delete/${id}`);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to delete supplier');
    }
  }
}

export const fournisseurService = new FournisseurService();
export default fournisseurService;
