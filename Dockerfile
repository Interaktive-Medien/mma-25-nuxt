# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --production

# Copy built application from builder stage
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/.nuxt /app/.nuxt

# Create database directory and copy the existing database
COPY server/db/articles.sqlite /app/server/db/articles.sqlite

# Set proper permissions for the database file
RUN chown -R node:node /app/server/db

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Switch to non-root user
USER node

# Start the application
CMD ["node", ".output/server/index.mjs"]
