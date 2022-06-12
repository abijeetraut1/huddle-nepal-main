const express = require("express");
const navController = require("./../controllers/navController");
const eventRegister = require("../controllers/eventRegisterController");
const router = express.Router({mergeParams: true});


router.route("/").get(navController.home);

router.route("/how-we-work").get(navController.how_we_work);

router.route("/event-listening").get(navController.event_listening);

router.route("/contact").get(navController.contact);

router.route("/register").post(eventRegister.register);

router.route("/event/:slug").get(navController.getEventData)

module.exports = router;
