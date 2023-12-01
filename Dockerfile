# —- Build Stage —-
FROM node:latest AS builder

# Specify the working directory
RUN mkdir /app && mkdir /app/data

COPY . /app

RUN cd /app && npm install && npm run build


FROM node:latest

RUN mkdir /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package-lock.json /app/

RUN cd /app && npm install --omit=dev
WORKDIR /app
CMD ["node", "build/index.js"]