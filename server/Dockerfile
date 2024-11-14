# Build stage
FROM node:22 AS build

RUN apt-get update && apt-get install -y libc6

WORKDIR .

COPY package*.json . 

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

# Production stage
FROM node:22 AS production

WORKDIR .

COPY package*.json . 

RUN npm ci --only=production

COPY --from=build /node_modules/.prisma ./node_modules/.prisma
COPY --from=build /prisma ./prisma
COPY --from=build /dist ./dist

CMD ["node", "dist/index.js"]