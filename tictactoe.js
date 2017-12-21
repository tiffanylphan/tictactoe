const winningCombo = [
	//across
	[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //down
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const player1 = ['x', ];
const player2 = ['o', ];

const findWinningCombo = (playerCombo) => {
  if (playerCombo.length > 3) {
  	for (let i = 0; i < 8; i++) {
			let counter = 0;
      for (let j = 0; j < 3; j++) {        
        if (playerCombo.includes(winningCombo[i][j])) {
        
          counter++
        };
        if (counter === 3) {
        	return true;
        }
      }
    }
  }

  return false;
}

let turn = 0;
const el = document.getElementsByClassName("board")[0];

el.addEventListener("click", function playGame(e) {
	// e = html event
  // this = the element that was clicked
  const piece = e.target.id.split('-')[1];
  
	if (isValidMove(Number(piece))) { 
  turn++;
    if (turn % 2 === 1 && turn < 10) {
    	player1.push(Number(piece));

      const div = document.createElement('div');

      div.className = 'x';

      div.innerHTML = 'x';

      e.target.appendChild(div)
      if (findWinningCombo(player1)) {
        console.log('yay', player1[0]);
        el.removeEventListener('click', playGame);
      }
    }
    if (turn % 2 === 0 && turn < 10) {
    	player2.push(Number(piece));
      const div = document.createElement('div');

      div.className = 'o';

      div.innerHTML = 'o';

      e.target.appendChild(div);
      if (findWinningCombo(player2)) {
        console.log('yay', player2[0]);
        el.removeEventListener('click', playGame);
      }
    }
  }
  if (turn > 8) {
    console.log('tie');
    return 'tie';
  }
});

const isValidMove = (piece) => {
	if (!player1.includes(piece) && !player2.includes(piece)) {
  	return true;
  }
  return false;
}
