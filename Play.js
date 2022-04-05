//---This is the function in which your html will call on
function play()
{
//---Your variables which will generate the numbers and how they are calculated
    var die1 = Math.ceil(Math.random() *6);
    var die2 = Math.ceil(Math.random() *6);
    var sum = die1 + die2;
//---this is how those inputed numbers will for our sums
    document.getElementById("dieRes").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum  = " + sum;
//---these are your conditions, calling on the sum of 7 OR 11; anything else is a doubles or a message to push again. 
//---Make sur eyou have an innerHTML and nothing else, so it does not wipe the screen. 
    if (sum == 7 || sum == 11)

    {   document.getElementById("sumRes").innerHTML  = "CRAPS - you lose";


    }

    else if (die1== die2 && die1%2 == 0 )

    {

        document.getElementById("sumRes").innerHTML = "doubles - you win";
    }
    else 
    {
        document.getElementById("sumRes").innerHTML = "push";

    }
    
}