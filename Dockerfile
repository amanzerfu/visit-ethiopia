# Use an official Node.js runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "app.js"]