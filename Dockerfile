# Use Node.js version 22 as the base image
FROM node:22

RUN mkdir /app
RUN mkdir /app/backend
RUN mkdir /app/frontend

# Clone the repository into a temporary directory
WORKDIR /tmp
RUN git clone https://github.com/rexsllemel/pingvin-share.git

# Set up the backend
RUN ls -la
RUN ls pingvin-share/backend

RUN mv /tmp/pingvin-share/backend/* /app/backend/
RUN ls /app/backend
WORKDIR /app/backend
RUN npm i
RUN npm run build
# RUN npm run prod
RUN npm install pm2 -g
# CMD ["npm", "run", "prod"]
RUN pm2 start --name="pingvin-share-backend" npm -- run prod

# Set up the frontend
RUN mv /tmp/pingvin-share/frontend/* /app/frontend/
WORKDIR /app/frontend
RUN npm i
RUN npm run build
RUN API_URL=http://localhost:8089
CMD ["npm", "run", "start"]

# Clean up the temporary directory
RUN rm -rf /tmp/pingvin-share

WORKDIR /app/backend
RUN pm2 start --name="pingvin-share-backend" npm -- run prod

EXPOSE 3000