const express = require("express")
const profil_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const profil_controller = require("../controllers/profil.controller")



profil_routes.post("/create_profil" ,profil_controller.create_profil)
profil_routes.get("/findAll_profil",profil_controller.findAll_profil)
profil_routes.get("/getOne_profil/:ID_PROFIL", profil_controller.getOne_profil)
profil_routes.put("/update_profil/:ID_PROFIL", profil_controller.update_profil)
profil_routes.delete("/delete_profil/:ID_PROFIL", profil_controller.delete_profil)

   
module.exports = profil_routes