const userName = document.getElementById("txt-name");
const note1 = document.getElementById("txt-note1");
const note2 = document.getElementById("txt-note2");
const note3 = document.getElementById("txt-note3");
const btnCalculate = document.getElementById("btn-calculate");

btnCalculate.addEventListener('click', ()=>{

  let Not1 = parseFloat(note1.value);
  let Not2 = parseFloat(note2.value);
  let Not3 = parseFloat(note3.value);

  if(Not1 <= 5 && Not1 >= 1 && Not2 <= 5 && Not2 >= 1 && Not3 <= 5 && Not3 >= 1){
    let result = 0.30 * Not1 + 0.30 * Not2 + 0.40 * Not3;
    
    console.log(result);
  }else{
    console.log('Error');
  }
  
  })
