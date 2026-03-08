# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM nginx:alpine

# Borramos config por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiamos resultado estático
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]