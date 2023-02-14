require('dotenv').config()
const OpenAI = require('openai-api');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generate(prompt) {
    const gptResponse = await openai.complete({
        engine: 'text-davinci-003',
        prompt: prompt,
        temperature: 0,
        maxTokens: 1024,
    });
    return gptResponse;
}

async function main() {
    let prompt = "What is a galaxy?";
    let result = await generate(prompt);
    console.log(result.data.choices[0].text);
}

main();