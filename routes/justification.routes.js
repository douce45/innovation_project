const express = require("express")
const justification_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const justification_controller = require("../controllers/justification.controller")



justification_routes.post("/create_justification" ,justification_controller.create_justification)
justification_routes.get("/findAll_justification",justification_controller.findAll_justification)
justification_routes.get("/getOne_justification/:ID_PROFIL", justification_controller.getOne_justification)
justification_routes.put("/update_justification/:ID_PROFIL", justification_controller.update_justification)
justification_routes.delete("/delete_justification/:ID_PROFIL", justification_controller.delete_justification)

   
module.exports = justification_routes