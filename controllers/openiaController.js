const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const callHuggingFaceAPI = require("../helper/huggingFaceApiHelper")

exports.summaryController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: `Summarize this \n${text}`,
  //     max_tokens: 500,
  //     temperature: 0.5,
  //   });
  //   if (data) {
  //     if (data.choices[0].text) {
  //       return res.status(200).json(data.choices[0].text);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).json({
  //     message: err.message,
  //   });
  // }
  try {
    const { text } = req.body;
    const data = await callHuggingFaceAPI("facebook/bart-large-cnn", text);
    return res.status(200).json(data[0].summary_text);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
exports.paragraphController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: `write a detail paragraph about \n${text}`,
  //     max_tokens: 500,
  //     temperature: 0.5,
  //   });
  //   if (data) {
  //     if (data.choices[0].text) {
  //       return res.status(200).json(data.choices[0].text);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).json({
  //     message: err.message,
  //   });
  // }

  try {
    const { text } = req.body;
    const data = await callHuggingFaceAPI("gpt2", text);
    return res.status(200).json(data[0].generated_text);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
exports.chatbotController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: `Answer question similar to how yoda from star war would.
  //     Me: 'what is your name?'
  //     yoda: 'yoda is my name'
  //     Me: ${text}`,
  //     max_tokens: 300,
  //     temperature: 0.7,
  //   });
  //   if (data) {
  //     if (data.choices[0].text) {
  //       return res.status(200).json(data.choices[0].text);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).json({
  //     message: err.message,
  //   });
  // }
  try {
    let { text } = req.body;
    // text = {
    //   prompt: `Answer question similar to how yoda from star war would.
    //      Me: 'what is your name?'
    //     yoda: 'yoda is my name'
    //       Me: ${text}`,
    // };
    const data = await callHuggingFaceAPI("microsoft/DialoGPT-small", text);
    return res.status(200).json(data[0].generated_text);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
exports.jsconverterController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createCompletion({
  //     model: "gpt-4o-mini",
  //     prompt: `/* convert these instruction into javascript code \n${text}`,
  //     max_tokens: 400,
  //     temperature: 0.25,
  //   });
  //   if (data) {
  //     if (data.choices[0].text) {
  //       return res.status(200).json(data.choices[0].text);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).json({
  //     message: err.message,
  //   });
  // }
  try {
    const { text } = req.body; // The input prompt like 'create a function that reverses a string'
    const prompt = `/* convert these instructions into JavaScript code:\n${text}\n*/`;
    
    const data = await callHuggingFaceAPI('EleutherAI/gpt-neo-2.7B',prompt);

    if (data && data[0]?.generated_text) {
      return res.status(200).json({ code: data[0].generated_text });
    } else {
      return res.status(500).json({ message: 'No code generated from model' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.scifiImageController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createImage({
  //     prompt: `generate a scifi image of ${text}`,
  //     n: 1,
  //     size: "512x512",
  //   });
  //   if (data) {
  //     if (data.data[0].url) {
  //       return res.status(200).json(data.data[0].url);
  //     }
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(404).json({
  //     message: err.message,
  //   });
  // }

  try {
    const { text } = req.body;
    const data = await callHuggingFaceAPI("CompVis/stable-diffusion-v1-4", text);
    return res.status(200).json(data.generated_images[0]);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
