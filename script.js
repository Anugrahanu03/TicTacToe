let clicks = 1;
let icon = 'X';
var rank = new Array();
const set = new Set(rank);
let firstTry = true;

function clickIt(val){
    if(firstTry)
    {
        display(val);
        firstTry=false;
    }else{
        console.log(set.has(val))
        if(set.has(val) == false)
        {
            display(val);
        }
    }
}
function display(val){
    set.add(val);
    clicks++;
    if(clicks%2==0)
    {
        icon ='X';
    }else{
        icon='O';
    }
    console.log("clicked");
    document.getElementById(val).innerText=icon;
    document.getElementById(val).value=icon;
    if(clicks > 5)
    {
        if(winCheck(1,2,3)){}
        else if(winCheck(4,5,6)) {}
        else if(winCheck(7,8,9)) {}
        else if(winCheck(1,4,7)) {}
        else if(winCheck(2,5,8)) {}
        else if(winCheck(3,6,9)) {}
        else if(winCheck(1,5,9)) {}
        else if(winCheck(7,5,3)) {}
    }
}
function winCheck(a,b,c){
    if(document.getElementById(a).value === document.getElementById(b).value &&
    document.getElementById(b).value === document.getElementById(c).value &&
    (document.getElementById(c).value === "X" || document.getElementById(c).value === "O"))
    {
        if(window.confirm("You Win")){
            clicks = 1;
            icon = 'X';
            set.clear();
            firstTry = true;
        }
        for(var i=1;i<10;i++){
            document.getElementById(i).innerText=null;
            document.getElementById(i).value=null;
        }
        return true;
    }
    return false;
}