# Todo-CRUD-API-
A basic CRUD API for a todo list 
## Description
This project is a simple CRUD (Create, Read, Update, Delete) API for managing a Todo list. It uses Node.js and Express for the server, and MongoDB with Mongoose for the database.

## Installation

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```
    cd Todo_API
    ```

3. Install the dependencies:
    ```
    npm install
    ```

## Usage

1. Start the server:
    ```
    npm run start
    ```

2. The API will be running on `http://localhost:3000`. You can use tools like Postman or CURL to interact with the API endpoints.

## API Endpoints

- `GET /task` - Retrieve all todos
- `POST /task` - Create a new todo
- `GET /task/:id` - Retrieve a specific todo by ID
- `PUT /task/:id` - Update a specific todo by ID
- `DELETE /task/:id` - Delete a specific todo by ID

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Author

Mohamed Elesawy

## License

This project is not licensed.
