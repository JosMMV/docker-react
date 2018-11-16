FROM node
WORKDIR /app
COPY . .
COPY package.json .
EXPOSE 3000
RUN npm install 
CMD ["npm", "start"]
