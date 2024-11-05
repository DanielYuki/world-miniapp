// routes/lessons.js
const express = require("express");
const { createLesson, listLessons, listLessonsByUserId, findLessonById, addMessageToLesson } = require("../controllers/lessonController");

const router = express.Router();

router.post("/", createLesson);
router.get("/", listLessons);
router.post("/user", listLessonsByUserId);
router.get("/:id", findLessonById);
router.post("/:id", addMessageToLesson);

module.exports = router;
