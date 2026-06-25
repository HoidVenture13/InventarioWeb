# MiniInventario

CRUD de categorias de productos — Spring Boot + Angular

## Stack

- **Backend** — Java 17, Spring Boot 4, PostgreSQL, H2 (dev)
- **Frontend** — Angular 21, Signals, Bootstrap 5, zoneless

## Quick start

### Backend

```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev   # dev mode, H2
```

Starts at `http://localhost:8080`  
Swagger at `/documentacion/swagger-ui.html`

### Frontend

```bash
cd frontend
npm install
npm start
```

Starts at `http://localhost:4200`

## API

| Method   | Endpoint                                      |
| -------- | --------------------------------------------- |
| `GET`    | `/api/v1/categorias/categoria`                |
| `GET`    | `/api/v1/categorias/categoria/{id}`           |
| `POST`   | `/api/v1/categorias/categoria`                |
| `PUT`    | `/api/v1/categorias/categoria/{id}`           |
| `DELETE` | `/api/v1/categorias/categoria/{id}`           |

## Prod setup

```bash
cd backend
docker compose up -d
$env:DB_USER="admin"; $env:DB_PASSWORD="admin"; $env:DB_URL="jdbc:postgresql://localhost:5173/testdb"
./mvnw spring-boot:run
```

## Testing

```bash
cd backend && ./mvnw test -Dspring.profiles.active=dev
cd frontend && npm test
```

---

Proyecto academico — IPN
