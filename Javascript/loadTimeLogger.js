//? Load Time Logger
// loggs loading time of html from start to finish

const startTime = new Date();

function logWithTime(message) {
    console.log(new Date() - startTime + 'ms - ' + message);
}

logWithTime('Start HTML Parse..');

window.addEventListener('load', () => {
    logWithTime('Document rendered!');
});
