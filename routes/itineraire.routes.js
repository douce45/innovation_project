const express = require("express")
const itineraire_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const itineraire_controller = require("../controllers/itineraire.controller")



itineraire_routes.post("/create_itineraire" ,itineraire_controller.create_itineraire)
itineraire_routes.get("/findAll_itineraire",itineraire_controller.findAll_itineraire)
itineraire_routes.get("/getOne_itineraire/:DEPENSE_ID", itineraire_controller.getOne_itineraire)
itineraire_routes.put("/update_itineraire/:DEPENSE_ID", itineraire_controller.update_itineraire)
itineraire_routes.delete("/delete_itineraire/:DEPENSE_ID", itineraire_controller.delete_itineraire)

   
module.exports = itineraire_routes