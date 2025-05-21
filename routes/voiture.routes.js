const express = require("express")
const versement_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const voiture_controller = require("../controllers/voiture.controller")



voiture_routes.post("/create_voiture" ,voiture_controller.create_voiture)
voiture_routes.get("/findAll_voiture",voiture_controller.findAll_voiture)
voiture_routes.get("/getOne_voiture/:ID_PROFIL", voiture_controller.getOne_voiture)
voiture_routes.put("/update_voiture/:ID_PROFIL", voiture_controller.update_voiture)
voiture_routes.delete("/delete_voiture/:ID_PROFIL", voiture_controller.delete_voiture)

   
module.exports = voiture_routes