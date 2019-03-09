// A simple JavaScript Battleship Game
// 
// Usage: run startNewGame with 3 arguments:
// - Length of the board's side (from 2 to 10)
// - Number of turns
// - Number of ships (ships are 1X1)
//
// Enjoy :)
// Written by Giuseppe Locanto

function startNewGame(dimensions, turn, ship)
{
  var result = 0;
  var board = [];

if(dimensions > 10 || dimensions < 2)
{
  console.log("Dimensions: Min 2X2 / Max 10X10");
}
else if(ship > turn || ship > (dimensions * dimensions) || turn < 1 || ship < 1)
{
  console.log("Illogic");
}
else
{
  for(var a = 0; a < dimensions; a++)
  {
    board.push([]);
    for(var s = 0; s < dimensions; s++)
    {
      board[a].push([]);
      board[a][s] = null;
    }
  }

  for(var i = 0; i < ship; i++)
  {
    var j = Math.floor(Math.random() * dimensions);
    var k = Math.floor(Math.random() * dimensions);

    if(board[j][k] === null)
    {
      board[j][k] = "s";
    }
    else
    {
      i--;
    }
  }

  for(var l = 0; l < turn; l++)
  {
    var m = Math.floor(Math.random() * dimensions);
    var n = Math.floor(Math.random() * dimensions);

    if(board[m][n] === "s")
    {
      board[m][n] = null;
      console.log("Hit & Sunk at: " + m + " " + n);
    }
    else
    {
      console.log("Hole in the water at: " + m + " " + n);
    }
  }

  for(var q = 0; q < board.length; q++)
  {
    for(var w = 0; w < board[q].length; w++)
    {
      if(board[q][w] === "s")
      {
        result++;
      }
    }
  }

  if(result === 0)
  {
    console.log("Greetings: You Win!");
  }
  else if(result === 1)
  {
    console.log("Damn'! Just " + result + " ship more...")
  }
  else
  {
    console.log("Game Over! " + result + " ships left :(")
  }
  console.log(board);
}
}

startNewGame(3, 10, 2); //test here 
