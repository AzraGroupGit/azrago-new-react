# Gunakan Node.js 20 atau 22
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file
COPY . .

# Expose port
EXPOSE 5173

# Command untuk development
CMD ["npm", "run", "dev", "--", "--host", "--port", "5173"]