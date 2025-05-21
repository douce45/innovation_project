//controller pour la Gestion des justifications
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Justifications = require("../models/Justifications");



//fonction pour afficher tous les justifications
const findAll_justification = async (req, res) => {
    try {
      const result = await Justifications.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des justifications",
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
//fonction pour creer une justification
const create_justification = async (req, res) => {
    try {
      const {PROFIL_DESCR } = req.body;
  
  
      const justification_create = await Justifications.create({
        PROFIL_DESCR:PROFIL_DESCR,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre justification a été crée avec succes",
        result: justification_create,
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
  //fonction pour afficher une seule justification
const getOne_justification = async (req, res) => {
    try {
      const { ID_PROFIL   } = req.params;
      const justification_get_one = await Justifications.findOne({
        where: {
          ID_PROFIL  ,
        },
  
      });
      if (justification_get_one) {
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
  
  

//fonction pour faire la mise a jour du justification
const update_justification = async (req, res) => {
  try {
    const { ID_PROFIL  } = req.params;
    const {PROFIL_DESCR } = req.body;
    await Justifications.update(
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
//fonction pour supprimer une justification
const delete_justification = async (req, res) => {
  try {
    const { ID_PROFIL  } = req.params;
    await Justifications.destroy({
      where: {
        ID_PROFIL : ID_PROFIL ,
      },
    });
    res.status(200).json({
      message: "Votre justification a été supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};

module.exports = {
  findAll_justification,
  update_justification,
  delete_justification,
  create_justification,
  getOne_justification, 
};
