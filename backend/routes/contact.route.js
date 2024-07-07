import express from "express";
const route = express.Router();
import contactController from "../controllers/contact.controllers.js";
route.post("/contact-us", contactController);
export default route;
