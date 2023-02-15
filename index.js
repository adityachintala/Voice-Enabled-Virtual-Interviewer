const dataInsertion = require("./dataInsertion.js");
const generateData = require("./generator.js");

const readline = require("readline");
// take input from user
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter topics, each separated by comma without spaces : ', (answer) => {
        let topics = answer.split(/[\s*,*\s*,*]/g);
        topics = topics.filter(function (el) {
            return el != "";
        });
        main(topics);
        rl.close();
    });
}

async function exit() {
    try {
        process.exit(0);
    } catch (err) { console.log(err); }
}

async function main(topics) {
    try {
        let t1 = new Date().getTime();
        for (let topic of topics) {
            console.log("\n--------------------------------------------");
            let jsonData = await generateData(topic);
            await dataInsertion(jsonData);
            console.log("--------------------------------------------\n");
        }
        console.log("\nWhole process took : " + ((new Date().getTime() - t1) / 1000) / 60 + "min to complete!");
        await exit();
    } catch (error) {
        console.log(error);
    }
}

// football, laptop, metals, food, education