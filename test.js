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
    let prompt = "Which phone brand is the most popular?";
    let result = await generate(prompt);
    result = result.data.choices[0].text;
    result = result.replace(/\n/g, '');
    console.log(result);
}

main();