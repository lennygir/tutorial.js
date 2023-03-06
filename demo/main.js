import { Tutorialjs } from '../dist/index.js'

let tutorial = new Tutorialjs([
    { element: '#search-input', comment: 'This is a search input', option: {position: 'bottom', gap: 50} },
    { element: document.querySelector('#second-card'), comment: 'This is a card', option: {position: 'right'} },
    { element: '#navbar', comment: 'This is a navbar', option: {position: 'sedgsdg'} },
    { element: '#third-card', comment: 'This is another card', option: {position: 'top'} },
    { element: '#first-card', comment: 'This is the first card', option: {position: 'left'} }
], {
    nextButtonLabel: 'Get me to the next hint ;)',
    previousButtonLabel: 'Wait what ?',
    backgroundColor: '#000000',
    backgroundOpacity: 0.8,
    textColor: '#FFFFFF',
    textOpacity: 0.8,
});

document.querySelector('#start-tutorial').addEventListener('click', () => {
    tutorial.start();
});