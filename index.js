const nodeCron = require('node-cron');
const express = require('express');

app = express();

nodeCron.schedule("* * * * * *", () => console.log("Running task every second ⏱️"));
nodeCron.schedule("* * * * *", () => console.log("Running task every minute ⌚"));
nodeCron.schedule("0 * * * *", () => console.log("Running task every hour ⌚"));
nodeCron.schedule("* 0 * * *", () => console.log("Running task every day 📆"));
nodeCron.schedule("* * * * 0", () => console.log("Running task every week 🗓️"));
nodeCron.schedule("0 0 1 * *", () => console.log("Running task every month 🗓️"));
nodeCron.schedule("0 0 1 1 *", () => console.log("Running task every year 🗓️"));

nodeCron.schedule("0 0 25 12 *", () => console.log("Merry Christmas 🎄🎅"));

nodeCron.schedule("0 0 1 1 *", () => console.log("Happy new year 🎆"));

nodeCron.schedule("0 7 * * 1,2,3,4,5", () => console.log("Go to school 🏫"));
nodeCron.schedule("0 12 * * 1,2,3,4,5", () => console.log("Go to home 🏠"));

nodeCron.schedule("0 10 * * 1,2,3,4,5", () => console.log("B3 - Brazilian stock exchange opening 🐂📈"));
nodeCron.schedule("0 18 * * 1,2,3,4,5", () => console.log("B3 - Brazilian stock exchange closing 🐂📈"));

app.listen(3000, () => {
    console.log("Aplication started");
});