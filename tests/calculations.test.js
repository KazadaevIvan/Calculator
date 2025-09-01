const mainPage = require('../pages/main.page');
const values = require('../data/values.data.json');
const assert = require('chai').assert;

describe('Calculations', () => {
    context('Results validation', () => {
        values.forEach((data) => {

            it(`Addition of ${data.firstNumber} and ${data.secondNumber} should be equal to ${data.additionResult}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Add');
                await mainPage.clickCalculateButton();
                const answer = await mainPage.getAnswer();
                assert.equal(answer, data.additionResult, `Result should be ${data.additionResult}`);
            });

            it(`Subtraction of ${data.firstNumber} and ${data.secondNumber} should be equal to ${data.subtractionResult}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Subtract');
                await mainPage.clickCalculateButton();
                const answer = await mainPage.getAnswer();
                assert.equal(answer, data.subtractionResult, `Result should be ${data.subtractionResult}`);
            });

            it(`Multiplication of ${data.firstNumber} and ${data.secondNumber} should be equal to ${data.multiplicationResult}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Multiply');
                await mainPage.clickCalculateButton();
                const answer = await mainPage.getAnswer();
                assert.equal(answer, data.multiplicationResult, `Result should be ${data.multiplicationResult}`);
            });

            it(`Division of ${data.firstNumber} and ${data.secondNumber} should be equal to ${data.divisionResult}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Divide');
                await mainPage.clickCalculateButton();
                const answer = await mainPage.getAnswer();
                assert.equal(answer, data.divisionResult, `Result should be ${data.divisionResult}`);
            });

            it(`Concatenation of ${data.firstNumber} and ${data.secondNumber} should be equal to ${data.concatenationResult}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Concatenate');
                await mainPage.clickCalculateButton();
                const answer = await mainPage.getAnswer();
                assert.equal(answer, data.concatenationResult, `Result should be ${data.concatenationResult}`);
            });

        });
    });
});
