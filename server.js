const jsonServer = require("json-server");
const server = jsonServer.create();

// ditambah cors buat bug nya
const cors = require("cors");
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
    static: "./build",
});

const port = process.env.PORT || 2000;

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*":"/$",
    })
);

server.use(router);
server.use(cors());
server.listen(port, () => {
    console.log(`server is running on ${port} `)
});