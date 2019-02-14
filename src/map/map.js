import questChoices from '../quests.js';

const questLink = document.getElementById('quest-choices');

for(let i = 0; i < questChoices.length; i++) {
    const choice = questChoices[i];
    const li = document.createElement('li');
    questLink.appendChild(li);
    
    const a = document.createElement('a');
    li.appendChild(a);
    a.textContent = choice.title;

    a.href = 'quest.html?id=' + encodeURIComponent(choice.id);
}