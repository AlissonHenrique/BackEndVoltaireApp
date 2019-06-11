const express = require("express");
const routes = express.Router();
const UserController = require("./App/controllers/UserController");
const SessionController = require("./App/controllers/SessionController");
const AdController = require("./App/controllers/AdController");
const authMiddleware = require("./App/middlewares/auth");

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.get("/test", (req, res) => res.send("ok"));

//rotas autenticadas
routes.use(authMiddleware);

///rotas register
routes.get("/ads", AdController.index);
routes.get("/ads/:id", AdController.show);
routes.post("/ads", AdController.store);
routes.put("/ads/:id", AdController.update);
routes.delete("/ads/:id", AdController.destroy);

module.exports = routes;
