// utilisateurs.controller.js
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const IMAGES_DESTINATIONS = require("../constants/IMAGES_DESTINATIONS");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const UtilisateurUpload = require("../class/upload/UtilisateurUpload");
const Profils = require("../models/Profils");
const Utilisateurs = require("../models/Utilisateurs");
const { ConnectionError } = require("sequelize");



//fonction pour afficher tous les utisateurs
const findAll_utisateur = async (req, res) => {
  try {
    const result = await Utilisateurs.findAll();
    res.status(RESPONSE_CODES.OK).json({
      statusCode: RESPONSE_CODES.OK,
      httpStatus: RESPONSE_STATUS.OK,
      message: "Liste des utilisateurs",
      result: {
        data: result,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
      statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
      message: "Erreur interne du serveur, réessayer plus tard",
    });
  }
};
//fonction pour creer un utisateur
const create_utisateur = async (req, res) => {
  try {
    const {NOM,PRENOM,EMAIL,USER_NAME,TELEPHONE1,	TELEPHONE2,PASSWORD,	ID_PROFIL,	IS_ACTIVE } = req.body;


    const utilisateur_create = await Utilisateurs.create({
      NOM:NOM,      
      PRENOM:PRENOM,      
      EMAIL:EMAIL,      
      USER_NAME:USER_NAME,      
      TELEPHONE1:TELEPHONE1,      
      TELEPHONE2:TELEPHONE2,      
      PASSWORD:PASSWORD,      
      ID_PROFIL:ID_PROFIL,      
      IS_ACTIVE:IS_ACTIVE,      
    });

    res.status(RESPONSE_CODES.CREATED).json({
      statusCode: RESPONSE_CODES.CREATED,
      httpStatus: RESPONSE_STATUS.CREATED,
      message: "L'utilisateur a été crée avec succes",
      result: utilisateur_create,
    });

  } catch (error) {
    console.log(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
      statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
      message: "Erreur interne du serveur, réessayer plus tard",
    });
  }
};
//fonction pour afficher un seul utisateur
const getOne_utisateur = async (req, res) => {
  try {
    const { 	ID_UTILISATEUR   } = req.params;
    const utilisateur_get_one = await Utilisateurs.findOne({
      where: {
        	ID_UTILISATEUR  ,
      },

    });
    if (utilisateur_get_one) {
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Utilisateur trouvée",
        result: stages,
      });
    } else {
      res.status(RESPONSE_CODES.NOT_FOUND).json({
        statusCode: RESPONSE_CODES.NOT_FOUND,
        httpStatus: RESPONSE_STATUS.NOT_FOUND,
        message: "Utilisateur non trouvée",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
      statusCode: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      httpStatus: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
      message: "Erreur interne du serveur, réessayer plus tard",
    });
  }
};



//fonction pour faire la mise a jour de l' utisateur
const update_utisateur = async (req, res) => {
try {
  const { 	ID_UTILISATEUR} = req.params;
  const {NOM,PRENOM,EMAIL,USER_NAME,TELEPHONE1,	TELEPHONE2,PASSWORD,	ID_PROFIL,	IS_ACTIVE} = req.body;
  await Utilisateurs.update(
    {
      NOM:NOM,      
      PRENOM:PRENOM,      
      EMAIL:EMAIL,      
      USER_NAME:USER_NAME,      
      TELEPHONE1:TELEPHONE1,      
      TELEPHONE2:TELEPHONE2,      
      PASSWORD:PASSWORD,      
      ID_PROFIL:ID_PROFIL,      
      IS_ACTIVE:IS_ACTIVE,           
    },
    {
      where: {
        	ID_UTILISATEUR: 	ID_UTILISATEUR,
      },
    }
  );
  res.status(200).json({
    message: "Utilisateur modifié avec succès",
    data: {
      DESCRIPTION_DEPENSE,       
    },
  });
} catch (error) {
  console.log(error);
  res.status(500).send("Erreur interne du serveur");
}
};
//fonction pour faire la mise a jour de l' utisateur
const is_active_utisateur
= async (req, res) => {
  try {
    const { 	ID_UTILISATEUR} = req.params;
    const {	IS_ACTIVE} = req.body;
    await Utilisateurs.update(
      {
        IS_ACTIVE:IS_ACTIVE,           
      },
      {
        where: {
            ID_UTILISATEUR: 	ID_UTILISATEUR,
        },
      }
    );
    res.status(200).json({
      message: "Utilisateur modifié avec succès",
      data: {
        IS_ACTIVE,       
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
  };
//fonction pour supprimer un utisateur
const delete_utisateur = async (req, res) => {
try {
  const { 	ID_UTILISATEUR  } = req.params;
  await Utilisateurs.destroy({
    where: {
      	ID_UTILISATEUR : 	ID_UTILISATEUR ,
    },
  });
  res.status(200).json({
    message: "Votre utisateur a étée supprimé avec succès",
  });
} catch (error) {
  console.log(error);
  res.status(500).send("Erreur interne du serveur");
}
};

module.exports = {
findAll_utisateur,
update_utisateur,
delete_utisateur,
create_utisateur,
getOne_utisateur, 
is_active_utisateur
};



