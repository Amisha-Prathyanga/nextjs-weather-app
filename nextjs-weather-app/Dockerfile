# Use official Node.js image as base
FROM node:alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your Next.js app runs on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]
