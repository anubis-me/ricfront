FROM node:10-alpine
# Create app directory
WORKDIR /client
# Install app dependencies
COPY package.json /client

RUN npm install 
# Copy app source code
COPY . /client

#Expose port and start application
EXPOSE 3000
CMD ["npm", "run", "dev"]