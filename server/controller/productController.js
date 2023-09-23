import { json } from "express";
import { AdForRent, AdForSale } from "../models/productModel.js";

export const createAdForSale = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  let productImg = [];
  const {
    userId,
    title,
    videoLink,
    propertyType,
    category,
    description,
    city,
    price,
    rooms,
    surfaceArea,
    paths,
    floor,
    buildingAge,
    listerType,
    paymentMethod,
    furnished,
    mortgaged,
  
   
  } = JSON.parse(req.body.ads);

  req.files &&
    req.files.proImg.map(
      (file, index) => (productImg = [...productImg, file.filename])
    );

  try {
    if (
      title &&
       userId &&
      videoLink &&
      propertyType &&
      category &&
      description &&
      city &&
      price &&
      rooms &&
      surfaceArea &&
      paths &&
      floor &&
      buildingAge &&
      listerType &&
      paymentMethod &&
      furnished &&
      mortgaged &&
      req.files
    ) {
      console.log("hdgggggggggggggggffffffffffffffffffffff");
      await AdForSale.create({
        userId:userId,
        title: title,
        videoLink: videoLink,
        propertyType: propertyType,
        category: category,
        description: description,
        city: city,
        price: price,
        rooms: rooms,
        surfaceArea: surfaceArea,
        paths: paths,
        floor: floor,
        buildingAge: buildingAge,
        listerType: listerType,
        paymentMethod: paymentMethod,
        furnished: furnished,
        mortgaged: mortgaged,
        projectedBy: req.files.logo[0].filename,
        images: productImg,
      });
      const allAds = await AdForSale.find();

      res.json(allAds);
    } else {
      res.json({ body: req.body.ads, productImg });
    }
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createAdForRent = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  let productImg = [];
  const {
    title,
    userId,
    videoLink,
    propertyType,
    category,
    description,
    city,
    price,
    rooms,
    surfaceArea,
    paths,
    floor,
    buildingAge,
    listerType,
    paymentMethod,
    furnished,
    mortgaged,
    projectedBy,
    unitDetails,
  } = JSON.parse(req.body.ads);
  req.files &&
    req.files.proImg.map(
      (file, index) => (productImg = [...productImg, file.filename])
    );

  try {
    if (
      title &&
      userId,
      videoLink &&
      propertyType &&
      category &&
      description &&
      city &&
      price &&
      rooms &&
      surfaceArea &&
      paths &&
      floor &&
      buildingAge &&
      listerType &&
      paymentMethod &&
      furnished &&
      mortgaged &&
      unitDetails &&
      req.files
    ) {
      console.log("hdgggggggggggggggffffffffffffffffffffff");
      await AdForRent.create({
        title: title,
        userId:userId,
        videoLink: videoLink,
        propertyType: propertyType,
        category: category,
        description: description,
        city: city,
        price: price,
        rooms: rooms,
        surfaceArea: surfaceArea,
        paths: paths,
        floor: floor,
        buildingAge: buildingAge,
        listerType: listerType,
        paymentMethod: paymentMethod,
        furnished: furnished,
        mortgaged: mortgaged,
        projectedBy: req.files.logo[0].filename,
        images: productImg,
        unitDetails: unitDetails,
      });
      const allAds = await AdForRent.find();

      res.json(allAds);
    } else {
      res.json({ body: JSON.parse(req.body.ads), productImg });
    }
  } catch (error) {
    console.log(error);
  }
};
