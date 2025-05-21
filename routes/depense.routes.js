const express = require("express")
const depense_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const depense_controller = require("../controllers/depense.controller")



depense_routes.post("/create_depense" ,depense_controller.create_depense)
depense_routes.get("/findAll_depense",depense_controller.findAll_depense)
depense_routes.get("/getOne_depense/:DEPENSE_ID", depense_controller.getOne_depense)
depense_routes.put("/update_depense/:DEPENSE_ID", depense_controller.update_depense)
depense_routes.delete("/delete_depense/:DEPENSE_ID", depense_controller.delete_depense)

   
module.exports = depense_routes