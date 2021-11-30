const app = {
    creatPlaygroud: () => {
        const container = document.getElementById('playground')
        document.getElementById('legend').textContent = 'player 1 green  ///    player 2 red';
        document.getElementById('playerToPlay').textContent = 'partie to begin with player 1';
        container.textContent = '';
        for (let index = 0; index < 3; index++) {
            const elementLine = document.createElement('div');
            elementLine.classList.add('line');
            for (let j = 0; j < 3; j++) {
                const elementCell = document.createElement('div');
                elementCell.classList.add('cell');
                elementCell.classList.add('free');
                elementLine.appendChild(elementCell);
                console.log('cell');
            }
            container.appendChild(elementLine);

        }
    },
    player1Turn: true,
    changeCellColor: (cell) => {
        console.log('app.player1Turn ', app.player1Turn)
        if (app.player1Turn && cell.classList.contains('free')) {
            cell.style.backgroundColor = "green";
            cell.classList.remove('free');
        } else if (cell.classList.contains('free')) {
            cell.style.backgroundColor = "red";
            cell.classList.remove('free');
        }
        app.player1Turn = !app.player1Turn;
        if (app.player1Turn) {
            document.getElementById('playerToPlay').textContent = 'player 1 turn';
        } else {
            document.getElementById('playerToPlay').textContent = 'player 2 turn';
        }

    },

    init: () => {
        app.creatPlaygroud();
        app.player1Turn = true;
    },
    initEvenement: () => {
        document.getElementById('playground').addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                console.log('clic sur cell');
                app.changeCellColor(event.target);
            }
        })
        document.getElementById('restart').addEventListener('click', app.init);
        console.log(app);

    }
}

app.init();
app.initEvenement();