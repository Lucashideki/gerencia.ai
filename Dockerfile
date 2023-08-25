# Estágio de compilação
FROM node:16 AS build
WORKDIR /app
COPY ./project-gerencia-ai/package*.json ./
RUN npm install
COPY ./project-gerencia-ai ./
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY --from=build /app/dist/project-gerencia-ai /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
