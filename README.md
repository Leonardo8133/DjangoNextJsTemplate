# Django/Nextjs/Docker-compose Template Repository

This is a template repository for creating a web application using Django as the backend framework, Next.js as the frontend framework, and Docker Compose for containerization. This template is designed to help developers get started quickly with a production-ready application setup.

## Built With

- [Django](https://www.djangoproject.com/) - Backend web framework
- [Next.js](https://nextjs.org/) - Frontend web framework
- [Docker](https://www.docker.com/) - Containerization tool
- [Docker Compose](https://docs.docker.com/compose/) - Docker container orchestrator

## Features

- [JWT Authentication] - API Authentication using JWT Token.
- [Ready to Deploy] - This application is ready to deploy using Docker.
- [Minimal Backend Tests] - The test folders are set, with some minimal tests implemented.
- [Background Worker] - Our application uses Celery to run background tasks.

## Getting Started

1. Clone the repository:

```bash
git clone [https://github.com/Leonardo8133/DjangoNextJsTemplate.git]
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Run Docker Compose:

```bash
docker-compose up --build
```

4. After successfully starting up the Docker container, go to `http://localhost:8000` to check if the Django backend is running. You should see the default Django welcome screen.

5. Go to `http://localhost:3000` to check if the Next.js frontend is running. You should see the default Next.js page.

## Project Structure

```
.
├── backend/              # Django backend app
│   ├── project/          # Django project
│   └── app/              # Django app
│   ├── Dockerfile        # Django Dockerfile
│   └── requirements.txt  # Python dependencies
├── frontend/             # Next.js frontend app
│   ├── pages/            # Next.js pages
│   └── components/       # Next.js components
│   ├── Dockerfile        # Next.js Dockerfile
│   └── package.json      # Node.js dependencies
├── docker-compose.yml    # Docker Compose configuration file
└── README.md             # Project README
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
