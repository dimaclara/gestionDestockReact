# Setup Errors Found & Solutions

## ❌ Issues Identified:

### 1. Maven Wrapper Permission Error
**Error**: `./mvnw: Permission denied`
**Fix**: ✅ Fixed with `chmod +x mvnw`

### 2. Node.js/npm Not Installed
**Error**: `npm: command not found`
**Solution**: Install Node.js

## 🔧 Quick Fixes:

### Install Node.js (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Install Node.js (using nvm - recommended):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

### Alternative - Manual Steps:

1. **Start Backend Only**:
```bash
cd Spring-Boot-Final-Project
./mvnw spring-boot:run
```

2. **Install Node.js then start frontend**:
```bash
npm install
npm run dev
```

## 🚀 After Installing Node.js:
```bash
npm install
npm run dev:full
```