
let scoreStr = localStorage.getItem('score');
let score ;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win : 0,
    lost : 0,
    tie : 0,
    };

  score.displayScore = function(){
      return  ` score : win: ${score.win} , lost: ${score.lost} , tie: ${score.tie}`; 
    };

    showResult();
  }


function generateComputerChoice(){
    
   let randomNumber = Math.random() * 3;
      
      if(randomNumber > 0 && randomNumber <=1){
         return 'Bat';
        }  
      else if(randomNumber >1 && randomNumber <= 2){
           return 'Ball';
      }
      else{
           return 'Stump';
      }
}

function gettingResult( UserMove , ComputerMove){

  if(UserMove === 'Bat'){

      if(ComputerMove === 'Ball'){
        score.win++ ;
        return 'You Win';
      }
      else if(ComputerMove === 'Bat'){
        score.tie++;
        return `It's tie `;
      }
      else{
        score.lost++;
        return 'Computer Win';
      }
  }
  else if(UserMove === 'Ball'){
    
      if(ComputerMove=== 'Bat'){
        score.lost++ ;
        return 'Computer Win';
      }
      else if(ComputerMove === 'Ball'){
        score.tie++;
        return `It's tie `;
      }
      else{
        score.win++;
        return 'You Win';
      }
  }
  else{
      if(ComputerMove === 'Ball'){
        score.lost++;
        return 'Computer win';
      }
      else if(ComputerMove === 'Bat'){
        score.win++;
        return 'You  won';
      }
      else{
        score.tie++;
        return `It,s tie`;
      }
  }
}

function showResult(UserChoice , ComputerChoice , resultMsg){
   
  localStorage.setItem('score' , JSON.stringify(score));

  document.querySelector('#user-move').innerText = 
  UserChoice ? `You have Chosen ${UserChoice}` : ' ';

  document.querySelector('#computer-move').innerText = 
  ComputerChoice ?`Computer choices is ${ComputerChoice}`: '' ;

  document.querySelector('#result').innerText = 
  resultMsg || '';

  document.querySelector('#score').innerText = score.displayScore();
}