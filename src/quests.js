const assChoice1 = {
    description: 'Run away screaming.',
    hp: 50,
    gold: 5
};

const assChoice2 = {
    description: 'Answer the DIY call of mismatched furniture parts.',
    hp: -5,
    gold: -50
};

const assChoice3 = {
    description: 'Curl up for a nap on the couch with the mystery stain...',
    hp: -50,
    gold: 0
};

const assChoices = [assChoice1, assChoice2, assChoice3];

const childrenChoice1 = {
    description: 'Jump over the counter to apprehend your child.',
    hp: -5,
    gold: -25
};

const childrenChoice2 = {
    description: 'If you love them, let them go...',
    hp: 100,
    gold: 100
};

const childrenChoice3 = {
    description: 'SMALAND attendant accuses you of attempted kidnapping, you dramatically defend yourself',
    hp: 12,
    gold: -100
};

const childrenChoices = [childrenChoice1, childrenChoice2, childrenChoice3];

const foodChoice1 = {
    description: 'Commit to waiting in line, no matter how long it takes, for the vegan meatballs.',
    hp: -100,
    gold: -10
};

const foodChoice2 = {
    description: 'Tempted by a hotdog, you decide to head downstairs to the snack bar.',
    hp: 25,
    gold: -5
};

const foodChoice3 = {
    description: 'Steal meatballs from a distracted parent.',
    hp: 50,
    gold: 50
};

const foodChoices = [foodChoice1, foodChoice2, foodChoice3];

const ass = {
    id: 'ass',
    title: 'Enter the As-Is Section',
    description: 'You have entered the deepest, darkest corner of IKEA... The As-Is section. You are overwhelmed with possibilities! Do you...',
    choices: assChoices
};

const children = {
    id: 'children',
    title: 'Brave SMALLAND',
    description: 'Your offspring (surprise, you are a parent) is refusing to leave Smaland. You watch them run into the distance. Do you...',
    choices: childrenChoices
};

const food = {
    id: 'food',
    title: 'Get Some Meatballs',
    description: 'You enter the food court, the lines are impossibly long. The TV screen flashes something delicious... It\'s meatballs. Do you...',
    choices: foodChoices
};

const questChoices = [ass, children, food]; 



export default questChoices;