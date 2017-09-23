//Universal variables
let userInput = document.getElementById('num');
let answerValue = document.getElementById('ans');
let timer;

//Keyboard typing for desktop
document.addEventListener('keydown',type);

function type(e){
  if(e.keyCode===8){
    erase();
  }else if(e.keyCode===13|| e.keyCode===187){
    answer();
  }else{
    if((e.keyCode>=48 && e.keyCode<=57)||(e.keyCode>=96 && e.keyCode<=107)||(e.keyCode>=109 && e.keyCode<=111)){
      if(userInput.innerHTML === '0'){
        if(e.keyCode<106){
          userInput.innerHTML=e.key;
        }
      }else if(e.keyCode>106){
        if(userInput.innerHTML.slice(-1)!=='+' && userInput.innerHTML.slice(-1)!=='-' && userInput.innerHTML.slice(-1)!=='x' && userInput.innerHTML.slice(-1)!=='÷' && userInput.innerHTML.slice(-1)!=='.'){
          userInput.innerHTML+=e.key;
        }
      }else{
        userInput.innerHTML+=e.key;
      }
    }
  }
}

//Typing on screen
let leftB = document.getElementById('lb').addEventListener('click',buttPress);
let rightB = document.getElementById('rb').addEventListener('click',buttPress);
let leftBe = document.getElementById('lbe').addEventListener('click',buttPress);
let rightBe = document.getElementById('rbe').addEventListener('click',buttPress);
let se = document.getElementById('sev').addEventListener('click',buttPress);
let ei = document.getElementById('eight').addEventListener('click',buttPress);
let ni = document.getElementById('nine').addEventListener('click',buttPress);
let fo = document.getElementById('four').addEventListener('click',buttPress);
let fi = document.getElementById('five').addEventListener('click',buttPress);
let si = document.getElementById('six').addEventListener('click',buttPress);
let o = document.getElementById('one').addEventListener('click',buttPress);
let tw = document.getElementById('two').addEventListener('click',buttPress);
let th = document.getElementById('three').addEventListener('click',buttPress);
let per = document.getElementById('peri').addEventListener('click',buttPress);
let ze = document.getElementById('zer').addEventListener('click',buttPress);
let del = document.getElementById('del').addEventListener('click',erase);
let dele = document.getElementById('dele').addEventListener('click',erase);
let equal = document.getElementById('equal').addEventListener('click',answer);
let clear = document.getElementById('del');
let clearMobi = document.getElementById('dele');
//Operator variables
let divi = document.getElementById('divi').addEventListener('click',buttPress);
let multi = document.getElementById('multi').addEventListener('click',buttPress);
let minus = document.getElementById('minus').addEventListener('click',buttPress);
let plus = document.getElementById('plus').addEventListener('click',buttPress);

function buttPress(e){
  if(userInput.innerHTML==='0'){
    if(e.target.innerHTML!=='+' && e.target.innerHTML!=='-' && e.target.innerHTML!=='x' && e.target.innerHTML!=='÷' && e.target.innerHTML!=='.'){
      userInput.innerHTML=e.target.innerHTML;
    }
  }else if(e.target.innerHTML==='+' || e.target.innerHTML==='-' || e.target.innerHTML==='x' || e.target.innerHTML==='÷' || e.target.innerHTML==='.'){
    if(userInput.innerHTML.slice(-1)!=='+' && userInput.innerHTML.slice(-1)!=='-' && userInput.innerHTML.slice(-1)!=='x' && userInput.innerHTML.slice(-1)!=='÷' && userInput.innerHTML.slice(-1)!=='.'){
      userInput.innerHTML+=e.target.innerHTML;
    }
  }else{
    userInput.innerHTML+=e.target.innerHTML;
  }
}

function answer(){
  answerValue.innerHTML = eval(userInput.innerHTML.replace('x','*').replace('÷','/'));
}

function erase(){
  if(userInput.innerHTML!=='0'){
    userInput.innerHTML = userInput.innerHTML.slice(0,-1);
  }
  if(userInput.innerHTML===''){
    userInput.innerHTML='0';
  }
}

clear.addEventListener('mousedown', mouseD);
clear.addEventListener('mouseup', mouseU);
clearMobi.addEventListener('touchstart', mouseD);
clearMobi.addEventListener('touchend', mouseU);

function mouseD(){
  timer = setTimeout(wipe,1000);
}

function mouseU(){
  clearTimeout(timer);
}

function wipe(){
  userInput.innerHTML = '0';
  answerValue.innerHTML = '';
}
