
let btn = document.querySelector('.btn');
let logs = document.querySelector('.logs');
let refresh = document.querySelector('.refresh');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




btn.addEventListener('click', function () {
    let tank_1 = {
        health: 100,
        power: (random(1, 20)),
    };

    let tank_2 = {
        health: 100,
        power: (random(1, 20)),
    };
    let logsMsg = '';
    for (let iterator = 1; tank_1.health > 0 && tank_2.health > 0; iterator++) {
        logsMsg = (`${logsMsg}\n<p>${iterator} Танк Б => Танк А = ${tank_1.health - tank_2.power} || Танк A => Танк Б = ${tank_2.health - tank_1.power}</p>`);
        tank_1.health = tank_1.health - tank_2.power;
        tank_2.health = tank_2.health - tank_1.power;
    }

    if (tank_1.health <= 0 && tank_2.health <= 0) {
        logsMsg = `${logsMsg}\n<p>Ничья</p>`;
    } else if (tank_1.health <= 0 && tank_2.health > 0) {
        logsMsg = `${logsMsg}\n<p>Танк B - Победитель!</p>`;
    } else if (tank_1.health > 0 && tank_2.health <= 0) {
        logsMsg = `${logsMsg}\n<p>Танк А - Победитель!</p>`;
    } else {
        logsMsg = '';
    }
    console.log(logsMsg);
    logs.innerHTML = logsMsg;
});


refresh.addEventListener('click', function () {
    logs.innerHTML = '';
    console.clear();
});