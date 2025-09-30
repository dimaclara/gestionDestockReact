import { api } from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  role: string;
  entrepriseId: number;
}

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: {
    adresse1: string;
    adresse2?: string;
    ville: string;
    codePostale: string;
    pays: string;
  };
  numTel: string;
  dateDeNaissance?: string;
  photo?: string;
  entreprise?: any;
  roles?: any[];
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

class AuthService {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { accessToken: token, user };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  async register(userData: RegisterRequest): Promise<User> {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data.user;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  async validateToken(): Promise<boolean> {
    try {
      await api.get('/utilisateurs/validate-token');
      return true;
    } catch {
      this.logout();
      return false;
    }
  }
}

export const authService = new AuthService();
export default authService;
