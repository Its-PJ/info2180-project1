/* Add your JavaScript to this file */
window.addEventListener("load", ()=> {
    let storesub=document.querySelector("form button.btn");
    let storeemail=document.getElementById("email");
    let validpattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let msgdisplay=document.querySelector(".message");

    storesub.onclick=(event)=>{
        event.preventDefault();
        if (validpattern.test(storeemail.value)){
            msgdisplay.innerHTML=`Thank you! Your email address ${storeemail.value} has been added to our mailing list!`;
        }else{
            msgdisplay.innerHTML="Please enter a valid email address";
        }
    }
});