var canvas = document.getElementById("myCanvas");
//for canvas supported code
 var cxt = canvas.getContext("2d"); 

 var mouse = {
   'x':-1,
   'y':-1
 };

var gameCell = [0,0,0,
				0,0,0,
				0,0,0];
				
let computerLogic = {
	0:[[gameCell[0],gameCell[1],gameCell[2]],[0,1,2]],
	1:[[gameCell[3],gameCell[4],gameCell[5]],[3,4,5]],
	2:[[gameCell[6],gameCell[7],gameCell[8]],[6,7,8]],
	3:[[gameCell[0],gameCell[3],gameCell[6]],[0,3,6]],
	4:[[gameCell[1],gameCell[4],gameCell[7]],[1,4,7]],
	5:[[gameCell[2],gameCell[5],gameCell[8]],[2,5,8]],
	6:[[gameCell[0],gameCell[4],gameCell[8]],[0,4,8]],
	7:[[gameCell[2],gameCell[4],gameCell[6]],[2,4,6]]
};
const X=-1, O=1, BLANK=0;
var currentPlayer=1;
var cellSize;
cellSize=100;
var coords;
var gameposition;
let PlayerResult;
var gameOn = true;
var checkNo = "";
var secNo = '01';
checkNo = checkNo.concat(secNo);


let computersPosition;
let GameResult;
let checking;
let position;




function draw(){
  drawGame(); 
  

 function drawGame(){
    cxt.beginPath();
 cxt.moveTo(100,0);
 cxt.lineTo(100,300);
 cxt.stroke(); 
 cxt.moveTo(200,0);
 cxt.lineTo(200,300);
 cxt.stroke(); 
 cxt.moveTo(0,100);
 cxt.lineTo(300,100);
 cxt.stroke(); 
 cxt.moveTo(0,200);
 cxt.lineTo(300,200);
 cxt.stroke();
 };  
 
 //requestAnimationFrame(draw);
};



  draw();
  
  function fillBoard(cell){

	if(gameCell[cell]===X){
	 drawCross(coords.x+50,coords.y+50);
 }else if(gameCell[cell]==O){
	
	 drawCircle(coords.x+50,coords.y+50);
 }
	

 
 }
  
	
	//return gameCheck;
	//console.log(columnSum+" and "+rowSum);



  function drawCircle(x,y){
   cxt.beginPath()
 cxt.arc(x,y,30,0,2*Math.PI);
 cxt.stroke();  
  }

 canvas.addEventListener('mousemove', function(event){
    let x = event.pageX-canvas.offsetLeft;
    let y= event.pageY-canvas.offsetTop; 
    mouse.x = x;
    mouse.y = y;
    document.getElementById('x').innerHTML = mouse.x;
    document.getElementById('y').innerHTML = mouse.y;
  
  });

  canvas.addEventListener('click', function(event){
	  
gamePlay(getCellNumber(mouse.x,mouse.y))
 

 },false); 
 
 
  
function gamePlay(cell){
	
let compTurn;
PlayerResult = playerCheck(gameCell);
let GameResult = gameCheck(gameCell);
let result


function timerFunction(){
	 //compTurn = setTimeout(computersTurn, 2000)
			}	
	if(gameCell[cell]==0){
		gameCell[cell]=currentPlayer;
		coords = logCoords(cell);
		fillBoard(cell);
		result = resultCheck(gameCell, PlayerResult.result);
	}

	
	 //checking = computerThinking(PlayerResult.result,GameResult.result,computerLogic);
		//computersTurn(checking);
		
	
		
	
	

}


 function computersTurn(cell){
	
		gameCell[cell]=currentPlayer;
		coords=logCoords(cell);
		fillBoard(cell);
	

 }
	playerCheck = function(played){
	let gameCode = '';
	for(let j=0;j<played.length;j++){
		if(played[j]===currentPlayer){
			gameCode=gameCode.concat(1);
		}else if(played[j]!=currentPlayer||played[j]===BLANK){
			gameCode=gameCode.concat(0);
		}
		
	}
	gameCode = gameCode.split('');
	for(let i=0;i<gameCode.length;i++){
		gameCode[i]=parseInt(gameCode[i]);
	}

	let hor1 = [gameCode[0],gameCode[1],gameCode[2]].reduce(function(acc, val){
		return acc + val;
	},0);
	
	let hor2 = [gameCode[3],gameCode[4],gameCode[5]].reduce(function(acc, val){
		return acc+val;
	},0);
	let hor3 = [gameCode[6],gameCode[7],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert1 = [gameCode[0],gameCode[3],gameCode[6]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert2 = [gameCode[1],gameCode[4],gameCode[7]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert3 = [gameCode[2],gameCode[5],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);

	let dig1 = [gameCode[0],gameCode[4],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let dig2 = [gameCode[2],gameCode[4],gameCode[6]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let Result={
		'result':[hor1,hor2,hor3,vert1,vert2,vert3,dig1,dig2]
		
	}
	return Result;
	
}

var gameCheck = function(game){
	let gameCode = '';
	for(let i=0;i<game.length;i++){
		if(game[i]===BLANK){
			gameCode=gameCode.concat(0);
		}else{
			gameCode=gameCode.concat(1);
		}
		
	}
	console.log(gameCode);
	gameCode = gameCode.split('');
	for(let i=0;i<gameCode.length;i++){
		gameCode[i]=parseInt(gameCode[i]);
	}

	let hor1 = [gameCode[0],gameCode[1],gameCode[2]].reduce(function(acc, val){
		return acc + val;
	},0);
	
	let hor2 = [gameCode[3],gameCode[4],gameCode[5]].reduce(function(acc, val){
		return acc+val;
	},0);
	let hor3 = [gameCode[6],gameCode[7],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert1 = [gameCode[0],gameCode[3],gameCode[6]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert2 = [gameCode[1],gameCode[4],gameCode[7]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let vert3 = [gameCode[2],gameCode[5],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);

	let dig1 = [gameCode[0],gameCode[4],gameCode[8]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	let dig2 = [gameCode[2],gameCode[4],gameCode[6]].reduce(function(acc, val){
		return acc+val;
	},0);
	
	var Result={
		'result':[hor1,hor2,hor3,vert1,vert2,vert3,dig1,dig2]
		
	}
	
	return Result
}


function resultCheck(game, position){
	var result;
	if (game.indexOf(0)==-1&&position.indexOf(3)==-1){
		result="draw";
		swal({
  title: "Phff",
  text: "Its a draw",
  type: "info",
  confirmButtonText: "Ok"
});
		play=false;
		
	}else if(position.indexOf(3)!==-1){
		result =currentPlayer==X?'Computer has':'You have'+" won!"; 
		play=false;
		swal({
  title: "Yay!",
  text: "You have won!",
  type: "info",
  confirmButtonText: "Cool"
});
		
	}else{
		
		currentPlayer*=-1;
	}
	return result;
	
}
	
	function computerThinking(player,game,check){
		let computerDone = false;
		for(let i =0;i<game.length;i++){
			if(player[i]===2&&game[i]===2){
				
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;
			}
		}
		if(computerDone!=true){
			for(let i =0;i<game.length;i++){
				if(player[i]===1&&game[i]===1){
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;	
				}
				
			}
			
		}
		if(computerDone!=true){
			for(let i =0;i<game.length;i++){
				if(player[i]===1&&game[i]!=3){
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;	
				}
				
			}
			
		}
		
		
	}
	
	
	function resetGame(){
		//cxt.clearRect(0,0,300,300);
		/* gameCell = [0,0,0,
					0,0,0,
					0,0,0]; */
		//currentPlayer = 1;			
		//draw();
		play=true;
		$('body').notify({
	icon: 'glyphicon glyphicon-star',
	message: "Everyone loves font icons! Use them in your notification!"
});
	}
	
	
	
	function computerThinking(position, gamePosition){
	let computerDone = false;
	for(let i=0;i<position.length;){
		if(position[i]===2&&gamePosition[i]!==3){
			let a = computerLogic[i][0].indexOf(0);
			let computerCell = computerLogic[i][1][a];
			gamePlay(computerCell);
			computerDone=true;
		}
		i++;
		
	}
	for(let i=0;i<position.length;i++){
		if(result[i]===1&&gamePosition[i]!==3&&computerDone!=true){
			let a = computerLogic[i][0].indexOf(0);
			let computerCell = computerLogic[i][1][a];
			gamePlay(computerCell);
			
		}
console.log(i);
	}
	
}









function drawCross(x,y){
	//console.log(coords.x, coords.y);
  
  cxt.beginPath();
  cxt.moveTo(x-30,y-30);
  //console.log(a-30);
  cxt.lineTo(x+30,y+30);
  cxt.moveTo(x+30,y-30);
   cxt.lineTo(x-30,y+30);
  cxt.stroke();
}


function logCoords(cell){
let x = (cell%3)*cellSize;
let y = Math.floor(cell/3)*cellSize;
  return{
	  'x':x,
	  'y':y,
  };
  
  }
function getCellNumber(a,b){
	
	return Math.floor(a/cellSize)%3+Math.floor(b/cellSize)*3;
};  

  //gameLog(clickCoord);
  