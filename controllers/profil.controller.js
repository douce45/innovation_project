//controller pour la Gestion des profils
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Profils = require("../models/Profils");



//fonction pour afficher tous les profils
const findAll_profil = async (req, res) => {
    try {
      const result = await Profils.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des profils",
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
//fonction pour creer une profil
const create_profil = async (req, res) => {
    try {
      const {PROFIL_DESCR } = req.body;
  
  
      const profil_create = await Profils.create({
        PROFIL_DESCR:PROFIL_DESCR,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre profil a été crée avec succes",
        result: profil_create,
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
  //fonction pour afficher une seule profil
const getOne_profil = async (req, res) => {
    try {
      const { ID_PROFIL   } = req.params;
      const profil_get_one = await Profils.findOne({
        where: {
          ID_PROFIL  ,
        },
  
      });
      if (profil_get_one) {
        res.status(RESPONSE_CODES.OK).json({
          statusCode: RESPONSE_CODES.OK,
          httpStatus: RESPONSE_STATUS.OK,
          message: "Dépense trouvée",
          result: stages,
        });
      } else {
        res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Profil non trouvée",
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
  
  

//fonction pour faire la mise a jour du profil
const update_profil = async (req, res) => {
  try {
    const { ID_PROFIL  } = req.params;
    const {PROFIL_DESCR } = req.body;
    await Profils.update(
      {
        PROFIL_DESCR: PROFIL_DESCR,      
      },
      {
        where: {
          ID_PROFIL: ID_PROFIL,
        },
      }
    );
    res.status(200).json({
      message: "Profil modifié avec succès",
      data: {
        PROFIL_DESCR,
      
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
//fonction pour supprimer une profil
const delete_profil = async (req, res) => {
  try {
    const { ID_PROFIL  } = req.params;
    await Profils.destroy({
      where: {
        ID_PROFIL : ID_PROFIL ,
      },
    });
    res.status(200).json({
      message: "Votre profil a été supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};

module.exports = {
  findAll_profil,
  update_profil,
  delete_profil,
  create_profil,
  getOne_profil, 
};
