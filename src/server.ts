import express from "express";

export async function serve() {
    const app = express();
    const port: number = 8080;
    const host: string = 'localhost';

    app.get('/', (request, response) => {
        response.send('Hello, World!')
    })

    app.listen(port, () => {
        console.log(`Running on http://${host}:${port}`);
    });
}