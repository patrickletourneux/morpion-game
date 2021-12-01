const app = {
    creatPlaygroud: () => {
        const container = document.getElementById('playground')
        document.getElementById('legend').textContent = 'player 1 green  ///    player 2 red';
        document.getElementById('playerToPlay').textContent = 'partie to begin with player 1';
        container.textContent = '';
        for (let i = 0; i < 3; i++) {
            const elementLine = document.createElement('div');
            elementLine.classList.add('line');
            for (let j = 0; j < 3; j++) {
                const elementCell = document.createElement('div');
                elementCell.classList.add('cell');
                elementCell.classList.add('free');
                // elementCell.classList.add(`X${index}Y${j}`);
                elementCell.dataset.position=`X${i}Y${j}`;
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
            // cell.style.backgroundColor = "green";
            cell.classList.add('player-1');
            cell.classList.remove('free');
            app.player1Combinaisons.push(cell.dataset.position)
            console.log('app.player1Combinaisons:', app.player1Combinaisons)
            app.player1Turn = !app.player1Turn;
            if (app.player1Turn) {
                document.getElementById('playerToPlay').textContent = 'player 1 turn';
            } else {
                document.getElementById('playerToPlay').textContent = 'player 2 turn';
            }
        } else if (cell.classList.contains('free')) {
            // cell.style.backgroundColor = "red";
            cell.classList.add('player-2');
            cell.classList.remove('free');
            app.player2Combinaisons.push(cell.dataset.position)
            console.log('app.player2Combinaisons:', app.player2Combinaisons)
            app.player1Turn = !app.player1Turn;
            if (app.player1Turn) {
                document.getElementById('playerToPlay').textContent = 'player 1 turn';
            } else {
                document.getElementById('playerToPlay').textContent = 'player 2 turn';
            }
        }


    },

    winCombinaisons: [
        ['X0Y0', 'X1Y0', 'X2Y0'],
        ['X0Y1', 'X1Y1', 'X2Y1'],
        ['X0Y2', 'X1Y2', 'X2Y2'],
        ['X0Y0', 'X0Y1', 'X0Y2'],
        ['X1Y0', 'X1Y1', 'X1Y2'],
        ['X2Y0', 'X2Y1', 'X2Y2'],
        ['X0Y0', 'X1Y1', 'X2Y2'],
        ['X0Y2', 'X1Y1', 'X2Y0']
    ],
    player1Combinaisons: [],
    player2Combinaisons: [],
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