import assChoices from './quest/ass-choices.js';
import childrenChoices from './quest/children-choices.js';
import foodChoices from './quest/food-choices.js';

const ass = {
    id: 'ass',
    title: 'Enter the As-Is Section',
    description: 'You have entered the deepest, darkest corner of IKEA... The As-Is section. You are overwhelmed with possibilities! Do you...',
    choices: assChoices,
    image: 'assets/ass.jpg'
};

const children = {
    id: 'children',
    title: 'Brave SMALAND',
    description: 'Your offspring (surprise, you are a parent) is refusing to leave Smaland. You watch them run into the distance. Do you...',
    choices: childrenChoices,
    image: 'assets/children.jpg'


};

const food = {
    id: 'food',
    title: 'Get Some Meatballs',
    description: 'You enter the food court, the lines are impossibly long. The TV screen flashes something delicious... It\'s meatballs. Do you...',
    choices: foodChoices,
    image: 'assets/meatballs.jpg'

};

const questChoices = [ass, children, food]; 

export default questChoices;