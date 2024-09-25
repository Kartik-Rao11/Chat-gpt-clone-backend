const callHuggingFaceAPI = async (model, inputs) => {
    try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` },
            method: "POST",
            body: JSON.stringify({ inputs }),
        });
        return await response.json();
        // console.log(res);
        // const data = JSON.parse(res);
        // return data;
    } catch (err) {
        console.error("Error calling Hugging Face API:", err);
        throw err;
    }
};

module.exports = callHuggingFaceAPI;