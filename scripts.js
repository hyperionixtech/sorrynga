let currentQuestion = 0;

const questions = [
    "Sorrynga thriyama pannitan?",
    "Neejama romba sorrynga?",
    "Manipu kekuravan manusan, manikiravanga periya manusan"
];

const questionElement = document.getElementById('question');
const manikamatanButton = document.getElementById('manikamatan');
const finalMessage = document.getElementById('final-message');

function nextQuestion(answer) {
    if (answer === 'seri') {
        questionElement.innerHTML = "Neenga periya manusan tha. Nalaki samosa 😁 vangi tharan.";
        document.querySelector('.buttons').style.display = 'none';
        finalMessage.style.display = 'block';
    } else if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        questionElement.innerHTML = questions[currentQuestion];
        if (currentQuestion === questions.length - 1) {
            manikamatanButton.addEventListener('mouseover', moveButton);
        }
    }
}

function moveButton() {
    const x = Math.floor(Math.random() * (window.innerWidth - manikamatanButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - manikamatanButton.clientHeight));
    manikamatanButton.style.position = 'absolute';
    manikamatanButton.style.left = `${x}px`;
    manikamatanButton.style.top = `${y}px`;
}
