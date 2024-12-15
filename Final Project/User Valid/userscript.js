function check()
{
    let password = document.getElementById ('password').value
    let Digitlength = document.getElementById('Digit-length')

    let row1 = document.getElementById('row1')

    password = password.trim() //Trimming passwords will remove spaces
    //In case of future assignments or positions, it is recommanded not to input trim for passwords. If trim is enabled, the system will not accept the password with spaces

    if(password.length > 4){ //Similiar to the names and passwords, if the condition is true: this code block will be executed
        Digitlength.setAttribute("checked", "checked")
        row1.style.color = "green"
    }//set and remove Attribute are methods used to set the value of the attribute on a specfied element
    else{
        Digitlength.removeAttribute("checked")
        row1.style.color = "rgb(56, 43, 11)"
    }
}
