var id = null;

function myMove(){
    document.getElementById("firstbutton").disabled = true;//Enabling the disabled attribute specify the button should be disabled
    document.getElementById("secondbutton").disabled = false;//If the condition is false, the button is not disabled
    //If the condition is true, the button is disabled
    var elem = document.getElementById("image");
    var pos = 0;
    clearInterval(id);//In order to enable animation in html documents, elements for applying animations with javascript(JS) must be relative to the "parent container"
    //It is possible to apply animation without js file, instead css style format
    //However, it is recommanded writing js codes for animations in case of future web designs and needed for animations
    //
    id = setInterval(frame, 8);
    function frame (){
        if (pos == 400){
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.bottom = pos + "px"; //The direction of the animation element can be changed
            elem.style.left = pos + "px";//bottom and left will make the element go in the top right direction
            //top and right however will make the element instead go in the bottom left direction
        }
    }
   
}

function reset(){
    clearTimeout(id);
    document.getElementById("firstbutton").disabled = false;//In order to make a button disabled with another button enabled, the attribute of both buttons must be opposite
    document.getElementById("secondbutton").disabled = true;//Let's say the onclick function for the firstbutton should have the condition to be disabled
    //If we want the secondbutton to be enabled, the condition of being disabled should be false
    //If it's true instead, both buttons will be disabled 
    //With the Start disabled and the Stop button enabled at the same time, the Stop button should also be disabled
    //Applying the method for disabling the Start button is similiar but the condition should be swapped
}
