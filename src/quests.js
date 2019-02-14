const assChoice1 = {
    description: 'Run away screaming.',
    hp: 0,
    gold: 0
};

const assChoice2 = {
    description: 'Answer the DIY call of mismatched furniture parts.',
    hp: 0,
    gold: 0
};

const assChoice3 = {
    description: 'Curl up for a nap on the couch with the mystery stain...',
    hp: 0,
    gold: 0
};

const assChoices = [assChoice1, assChoice2, assChoice3];

const ass = {
    id: 'ass',
    title: 'Enter the As-Is Section',
    description: 'You have entered the deepest, darkest corner of IKEA... The As-Is section. You are overwhelmed with possibilities! Do you...',
    choices: assChoices
};

const children = {
    id: 'children',
    title: 'Brave SMALLAND',
    description: 'Your offspring (surprise, you are a parent) is refusing to leave Smaland. You watch them run into the distance. Do you...'
};

const food = {
    id: 'food',
    title: 'Get Some Meatballs',
    description: 'You enter the food court, the lines are impossibly long. The TV screen flashes something delicious... It\'s meatballs. Do you...'
};

const questChoices = [ass, children, food]; 


export default questChoices;