const express = require("express")
const utilisateurs_routes = express.Router("")
const requireAuth = require("../middlewares/requireAuth")
const utilisateurs_controller = require("../controllers/utilisateurs.controllers")
utilisateurs_routes.get("/Bull",requireAuth, utilisateurs_controller.getUtilisateurs);
utilisateurs_routes.get("/lewis", requireAuth ,utilisateurs_controller.get_gazos);
utilisateurs_routes.get("/get_data",utilisateurs_controller.get_data);
utilisateurs_routes.post("/insert", requireAuth ,utilisateurs_controller.add)
utilisateurs_routes.get("/getone/:ID_UTILISATEUR", utilisateurs_controller.getone)
utilisateurs_routes.get("/getOneUser/:ID_UTILISATEUR", utilisateurs_controller.getOneUser)
utilisateurs_routes.put("/update/:ID_UTILISATEUR", utilisateurs_controller.update)
utilisateurs_routes.delete("/delete/:ID_UTILISATEUR", utilisateurs_controller.delete_one)
utilisateurs_routes.get("/get_profil",utilisateurs_controller.get_profil)
utilisateurs_routes.get("/getUserSequilizes",utilisateurs_controller.getUserSequilize)
utilisateurs_routes.get("/getUserSequilizes",utilisateurs_controller.getUserSequilize)
utilisateurs_routes.post("/createUtilisateur" ,utilisateurs_controller.createUtilisateur)
utilisateurs_routes.get("/findAllPro",utilisateurs_controller.findAllPro)
utilisateurs_routes.get("/getProvince",utilisateurs_controller.getProvince)
utilisateurs_routes.get("/getCommune/:PROVINCE_ID",utilisateurs_controller.getCommune)
utilisateurs_routes.get("/getZone/:COMMUNE_ID",utilisateurs_controller.getZone)
utilisateurs_routes.get("/getColline/:ZONE_ID",utilisateurs_controller.getColline)
utilisateurs_routes.put("/updateUtil/:ID_UTILISATEUR", utilisateurs_controller.updateUtil)



    
module.exports = utilisateurs_routes