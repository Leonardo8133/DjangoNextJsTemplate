# Django with Next.js and Docker Compose

This is a template repository that demonstrates how to use Django as the backend for a Next.js frontend application using Docker Compose.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/djangoxnextjs`
2. Install dependencies: Run `npm install` or `pip install -r requirements.txt`.
3. Build the Docker images: Run `docker-compose build`.
4. Run the containers: Run `docker-compose up --build`. This will start both the Django and Next.js containers.
5. Access the Next.js app: Open your browser and go to <http://localhost:3000>. You should see the default "Hello World" page.
6. Access the Django admin interface: Go to <http://localhost:8000/admin/>. Use the username and password specified in the `settings.py` file (default: `admin / Admin123`).

## Technologies Used

* [Django](https://www.django-rest-framework.org/) - A Python web framework for building APIs.
* [Next.js](https://nextjs.org/) - A JavaScript framework for building server-rendered React applications.
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Docker](https://www.docker.com/) - A containerization platform for developing, shipping, and running applications.
* [Compose](https://docs.docker.com/compose/) - A tool for defining and running multi-container Docker applications.

## Features

* A simple CRUD API built with Django Rest Framework.
* A Next.js frontend application that consumes the API and displays data.
* Authentication and authorization using Django's built-in authentication system.
* Docker Compose for easy deployment and management of the application stack.

## Conclusion

This template provides a starting point for building full-stack web applications with Django, Next.js, and Docker Compose. It can be used as a basis for more complex projects by adding additional features and functionality.
