const mainPage = require('../pages/main.page');
const errorMessages = require('../data/errorMessages.data.json');
const assert = require('chai').assert;

describe('Errors', () => {
    context('Error message validation', () => {
        errorMessages.forEach((data) => {
            it(`When divide ${data.firstNumber} by ${data.secondNumber} error message should appear and say "${data.errorMessage}"`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(data.firstNumber);
                await mainPage.setSecondNumber(data.secondNumber);
                await mainPage.chooseOperation('Divide');
                await mainPage.clickCalculateButton();

                const actualMessage = await mainPage.getErrorMessageText();
                assert.equal(actualMessage, data.errorMessage, `Expected error message to be "${data.errorMessage}"`);
            });
        });
    });
});
