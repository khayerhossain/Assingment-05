const cardButtons = document.querySelectorAll('.card button');
for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function () {
        cardButtons[i].disabled = true; //

        const card = cardButtons[i].closest('.card');
        const cardTitle = card.querySelector('.card-title').textContent;
        alert("Board updated Successfully!");

        const currentDateTime = new Date().toLocaleString();

        const activity = document.getElementById('activity-container');
        const p = document.createElement('p');
        p.textContent = `You have completed the task ${cardTitle} on ${currentDateTime}`;
        activity.appendChild(p);

    });
}
// history section

document.getElementById('history-btn').addEventListener('click', function () {
    const activity = document.getElementById('activity-container');
    const logEntries = activity.querySelectorAll('p');
    logEntries.forEach(function (history) {
        history.remove();
    });
});
