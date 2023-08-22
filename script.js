let questions=[
  
    {
    q:'habitable planet with in the solarsystem',
    a:[
      {text:'earth',correct:true},
      {text:'pluto',correct:false},
      {text:'marse',correct:false},
      {text:'saturn',correct:false},
    ]
  },
   {
    q:'which plnet is known as red planet',
    a:[
      {text:'earth',correct:false},
      {text:'marse',correct:true},
      {text:'jupiter',correct:false},
      {text:'pluto',correct:false},
    ]
  },
  {
    q:'who painted the monalisa',
    a:[
      {text:'Vincent van Gogh',correct:false},
      {text:'Leonardo da Vinci',correct:true},
      {text:'Pablo Picasso',correct:false},
      {text:'Michelangelo',correct:false},
    ]
  },
  {
    q:'What is the largest mammal on Earth',
    a:[
      {text:'elephant',correct:false},
      {text:'bluewhale',correct:true},
      {text:'lion',correct:false},
      {text:'giraffe',correct:false},
    ]
  },
]
const question=document.querySelector('.question')
const ansbuttons=document.querySelector('.buttons')
const nextbtn=document.querySelector('.nextbtn')
const playagainbtn=document.querySelector('.playagain')

currentquestionindex=0
score=0
function reset(){
  currentquestionindex=0
    nextbtn.innerHTML= 'NEXT'
score=0
  start()
}
function start(){
  removebtn()
  let currentquestion= questions[ currentquestionindex]
let questionnumber=currentquestionindex+1+'-'
  let firstquestion= questionnumber+ currentquestion.q
question.innerHTML=firstquestion

currentquestion.a.forEach(a=>{
  const button = document.createElement('button')
  button.innerHTML=a.text
  button.classList.add('btn')
  ansbuttons.appendChild(button)
  if(a.correct){
    button.dataset.correct=a.correct
   
  }
   button.addEventListener('click',buttonclicked)

})

}
function removebtn(){
  nextbtn.style.display='none'
  while(ansbuttons.firstChild){
    ansbuttons.removeChild(ansbuttons.firstChild)
  }
 
 }
function buttonclicked(e){
  if (e.target.dataset.correct=='true'){
        e.target.classList.add('correct')
    score++
  }
  else{
            e.target.classList.add('incorrect')
  }

 Array.from(ansbuttons.children).forEach(
   button=>{
     if (button.dataset.correct=='true'){
        button.classList.add('correct')
  }
         button.disabled=true

   }
 )
    nextbtn.style.display='block'

}
nextbtn.addEventListener('click',nextbtnclicked)

function nextbtnclicked(){
  lengthofquestions=questions.length;
    currentquestionindex++
  if(currentquestionindex<lengthofquestions){
   
    start()
  }
  else{
   if(lengthofquestions==currentquestionindex){
    
    nextbtn.style.display='none'
    playagainbtn.style.display='block'
      while(ansbuttons.firstChild){
    ansbuttons.removeChild(ansbuttons.firstChild)
         question.innerHTML=`you scored ${score} out of ${questions.length}`
  }
   }
  }
}
function onclickbtnclicked() {
   playagainbtn.style.display='none'
  reset()
}

reset()

