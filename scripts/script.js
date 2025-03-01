// color button area
const colorBtn = document.getElementById('color-btn');
const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow"];
let body = 0;

colorBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[body];
    body = (body + 1) % colors.length;
});

// // date area

function showDate() {
    const date = document.getElementById('display-date');
    const currentDate = new Date(); //
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = currentDate.toLocaleDateString('en-US', options);
}
showDate();
// discover button area
document.getElementById('discover-btn').addEventListener('click', function () {
    window.location.href = "./blog.html";
});
