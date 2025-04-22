# Express API Starter

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

A clean, structured Express.js API starter with TypeScript, featuring user and product routes with logging and error handling.

## 📌 Features

- RESTful API endpoints for Users and Products
- Request logging middleware
- Custom error handling
- TypeScript support
- Structured project layout

## Flowchart
![Flowchart](https://github.com/web-projects-cp/express-ts-api-starter/blob/main/flowchart1.png)

flowchart LR
    A[Client] -->|HTTP Request| B[Logger]
    B --> C[Router]
    C --> D[User/Product Logic]
    D -->|Success| E[Response]
    D -->|Error| F[Error Handler]

## 🏗️ Project Structure

```
src/
├── logs/               # Request logs storage
├── middlewares/        # Custom middleware
│   ├── errorHandler.ts # Error handling logic
│   └── logger.ts      # Request logging
├── routers/            # Route definitions
│   ├── products.ts     # Product routes
│   └── user.ts         # User routes
└── server.ts           # Main application entry
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/web-projects-cp/express-ts-api-starter.git
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
```bash
npm start
# or
yarn start
```
The server will start on `http://localhost:5050`

## 📡 API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users/:userId` - Get specific user
- `POST /users` - Create new user
- `PUT /users` - Update user (stub)
- `DELETE /users` - Delete user (stub)

### Products
- `GET /products` - Get all products

## 🧪 Testing the API

### Example Requests

1. Get all users:
   ```bash
   curl http://localhost:5050/users
   ```
   **Response:**
   ```json
   {
     "status": 200,
     "user": [
       {"id": 1, "user": "1"},
       {"id": 2, "user": "2"},
       {"id": 3, "user": "3"}
     ]
   }
   ```

2. Get specific user:
   ```bash
   curl http://localhost:5050/users/2
   ```
   **Response:**
   ```json
   {
     "status": 200,
     "user": {"id": 2, "user": "2"}
   }
   ```

3. Create new user:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"id":4,"user":"4"}' http://localhost:5050/users
   ```
   **Response:**
   ```json
   {
     "message": "done",
     "user": {"id":4,"user":"4"}
   }
   ```

4. Get all products:
   ```bash
   curl http://localhost:5050/products
   ```
   **Response:**
   ```json
   {
     "status": 200,
     "user": [
       {"id": 1, "user": "1"},
       {"id": 2, "user": "2"},
       {"id": 3, "user": "3"}
     ]
   }
   ```

## 📝 Logging
All requests are logged to `src/logs/requests.txt` with format:
```
Method: [HTTP_METHOD], Path: [PATH], Date: [DATE], Time: [TIME]
```

## 🛑 Error Handling
- 404 errors return:
  ```json
  {
    "status": 404,
    "message": "Page Not Found"
  }
  ```
- Global errors return:
  ```json
  {
    "status": 400,
    "message": "Something wrong"
  }
  ```
