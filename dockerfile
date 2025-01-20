# Use a lightweight web server
FROM nginx:stable-alpine

# Copy production build files to the container
COPY dist /usr/share/nginx/html

# Expose the container's port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
