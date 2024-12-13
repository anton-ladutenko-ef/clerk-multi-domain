FROM node:18-alpine as build

RUN mkdir /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY next.config.ts .
#COPY api-server.js .
COPY .env.local ./.env
RUN cat .env

RUN npm install --verbose

COPY . .

# COPY .next ./.next
# COPY public ./.public

RUN npm run build

# ---------------

FROM node:18-alpine

ENV NODE_ENV production
ENV API_PORT 3001

WORKDIR /app

COPY --from=build /app/package-lock.json .
COPY --from=build /app/package.json .
COPY --from=build /app/next.config.ts .
#COPY --from=build /app/api-server.js .
COPY --from=build /app/.env ./.env
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

COPY --from=build /app/node_modules .
RUN npm install --verbose

EXPOSE 8080

CMD npm start
