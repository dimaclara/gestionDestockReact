# Frontend-Backend API Alignment Report

## ✅ Fixed Issues

### 1. Authentication Service
- **Fixed**: Changed `/utilisateurs/login` → `/auth/login`
- **Fixed**: Changed `/utilisateurs/create` → `/auth/register`
- **Fixed**: Updated response structure `accessToken` → `token`
- **Fixed**: Updated RegisterRequest interface to match backend DTO

### 2. Article Service
- **Fixed**: Changed `/articles/all` → `/articles/showAll`
- **Fixed**: Changed `/articles/{id}` → `/articles/id/{id}`
- **Fixed**: Updated to use multipart/form-data for create/update operations
- **Fixed**: Changed `prixUnitaireHt` → `prixUnitaire` to match backend
- **Fixed**: Updated search method `/articles/filter/code-article/{code}` → `/articles/code/{code}`

### 3. Category Service
- **Fixed**: Changed `/categories/all` → `/categories/showAll`
- **Fixed**: Changed PATCH → PUT for update operations
- **Fixed**: Updated search method to match backend endpoint

## 🔍 Backend API Structure Analysis

### Base URL: `gestiondestock/api/v1`

### Authentication Endpoints:
- `POST /auth/login` - Login user
- `POST /auth/register` - Register user

### Article Endpoints:
- `GET /articles/showAll` - Get all articles
- `GET /articles/id/{id}` - Get article by ID
- `GET /articles/code/{code}` - Get article by code
- `POST /articles/create` - Create article (multipart/form-data)
- `PUT /articles/update/{id}` - Update article (multipart/form-data)
- `DELETE /articles/delete/{id}` - Delete article

### Category Endpoints:
- `GET /categories/showAll` - Get all categories
- `GET /categories/{id}` - Get category by ID
- `GET /categories/code/{code}` - Get category by code
- `POST /categories/create` - Create category (JSON)
- `PUT /categories/update/{id}` - Update category (JSON)
- `DELETE /categories/delete/{id}` - Delete category

### Client Endpoints:
- `GET /clients/showAll` - Get all clients
- `GET /clients/{id}` - Get client by ID
- `POST /clients/create` - Create client (multipart/form-data)
- `PUT /clients/update/{id}` - Update client (multipart/form-data)
- `DELETE /clients/delete/{id}` - Delete client

## ⚠️ Remaining Considerations

1. **Security**: All endpoints except auth require JWT token
2. **File Uploads**: Articles and Clients use multipart/form-data
3. **CORS**: Updated to allow React dev server (port 5173)
4. **Error Handling**: Backend uses custom error responses

## 🚀 Next Steps

1. Test authentication flow
2. Test article CRUD operations with file upload
3. Test category CRUD operations
4. Implement remaining services (Client, Supplier, etc.)
5. Add proper error handling for API responses