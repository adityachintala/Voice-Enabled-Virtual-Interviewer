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

// Topic Input
let topic = "Mathematics";

const { writeFile } = require('fs');
const { readFileSync } = require('fs');
const { createInterface } = require('readline');

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the topic for which you want to generate questions: ', (input) => {
    rl.close();
    console.log();
    topic = input;
    main();
});


// Input your desired topic for which 10 questions will be generated and then store them in a JSON file
// 3 Different variations of each question will be then generated
// Each variation also will be stored in the same JSON file
// All the answers will be generated using GPT-3 and then stored in the same JSON file


async function createQuestion(topic) {
    console.log(`Generating questions for '${topic}'...`);
    let t1 = new Date().getTime();
    let prompt = `Ask 10 easy level questions on ${topic}. Each question should start in a new line and end with a question mark without any numbering.`;
    let questions = [];
    await generate(prompt).then((res) => {
        questions = res.data.choices[0].text.split("\n");
        // remove empty strings
        questions = questions.filter(function (el) {
            return el != "";
        });
    });
    console.log("Questions generated successfully in " + ((new Date().getTime() - t1)/1000).toPrecision(2) +"sec !\n");
    return questions;
}

async function createVariations(questions) {
    console.log("Generating variations for each question...");
    let t1 = new Date().getTime();
    let variations = {};
    for (let i = 0; i < questions.length; i++) {
        prompt = `Give 3 different variations of the below question:\n${questions[i]}\nEach variation should start in a new line and end with a question mark without any numbering.`;

        await generate(prompt).then((res) => {
            let result = res.data.choices[0].text.split("\n");

            // remove empty strings
            result = result.filter(function (el) {
                return el != "";
            });

            variations[questions[i]] = result;
        });
    }
    console.log("Variations generated successfully in " + ((new Date().getTime() - t1)/1000).toPrecision(2) +"sec !\n");
    return variations;
}

async function writeToFile(fileName, obj) {
    setTimeout(() => {
        console.log("Writing to file...");
        writeFile(fileName, JSON.stringify(obj), function (err) {
            if (err) throw err;
            console.log('Saved ' + fileName + '!\n');
        });
    }, 60000);
}

/* Answers format : 
{
    "topic_name" : {
        "question1" : {
            "variation1" : "answer1",
            "variation2" : "answer2",
            "variation3" : "answer3"
        },
        "question2" : {
            "variation1" : "answer1",
            "variation2" : "answer2",
            "variation3" : "answer3"
        },
        .....
    }
}

And finally we have to write the above JSON to a object file

*/

async function createAnswers(variations) {
    console.log("Generating answers for each variation...");
    let t1 = new Date().getTime();
    let answers = {};
    for (let question in variations) {
        answers[question] = {};
        for (let i = 0; i < variations[question].length; i++) {
            await generate(variations[question][i]).then((res) => {
                // strip the answer and store in a proper manner
                answers[question][variations[question][i]] = res.data.choices[0].text.replace(/\n/g, "");
            });
        }
    }
    console.log("Answers generated successfully in " + ((new Date().getTime() - t1) / 1000) / 60 + "min !");
    answers = { topic : answers };
    return answers;
}

async function readFromFile(fileName) {
    // the file is JSON, so we need to parse it
    let obj = JSON.parse(readFileSync(fileName));
    return obj;
}

async function main() {
    // write a synchronous function using .then to create questions and then variations
    let questions = await createQuestion(topic);
    await writeToFile("questions.json", questions);
    let variations = await createVariations(questions);
    await writeToFile("variations.json", variations);
    let answers = await createAnswers(variations);
    await writeToFile("answers.json", answers);
}