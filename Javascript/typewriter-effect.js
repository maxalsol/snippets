//? typrewriter-effect
// makes it look like text is typed
// npm install typewriter-effect

// for rosenbachter.de

let typewriter = 'typewriter-effect';

const typed = document.getElementById('typed');

typewriter = new Typewriter(typed, {
    loop: true,
    cursor: '|',
    delay: 75
});

typewriter
    .pauseFor(500)
    .typeString('Blasmusik')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('guten Laune')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('Geselligkeit')
    .pauseFor(1000)
    .start();
