import questChoices from '../quests.js';
import assChoices from './ass-choices.js';
import childrenChoices from './children-choices.js';
import foodChoices from './food-choices.js';

const searchParams = new URLSearchParams(window.location.search);

const questToFind = searchParams.get('id');
const titleDisplay = document.getElementById('title');
const descDisplay = document.getElementById('quest-description');
const choiceDisplay = document.getElementById('quest-choices');
const imageDisplay = document.getElementById('quest-image');
const choiceForm = document.getElementById('choice-form');

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

const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const chosenAction = formData.get('choice');

    let selected = null;
    if(chosenAction.includes('ass')) {
        selected = assChoices;
    }
    if(chosenAction.includes('children')) {
        selected = childrenChoices;
    }
    if(chosenAction.includes('food')) {
        selected = foodChoices;
    }
    
    for(let i = 0; i < selected.length; i++) {
        const currentChoice = selected[i];
        if(chosenAction === currentChoice.value) {
            userInfo.hp += currentChoice.hp;
            userInfo.gold += currentChoice.gold;
            const serialize = JSON.stringify(userInfo);
            window.localStorage.setItem('userInfo', serialize);
        }
    }
    
    window.location = 'map.html';
});
