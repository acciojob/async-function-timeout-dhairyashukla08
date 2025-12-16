const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

function delayPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessageWithDelay() {

    const textValue = textInput.value;
    const delayValue = parseInt(delayInput.value, 10);

    if (!textValue || isNaN(delayValue) || delayValue <= 0) {
        outputDiv.textContent = "Please enter valid text and a positive delay.";
        return;
    }

   outputDiv.textContent = ""; 
    submitButton.disabled = true;

    try {
        await delayPromise(delayValue);
        outputDiv.textContent = textValue;
    } catch (error) {

        outputDiv.textContent = `An error occurred: ${error.message}`;
    } finally {
        submitButton.disabled = false;
    }
}

submitButton.addEventListener('click', displayMessageWithDelay);