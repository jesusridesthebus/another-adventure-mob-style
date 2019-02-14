import questChoices from '../quests.js';
console.log(questChoices);

const searchParams = new URLSearchParams(window.location.search);

const questToFind = searchParams.get('id');
const titleDisplay = document.getElementById('title');
const descDisplay = document.getElementById('quest-description');

for(let i = 0; i < questChoices.length; i++) {
    const currentChoice = questChoices[i];
    if(currentChoice.id === questToFind) {
        titleDisplay.textContent = currentChoice.title;
        descDisplay.textContent = currentChoice.description;
    }
}

