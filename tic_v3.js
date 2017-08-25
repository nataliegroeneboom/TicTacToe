
//-----------Variables and Constants-------------------------------------
var canvas = document.getElementById("myCanvas");
var buttonX = document.getElementById("X");
var buttonO = document.getElementById("O");
var question = document.getElementById("starter");
//for canvas supported code
 var cxt = canvas.getContext("2d"); 

 var mouse = {
   'x':-1,
   'y':-1
 };

var gameCell = [0,0,0,
				0,0,0,
				0,0,0];
				
let computerLogic;
const X=-1, O=1, BLANK=0;
var cellSize;
cellSize=100;
var coords;

let PlayerResult;
let GameResult;
let user;
let computer;


buttonO.addEventListener('click', function(event){
	user=this.value*1;
	computer=user*-1;
	currentTurn=user;
	$('#starter').animate({opacity: 0});
	ticTacToe(user,computer,currentTurn);
	
}, false);


buttonX.addEventListener('click', function(event){
	user=this.value*1;
	computer=user*-1;
	currentTurn=user;
	$('#starter').animate({opacity: 0});
	ticTacToe(user,computer,currentTurn);
	
}, false);



 function ticTacToe(you,computer,turn){ 

function draw(){
  drawGame(); 
  

 function drawGame(){
cxt.strokeStyle="#ccffcc";
  cxt.beginPath();
 cxt.moveTo(100,0);
 cxt.lineTo(100,300);
 cxt.lineWidth=8;
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
 
};


//Draw function intiates drawGame-  draws the canvas on the object cxt object.--------------------------------------------------First
  draw();
  
  

 
  function fillBoard(cell){

	if(gameCell[cell]===X){
		console.log(coords);
	 drawCross(coords.x+50,coords.y+50);
 }else if(gameCell[cell]==O){
	
	 drawCircle(coords.x+50,coords.y+50);
 }
	

 
 }
  
	




  function drawCircle(x,y){
   cxt.beginPath();
    cxt.lineWidth=5;
 cxt.arc(x,y,30,0,2*Math.PI);

 cxt.stroke();  
  }

  
  function drawCross(x,y){

  
  cxt.beginPath();
  cxt.lineWidth=5;
  cxt.moveTo(x-30,y-30);
  cxt.lineTo(x+30,y+30);
  cxt.moveTo(x+30,y-30);
   cxt.lineTo(x-30,y+30);
    
  cxt.stroke();
}
  
  
  //Added event listener to the mouse movement sets coordinates to object values-----------------------------------------------Second
 canvas.addEventListener('mousemove', function(event){
    let x = event.pageX-canvas.offsetLeft;
    let y= event.pageY-canvas.offsetTop; 
    mouse.x = x;
    mouse.y = y;

  
  });

  
 //Add event listener to click of mouse, runs function getCellNumber that returns cell number, runs gamePlay function with cell number variable---------Third
  canvas.addEventListener('click', function(event){
	  
gamePlay(getCellNumber(mouse.x,mouse.y))
 gameOn=true;

 },false); 
 
 // Start the game from the Click------------------------------------------------4th
  
function gamePlay(cell){
	
let compTurn;
let result



	 
//if gameCell is empty------------------5th				
	if(gameCell[cell]==BLANK){
//set gameCell to CurrentPlayer------------6th
		gameCell[cell]=you;
//get coords of cell from cell value-------7th		
		coords = logCoords(cell);
//fill board with X or O------------------8th			
		fillBoard(cell);
		
	resultCheck(gameCell, playerCheck());
	}

}


 function computersTurn(cell){
	 console.log(cell);
	turn*=-1;
	gameCell[cell]=computer;
	coords = logCoords(cell);
	fillBoard(cell);
	resultCheck(gameCell, playerCheck());
		

 }
 
 
 
 
 
 //------This is the previous player result used for computer logic and results----------------------------------------
 
	playerCheck = function(){
	let gameCode = '';
	for(let j=0;j<gameCell.length;j++){
		if(gameCell[j]===turn){
			gameCode=gameCode.concat(1);
		}else if(gameCell[j]!=turn||gameCell[j]===BLANK){
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


//----This is the Game Result used for Computer Logic------------------------------------------
var gameCheck = function(){
	let gameCode = '';
	computerLogic = {
	0:[[gameCell[0],gameCell[1],gameCell[2]],[0,1,2]],
	1:[[gameCell[3],gameCell[4],gameCell[5]],[3,4,5]],
	2:[[gameCell[6],gameCell[7],gameCell[8]],[6,7,8]],
	3:[[gameCell[0],gameCell[3],gameCell[6]],[0,3,6]],
	4:[[gameCell[1],gameCell[4],gameCell[7]],[1,4,7]],
	5:[[gameCell[2],gameCell[5],gameCell[8]],[2,5,8]],
	6:[[gameCell[0],gameCell[4],gameCell[8]],[0,4,8]],
	7:[[gameCell[2],gameCell[4],gameCell[6]],[2,4,6]]
};
	for(let i=0;i<gameCell.length;i++){
		if(gameCell[i]===BLANK){
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

//--------Checking the result-----------------------------------------------------------8th
function resultCheck(game, position){
	var result;
	let player = position.result;
	

	
	if (game.indexOf(0)==-1&&player.indexOf(3)==-1){
		notie.force({
 text: "Phfff..its a draw",
  type: "success",
 buttonText:"OK",
},function(){
	notie.confirm({
	text:"Do you want to play another game",	
	submitText:"Yes",
	cancelText:"No",
	submitCallback:function(){
	resetGame();	
	},
	cancelCallback:function(){
	resetGame();
	}
	
		
	});
	
});
		
		
	}else if(player.indexOf(3)!==-1){
		
	if(turn==user){	
		notie.force({
  text: "Yay!! You have won!",
  type: "success",
 buttonText:"OK",	 
},function(){
	notie.confirm({
	text:"Do you want to play another game",	
	submitText:"Yes",
	cancelText:"No",
	submitCallback:function(){
	resetGame();	
	},
	cancelCallback:function(){
	resetGame();
	}
		
	});
	
});

	}else if(turn=computer){
	notie.force({
  text: "Oh dear. The computer has won",
  type: "success",
 buttonText:"OK"
	
},function(){
	notie.confirm({
	text:"Do you want to play another game",	
	submitText:"Yes",
	cancelText:"No",
	submitCallback:function(){
	resetGame();	
	},
	cancelCallback:function(){
	resetGame();
	}
	
		
	});
	
});	
		
	}
		
	}else{
		
		if(turn==user){
		let cell = computerThinking(playerCheck(),gameCheck(),computerLogic);
		computersTurn(cell);
		}else{
		turn*=-1;	
		}
		
	} 
	
	
}
//------------------Computer Cell number calculation------------------------------------------------	
	function computerThinking(player,game,check){
	PlayerResult = player.result;
	GameResult = game.result;
	console.log(PlayerResult);
	console.log(GameResult);
	console.log(check);
		let computerDone = false;
		
		
		for(let i =0;i<GameResult.length;i++){
			if(PlayerResult[i]===2&&GameResult[i]===2){
				
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;
			}
		}
		if(computerDone!=true){
			for(let i =0;i<GameResult.length;i++){
				if(PlayerResult[i]===1&&GameResult[i]===1){
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;	
				}
				
			}
			
		}
		if(computerDone!=true){
			for(let i =0;i<GameResult.length;i++){
				if(PlayerResult[i]===1&&GameResult[i]!=3){
				let j = check[i][0].indexOf(0);
				let cell = check[i][1][j];
				computerDone=true;
				return cell;	
				}
				
			}
			
		} 
		
		
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

function resetGame(){
	
	cxt.clearRect(0,0,300,300);	
	draw();
	gameCell = [0,0,0,
				0,0,0,
				0,0,0];	
	
}

}
  