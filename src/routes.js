const express = require("express");
const routes = express.Router();
const UserController = require("./App/controllers/UserController");
const SessionController = require("./App/controllers/SessionController");
const AdController = require("./App/controllers/AdController");
const SendMaillController = require("./App/controllers/SendMaillController");

const authMiddleware = require("./App/middlewares/auth");

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.get("/test", authMiddleware, (req, res) => res.json({ ok: true }));

//rotas autenticadas
routes.use(authMiddleware);

///rotas register
routes.get("/ads", AdController.index);
routes.get("/ads/:id", AdController.show);
routes.post("/ads", AdController.store);
routes.put("/ads/:id", AdController.update);
routes.delete("/ads/:id", AdController.destroy);

//Mail
routes.post("/sendmail", SendMaillController.store);

module.exports = routes;
