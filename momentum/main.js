const clockTitle = document.querySelector('.js-clock');

function getClock()
{
    const christmas = new Date("2026-12-25T00:00:00").getTime();
    const date = new Date();
    const diff = christmas - date;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    days = String(days);
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);