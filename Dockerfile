# N Use an official Node.js runtime as the base image
FROM node:16.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the server file to the working directory
COPY index.js .

# Expose the port on which the server will listen
EXPOSE 3000

# Start the Node.js server
CMD [ "node", "index.js" ]
