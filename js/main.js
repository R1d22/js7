//buisness-logic

    const btnControllerForm = document.querySelector('.pult-buttons');
    const brightUp = btnControllerForm.querySelector('.bright-up');
    const brightDown = btnControllerForm.querySelector('.bright-down');
    const temperatureUp = btnControllerForm.querySelector('.temperature-up');
    const temperatureDown = btnControllerForm.querySelector('.temperature-down');
    const containerEl = document.querySelector('.container');
    const containerTemp = document.querySelector('.container-temperature');
    let standartBright = 50;
    let standartTemperature = 300;


//view    
    brightUp.addEventListener('click', (ev) => {
        ev.preventDefault();

        const bright = standartBright++;
        containerEl.innerHTML = bright + '%';
    });

    brightDown.addEventListener('click', (ev) => {
        ev.preventDefault();

        const bright = standartBright--;
        containerEl.innerHTML = bright + '%'
    });

    temperatureUp.addEventListener('click', (ev) => {
        ev.preventDefault();

        const temperature =  standartTemperature++;
        containerTemp.innerHTML = temperature + '°';
    });

    temperatureDown.addEventListener('click', (ev) => {
        ev.preventDefault();

        const temperature = standartTemperature--;
        containerTemp.innerHTML = temperature + '°';
    });
