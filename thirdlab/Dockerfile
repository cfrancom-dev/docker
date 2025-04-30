# Etapa de construcción
FROM node:16 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Etapa de producción
FROM node:16-alpine
WORKDIR /usr/src/app
ENV PORT=3000
COPY --from=builder /usr/src/app .
EXPOSE $PORT
USER node
CMD ["node", "index.js"]

 HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000 || exit 1
 

