function myFunction() {
  alert("Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner");
}
team_player=1
lastclickid=""
function change(elem)
{
  if (event.detail==1 && elem.innerText=="")
  {
  lastclickid=elem.id
  if (team_player==1)
  {
    elem.innerText="X"
    team_player=2
  }
  else
  {
    elem.innerText="O"
    team_player=1
  }
}
else if(event.detail==2)
{
  if(lastclickid==elem.id)
  {
    elem.innerText=""
  }
  
}
   
}
function reset()
{


    document.getElementById('one').innerText = '';
    document.getElementById("two").innerText = '';
    document.getElementById("three").innerText = '';
    document.getElementById("four").innerText = '';
    document.getElementById("five").innerText = '';
    document.getElementById("six").innerText = '';
    document.getElementById("seven").innerText = '';
    document.getElementById("eight").innerText = '';
    document.getElementById("nine").innerText = '';
    document.getElementById('one').disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.querySelector('h2').textContent=""
    team_player=1

}

function checkif()
{
  var one,two,three,four,five,six,seven,eight,nine
  one = document.getElementById('one').innerText;
  two = document.getElementById("two").innerText;
  three = document.getElementById("three").innerText;
  four = document.getElementById("four").innerText;
  five = document.getElementById("five").innerText;
  six = document.getElementById("six").innerText;
  seven = document.getElementById("seven").innerText;
  eight = document.getElementById("eight").innerText;
  nine = document.getElementById("nine").innerText;
  if((one=='X'&&two=='X'&&three=='X')||(four=='X'&&five=='X'&&six=='X')||(seven=='X'&&eight=='X'&&nine=='X')||(one=='X'&&four=='X'&&seven=='X')||(two=='X'&&five=='X'&&eight=='X')||(three=='X'&&six=='X'&&nine=='X')||(one=='X'&&five=='X'&&nine=='X')||(three=='X'&&five=='X'&&seven=='X'))
  {
    document.querySelector('h2').textContent="X Player Won"
    document.getElementById('one').disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
  }
  else if((one=='O'&&two=='O'&&three=='O')||(four=='O'&&five=='O'&&siO=='O')||(seven=='O'&&eight=='O'&&nine=='O')||(one=='O'&&four=='O'&&seven=='O')||(two=='O'&&five=='O'&&eight=='O')||(three=='O'&&six=='O'&&nine=='O')||(one=='O'&&five=='O'&&nine=='O')||(three=='O'&&five=='O'&&seven=='O'))
  {
    document.querySelector('h2').textContent="O Player Won"
    document.getElementById('one').disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    
  }
}
