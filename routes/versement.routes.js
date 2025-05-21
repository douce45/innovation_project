const express = require("express")
const versement_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const versement_controller = require("../controllers/profil.controller")



versement_routes.post("/create_versement" ,versement_controller.create_versement)
versement_routes.get("/findAll_versement",versement_controller.findAll_versement)
versement_routes.get("/getOne_versement/:ID_PROFIL", versement_controller.getOne_versement)
versement_routes.put("/update_versement/:ID_PROFIL", versement_controller.update_versement)
versement_routes.delete("/delete_versement/:ID_PROFIL", versement_controller.delete_versement)

   
module.exports = versement_routes