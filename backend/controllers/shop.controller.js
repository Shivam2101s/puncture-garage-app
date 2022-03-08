const express = require("express");

const Shop = require("../models/shop.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    let shop = await Shop.create(req.body);

    return res.status(201).send({ shop });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let shop = await Shop.findById(req.params.id)
      .lean()
      .exec();

    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

//-------All data  and filter API-----------

//`http://localhost:4500/shop`

router.get("", async (req, res) => {
  try {
    let shops = await Shop.find().lean().exec();

    return res.status(201).send(shops);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

//`http://localhost:4500/location/:location`

router.get("/location/:location", async (req, res) => {
  try {
    let shops = await Shop.find({location: req.params.location}).lean().exec();

    return res.status(201).send(shops);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

//`http://localhost:4500/rating/:rating`

router.get("/rating/:rating", async (req, res) => {
  try {
    let shops = await Shop.find({rating: req.params.rating}).lean().exec();

    return res.status(201).send(shops);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});
//`http://localhost:4500/payment/:payment`

router.get("/payment/:payment", async (req, res) => {
  try {
    let shops = await Shop.find({payment: req.params.payment}).lean().exec();

    return res.status(201).send(shops);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});
//`http://localhost:4500/discount/:discount`

router.get("/discount/:discount", async (req, res) => {
  try {
    let shops = await Shop.find({discount: req.params.discount}).lean().exec();

    return res.status(201).send(shops);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

module.exports = router;
