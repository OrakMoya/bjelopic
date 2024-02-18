
# —- Build Stage —-
FROM node:latest AS builder

# Specify the working directory
RUN mkdir /app && mkdir /app/data

COPY . /app/

ENV MONGO_URL="127.0.0.1"
ENV MONGO_PORT="27017"
ENV MONGO_DB="test"

RUN cd /app && npm install
RUN ls /app
RUN cd /app && npm run build


FROM node:latest

RUN mkdir /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package-lock.json /app/express_server.js /app/

RUN cd /app && npm install --omit=dev
WORKDIR /app
CMD ["node", "express_server.js"]

EXPOSE 3000
