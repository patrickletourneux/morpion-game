const app = {
    creatPlaygroud: () => {
        const container = document.getElementById('playground')
        container.textContent='';
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
    player1Turn : true,
    changeCellColor : (cell) => {
        if (app.player1Turn && cell.classList.contains('free')){
            cell.style.backgroundColor = "green";
        } else if (cell.classList.contains('free')) { 
            cell.style.backgroundColor = "red";
        }
        app.player1Turn = !app.player1Turn;
        if (app.player1Turn){
            document.getElementById('playerToPlay').textContent = 'player 1 turn';
        } else {
            document.getElementById('playerToPlay').textContent = 'player 2 turn';
        }

    },

    init : () =>{
        app.creatPlaygroud();
        document.getElementById('playground').addEventListener('click',(event) => {
            if (event.target.classList.contains('cell')){
                console.log('clic sur cell');
                app.changeCellColor(event.target);
            }
        })
        document.getElementById('restart').addEventListener('click',app.init);

    }
}

app.init()