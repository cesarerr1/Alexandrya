#!/usr/bin/env bash
# ============================================================
#  Alexandrya — Script de instalación desde cero
#  Plataforma educativa de preparación de exámenes
#
#  Uso:
#    chmod +x setup.sh
#    ./setup.sh
#
#  Requisitos mínimos:
#    - git
#    - Node.js >= 20.x (probado con 20.20.2)
#    - npm >= 10.x (probado con 10.8.2)
# ============================================================

set -euo pipefail

# ── Colores ──
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
PURPLE='\033[0;35m'
NC='\033[0m' # Sin color

print_header() {
  echo ""
  echo -e "${PURPLE}══════════════════════════════════════════════════${NC}"
  echo -e "${PURPLE}  $1${NC}"
  echo -e "${PURPLE}══════════════════════════════════════════════════${NC}"
}

print_step() {
  echo -e "${CYAN}→ $1${NC}"
}

print_ok() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_warn() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

# ── Versiones mínimas requeridas ──
REQUIRED_NODE_MAJOR=20
REQUIRED_NPM_MAJOR=10

# ── 1. Verificar prerrequisitos ──
print_header "1/6 — Verificando prerrequisitos"

# Git
if ! command -v git &> /dev/null; then
  print_error "git no está instalado."
  echo "  Instala con: sudo apt install git"
  exit 1
fi
GIT_VERSION=$(git --version | awk '{print $3}')
print_ok "git $GIT_VERSION"

# Node.js
if ! command -v node &> /dev/null; then
  print_error "Node.js no está instalado."
  echo ""
  echo "  Instalar Node.js 20 LTS:"
  echo "    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
  echo "    sudo apt install -y nodejs"
  echo ""
  echo "  O con nvm (recomendado):"
  echo "    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
  echo "    nvm install 20"
  echo "    nvm use 20"
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
if [ "$NODE_MAJOR" -lt "$REQUIRED_NODE_MAJOR" ]; then
  print_error "Node.js $NODE_VERSION detectado. Se requiere >= $REQUIRED_NODE_MAJOR.x"
  echo "  Actualiza con: nvm install 20 && nvm use 20"
  exit 1
fi
print_ok "Node.js v$NODE_VERSION"

# npm
NPM_VERSION=$(npm -v)
NPM_MAJOR=$(echo "$NPM_VERSION" | cut -d. -f1)
if [ "$NPM_MAJOR" -lt "$REQUIRED_NPM_MAJOR" ]; then
  print_warn "npm $NPM_VERSION detectado. Se recomienda >= $REQUIRED_NPM_MAJOR.x"
  echo "  Actualiza con: npm install -g npm@latest"
fi
print_ok "npm v$NPM_VERSION"

# ── 2. Clonar repositorio ──
print_header "2/6 — Clonando repositorio"

REPO_URL="https://github.com/dany2501/Alexandrya.git"
INSTALL_DIR="Alexandrya"

if [ -d "$INSTALL_DIR" ]; then
  print_warn "El directorio '$INSTALL_DIR' ya existe."
  read -rp "¿Deseas usarlo? (s/n): " USE_EXISTING
  if [[ "$USE_EXISTING" != "s" && "$USE_EXISTING" != "S" ]]; then
    echo "Abortado."
    exit 0
  fi
  cd "$INSTALL_DIR"
  print_step "Actualizando repositorio..."
  git pull --ff-only || print_warn "No se pudo actualizar. Continuando con la versión local."
else
  print_step "Clonando desde $REPO_URL..."
  git clone "$REPO_URL" "$INSTALL_DIR"
  cd "$INSTALL_DIR"
fi
print_ok "Repositorio listo en $(pwd)"

# ── 3. Instalar dependencias ──
print_header "3/6 — Instalando dependencias"

cd alexandria

print_step "Ejecutando npm install (esto puede tomar unos minutos)..."
npm install --legacy-peer-deps 2>&1 | tail -5

INSTALLED_PACKAGES=$(npm ls --depth=0 2>/dev/null | wc -l)
print_ok "Dependencias instaladas ($INSTALLED_PACKAGES paquetes)"

# ── 4. Configurar variables de entorno ──
print_header "4/6 — Configurando entorno"

ENV_FILE=".env"
if [ ! -f "$ENV_FILE" ]; then
  print_warn "No se encontró archivo .env — creando con valores por defecto"
  cat > "$ENV_FILE" << 'ENVEOF'
VITE_APP_VERSION = v0.1.0
GENERATE_SOURCEMAP = false
VITE_APP_BASE_NAME = /free
ENVEOF
fi
print_ok "Variables de entorno configuradas"
echo "  Archivo: $(pwd)/$ENV_FILE"

# ── 5. Verificar build ──
print_header "5/6 — Verificando build de producción"

print_step "Ejecutando vite build..."
BUILD_OUTPUT=$(npx vite build 2>&1)
BUILD_TIME=$(echo "$BUILD_OUTPUT" | grep -oP 'built in \K[^\s]+')

if echo "$BUILD_OUTPUT" | grep -q "✓ built"; then
  print_ok "Build exitoso en ${BUILD_TIME}s"
else
  print_error "El build falló. Revisa los errores:"
  echo "$BUILD_OUTPUT" | tail -20
  exit 1
fi

# ── 6. Resumen ──
print_header "6/6 — ¡Instalación completa!"

echo ""
echo -e "  ${GREEN}Alexandrya está listo para desarrollo.${NC}"
echo ""
echo -e "  ${CYAN}Versiones instaladas:${NC}"
echo "    Node.js     $(node -v)"
echo "    npm         v$(npm -v)"
echo "    React       $(node -e "console.log(require('./node_modules/react/package.json').version)")"
echo "    Vite        $(node -e "console.log(require('./node_modules/vite/package.json').version)")"
echo "    MUI         $(node -e "console.log(require('./node_modules/@mui/material/package.json').version)")"
echo "    React Router $(node -e "console.log(require('./node_modules/react-router-dom/package.json').version)")"
echo ""
echo -e "  ${CYAN}Comandos disponibles:${NC}"
echo "    npm run dev       Servidor de desarrollo (http://localhost:3000/free)"
echo "    npm run build     Build de producción"
echo "    npm run preview   Preview del build"
echo "    npm run lint      Ejecutar linter"
echo "    npm run lint:fix  Corregir errores de lint"
echo ""
echo -e "  ${CYAN}Para iniciar ahora:${NC}"
echo "    cd $(pwd)"
echo "    npm run dev"
echo ""
echo -e "  ${PURPLE}═══════════════════════════════════════════${NC}"
echo -e "  ${PURPLE}  Alexandrya — Prepárate para el éxito 🎓${NC}"
echo -e "  ${PURPLE}═══════════════════════════════════════════${NC}"
echo ""
