//controller pour la Gestion des itineraire
const jwt = require("jsonwebtoken");
const Validation = require("../class/Validation,js");
const path = require("path");
const bcrypt = require("bcrypt");
const RESPONSE_CODES= require("../constants/RESPONSE_CODES");
const RESPONSE_STATUS= require("../constants/RESPONSE_STATUS");
const { ConnectionError } = require("sequelize");
const Itineraire = require("../models/Itineraires");



//fonction pour afficher tous les itineraires
const findAll_itineraire = async (req, res) => {
    try {
      const result = await Itineraire.findAll();
      res.status(RESPONSE_CODES.OK).json({
        statusCode: RESPONSE_CODES.OK,
        httpStatus: RESPONSE_STATUS.OK,
        message: "Liste des itineraires",
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
//fonction pour creer une itenaire
const create_itineraire = async (req, res) => {
    try {
      const {ITENAIRE_DESCR } = req.body; 
  
      const itineraire_create = await Itineraire.create({
        ITENAIRE_DESCR:ITENAIRE_DESCR,      
      });
  
      res.status(RESPONSE_CODES.CREATED).json({
        statusCode: RESPONSE_CODES.CREATED,
        httpStatus: RESPONSE_STATUS.CREATED,
        message: "Votre itineraire a été crée avec succes",
        result: itineraire_create,
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
  //fonction pour afficher une seule itineraire
const getOne_itineraire = async (req, res) => {
    try {
      const { ID_ITINERAIRE   } = req.params;
      const itineraire_get_one = await Itineraire.findOne({
        where: {
          ID_ITINERAIRE  ,
        },
  
      });
      if (itineraire_get_one) {
        res.status(RESPONSE_CODES.OK).json({
          statusCode: RESPONSE_CODES.OK,
          httpStatus: RESPONSE_STATUS.OK,
          message: "Itineraire trouvée",
          result: stages,
        });
      } else {
        res.status(RESPONSE_CODES.NOT_FOUND).json({
          statusCode: RESPONSE_CODES.NOT_FOUND,
          httpStatus: RESPONSE_STATUS.NOT_FOUND,
          message: "Itineraire non trouvée",
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
  
  

//fonction pour faire la mise a jour de l'itineraire
const update_itineraire = async (req, res) => {
  try {
    const { ID_ITINERAIRE  } = req.params;
    const {ITENAIRE_DESCR } = req.body;
    await Itineraire.update(
      {
        ITENAIRE_DESCR: ITENAIRE_DESCR,      
      },
      {
        where: {
          ID_ITINERAIRE: ID_ITINERAIRE,
        },
      }
    );
    res.status(200).json({
      message: "Itineraire modifié avec succès",
      data: {
        ITENAIRE_DESCR,
      
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};
//fonction pour supprimer une itineraire
const delete_itineraire = async (req, res) => {
  try {
    const { ID_ITINERAIRE  } = req.params;
    await Itineraire.destroy({
      where: {
        ID_ITINERAIRE : ID_ITINERAIRE ,
      },
    });
    res.status(200).json({
      message: "Votre Itineraire a été supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur interne du serveur");
  }
};

module.exports = {
  findAll_itineraire,
  update_itineraire,
  delete_itineraire,
  create_itineraire,
  getOne_itineraire, 
};
