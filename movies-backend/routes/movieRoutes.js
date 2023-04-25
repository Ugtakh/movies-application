"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var moviesController_1 = require("../controllers/moviesController");
var router = (0, express_1.Router)();
router.route("/").get(moviesController_1.getMovies);
router.route("/:id").get(moviesController_1.getMovie);
exports.default = router;
