const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route

/**
 * @swagger
 * components:
 *   schemas:
 *     TextInput:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 *           description: Text input for the request
 *       example:
 *         text: "This is a sample text input"
 */




/**
 * @swagger
 * /summary:
 *   post:
 *     summary: Generate a summary of the provided text
 *     tags: [OpenAI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TextInput'
 *     responses:
 *       200:
 *         description: Summary generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "This is the summarized text."
 *       404:
 *         description: Error in generating summary
 */
router.post("/summary", summaryController);



/**
 * @swagger
 * /paragraph:
 *   post:
 *     summary: Generate a paragraph from the provided text
 *     tags: [OpenAI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TextInput'
 *     responses:
 *       200:
 *         description: Paragraph generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "This is a detailed paragraph."
 *       404:
 *         description: Error in generating paragraph
 */
router.post("/paragraph", paragraphController);



/**
 * @swagger
 * /chatbot:
 *   post:
 *     summary: Get a chatbot-style response based on input text
 *     tags: [OpenAI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TextInput'
 *     responses:
 *       200:
 *         description: Chatbot response generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Chatbot response text."
 *       404:
 *         description: Error in generating chatbot response
 */
router.post("/chatbot", chatbotController);



/**
 * @swagger
 * /js-converter:
 *   post:
 *     summary: Convert natural language instructions into JavaScript code
 *     tags: [OpenAI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TextInput'
 *     responses:
 *       200:
 *         description: JavaScript code generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "function reverseString(str) { return str.split('').reverse().join(''); }"
 *       500:
 *         description: Error in generating JavaScript code
 */
router.post("/js-converter", jsconverterController);




/**
 * @swagger
 * /scifi-image:
 *   post:
 *     summary: Generate a sci-fi image based on the input text
 *     tags: [OpenAI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TextInput'
 *     responses:
 *       200:
 *         description: Sci-fi image generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "https://image.url/sci-fi-image.png"
 *       404:
 *         description: Error in generating sci-fi image
 */
router.post("/scifi-image", scifiImageController);

module.exports = router;
