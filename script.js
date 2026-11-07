document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let userColor = document.getElementById('colorInput').value;
    document.getElementById('heading').style.color = userColor;
});