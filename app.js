const getAdvice = async () => {
    try {
        const result = await axios.get('https://api.adviceslip.com/advice');
        const adviceId = result.data.slip.id;
        const advice = result.data.slip.advice;
        document.querySelector('#advice-id').innerText = adviceId;
        document.querySelector('#advice').innerText = `"${advice}"`;
    } catch (e) {
        alert(`I'm sorry, you have reached the following error: ${e}`);
    }
}

getAdvice();

const diceButton = document.querySelector('#dice-btn');
diceButton.addEventListener('click', getAdvice);