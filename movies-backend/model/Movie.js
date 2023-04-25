"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var movieSchema = new mongoose_1.Schema({});
var movie = (0, mongoose_1.model)("Movie", movieSchema);
exports.default = movie;
