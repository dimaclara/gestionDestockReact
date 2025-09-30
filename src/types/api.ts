// Backend API Types matching DTOs

export interface ArticleResponseDto {
  id: number;
  codeArticle: string;
  designation: string;
  prixUnitaire: number;
  tauxTva: number;
  prixUnitaireTtc: number;
  photo?: string;
  categorie: CategorieResponseDto;
  entreprise: EntrepriseResponseDto;
}

export interface CategorieResponseDto {
  id: number;
  code: string;
  designation: string;
  entrepriseId: number;
}

export interface CategorieRequestDto {
  code: string;
  designation: string;
  entrepriseId: number;
}

export interface ArticleRequestDto {
  codeArticle: string;
  designation: string;
  prixUnitaire: number;
  tauxTva: number;
  prixUnitaireTtc: number;
  photo?: string;
  categorieId: number;
  entrepriseId: number;
}

export interface FournisseurResponseDto {
  id: number;
  nom: string;
  prenom: string;
  adresse: AdresseResponseDto;
  photo?: string;
  email: string;
  numTel: string;
  entreprise: EntrepriseResponseDto;
}

export interface FournisseurRequestDto {
  nom: string;
  prenom: string;
  adresse: AdresseRequestDto;
  photo?: string;
  email: string;
  numTel: string;
  entrepriseId: number;
}

export interface EntrepriseResponseDto {
  id: number;
  nomEntreprise: string;
  description?: string;
  photo?: string;
  email: string;
  adresse: AdresseResponseDto;
  codeFiscal: string;
  numTel: string;
  steWeb?: string;
  creationDate?: string;
}

export interface AdresseResponseDto {
  id: number;
  adresse1: string;
  adresse2?: string;
  ville: string;
  codePostal: string;
  pays: string;
}

export interface AdresseRequestDto {
  adresse1: string;
  adresse2?: string;
  ville: string;
  codePostal: string;
  pays: string;
}

export interface ClientResponseDto {
  id: number;
  nom: string;
  prenom: string;
  adresse: AdresseResponseDto;
  photo?: string;
  email: string;
  numTel: string;
  entreprise: EntrepriseResponseDto;
}

export interface ClientRequestDto {
  nom: string;
  prenom: string;
  adresse: AdresseRequestDto;
  photo?: string;
  email: string;
  numTel: string;
  entrepriseId: number;
}

export interface UtilisateurResponseDto {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance?: string;
  motDePasse: string;
  photo?: string;
  entrepriseId?: number;
  entreprise: EntrepriseResponseDto;
  adresse: AdresseResponseDto;
  roles: RolesResponseDto[];
}

export interface RolesResponseDto {
  id: number;
  roleName: string;
  utilisateur?: UtilisateurResponseDto;
  entrepriseId: number;
}

export interface AuthResponseDto {
  token: string;
  user: UtilisateurResponseDto;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface RegisterRequestDto {
  username: string;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  role: string;
  entrepriseId: number;
}

// Command DTOs
export interface CommandeClientRequestDto {
  code: string;
  dateCommande: string;
  entrepriseId: number;
  clientId: number;
}

export interface CommandeClientResponseDto {
  id: number;
  code: string;
  dateCommande: string;
  entrepriseId: number;
  client?: ClientResponseDto;
  ligneCommandeClients: LigneCommandeClientResponseDto[];
}

export interface CommandeFournisseurRequestDto {
  code: string;
  dateCommande: string;
  entrepriseId: number;
  fournisseurId: number;
}

export interface CommandeFournisseurResponseDto {
  id: number;
  code: string;
  dateCommande: string;
  entrepriseId: number;
  fournisseur?: FournisseurResponseDto;
  ligneCommandeFournisseurs: LigneCommandeFournisseurResponseDto[];
}

// Line Command DTOs
export interface LigneCommandeClientRequestDto {
  articleId: number;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

export interface LigneCommandeClientResponseDto {
  id: number;
  article: ArticleResponseDto;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

export interface LigneCommandeFournisseurRequestDto {
  articleId: number;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

export interface LigneCommandeFournisseurResponseDto {
  id: number;
  article: ArticleResponseDto;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

// Sales DTOs
export interface VentesRequestDto {
  code: string;
  dateVente: string;
  commentaire?: string;
  entrepriseId: number;
  ligneVentes: LigneVenteRequestDto[];
}

export interface VentesResponseDto {
  id: number;
  code: string;
  dateVente: string;
  commentaire?: string;
  entrepriseId: number;
  ligneVentes: LigneVenteResponseDto[];
}

export interface LigneVenteRequestDto {
  articleId: number;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

export interface LigneVenteResponseDto {
  id: number;
  article: ArticleResponseDto;
  quantite: number;
  prixUnitaire: number;
  entrepriseId: number;
}

// Stock Movement DTOs
export interface MvtStkRequestDto {
  dateMvt: string;
  quantite: number;
  typeMvt: 'ENTREE' | 'SORTIE';
  articleId: number;
  entrepriseId: number;
}

export interface MvtStkResponseDto {
  id: number;
  dateMvt: string;
  quantite: number;
  typeMvt: 'ENTREE' | 'SORTIE';
  article: ArticleResponseDto;
  entrepriseId: number;
}

// Enterprise DTOs
export interface EntrepriseRequestDto {
  nomEntreprise: string;
  description?: string;
  email: string;
  adresse: AdresseRequestDto;
  codeFiscal: string;
  numTel: string;
  steWeb?: string;
  photo?: string;
}

// User DTOs
export interface UtilisateurRequestDto {
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance?: string;
  motDePasse: string;
  photo?: string;
  entrepriseId: number;
  adresse: AdresseRequestDto;
}

export interface RolesRequestDto {
  roleName: string;
  utilisateurId: number;
  entrepriseId: number;
}