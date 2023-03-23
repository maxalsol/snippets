const startTime = new Date();

function logWithTime(message) {
    console.log(new Date() - startTime + 'ms - ' + message);
}

logWithTime('Start HTML Parse..');

window.addEventListener('load', () => {
    logWithTime('Document rendered!');
});
