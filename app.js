const getAdvice = async () => {
    const result = await axios.get('https://api.adviceslip.com/advice');
    const adviceId = result.data.slip.id;
    const advice = result.data.slip.advice;
    document.querySelector('#advice-id').innerText = adviceId;
    document.querySelector('#advice').innerText = `"${advice}"`;
}

getAdvice();

const diceButton = document.querySelector('#dice-btn');
diceButton.addEventListener('click', getAdvice);