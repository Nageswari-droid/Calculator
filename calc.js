var currentNum = 0;

function invoke()
{
  const usrInp = document.getElementById("textField");
  const addNum = document.getElementById("addBtn");
  const subNum = document.getElementById("subBtn");
  const mulNum = document.getElementById("mulBtn");
  const divNum = document.getElementById("divBtn");
  const refCol = document.getElementById("refBtn");

  const resultSpace = document.getElementById("outputRes");

  // function valueChange()
  // {
    
  // }

  function output(ans) 
  {
    resultSpace.textContent = ans;
    document.getElementById("textField").value = " ";
    document.getElementById("textField").focus();
  }

  function toInt() 
  {
    return parseInt(usrInp.value);
  }

  function add() 
  {
    const numValue = toInt();
    currentNum = currentNum + numValue;
    output(currentNum);
  
  }

  function sub() 
  {
    const numValue = toInt();
    currentNum = currentNum - numValue;
    output(currentNum);
  }

  function mult() 
  {
    const numValue = toInt();
    currentNum = currentNum * numValue;
    output(currentNum);
  }

  function div() 
  {
    const numValue = toInt();
    currentNum = currentNum / numValue;
    output(currentNum);
  }

  function ref()
  {
      const numValue = toInt();
      currentNum = 0 ;
      output(currentNum) ;
  }

  addNum.addEventListener("click", add);
  subNum.addEventListener("click", sub);
  mulNum.addEventListener("click", mult);
  divNum.addEventListener("click", div);
  refCol.addEventListener("click",ref);
}
