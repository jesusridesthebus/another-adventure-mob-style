import questChoices from '../quests.js';
console.log(questChoices);

const searchParams = new URLSearchParams(window.location.search);

const questToFind = searchParams.get('id');
const titleDisplay = document.getElementById('title');
const descDisplay = document.getElementById('quest-description');
const choiceDisplay = document.getElementById('quest-choices');
const imageDisplay = document.getElementById('quest-image');
const choiceForm = document.getElementById('choice-form');
const formData = new FormData(choiceForm);

for(let i = 0; i < questChoices.length; i++) {
    const currentChoice = questChoices[i];
    if(currentChoice.id === questToFind) {
        titleDisplay.textContent = currentChoice.title;
        imageDisplay.src = currentChoice.image;
        descDisplay.textContent = currentChoice.description;
        for(let j = 0; j < currentChoice.choices.length; j++) {
            const userChoice = currentChoice.choices[j];
            const input = document.createElement('input');
            const label = document.createElement('label');
            
            choiceDisplay.appendChild(input);
            choiceDisplay.appendChild(label);
            input.type = 'radio';
            input.name = 'choice';
            input.value = userChoice.value;
            label.textContent = userChoice.description;
        }
    }
}

choiceForm.addEventListener('submit', function(event){
    event.preventDefault();


});
