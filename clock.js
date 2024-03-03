function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minute').textContent = minutes;
    document.querySelector('.second').textContent = seconds;
}

setInterval(updateTime, 1000);

function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}