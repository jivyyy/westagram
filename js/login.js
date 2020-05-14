/*const inputId = document.querySelector("login-by-id").value;
const inputPw = document.querySelector("type-password").value;
const changeBt = document.querySelector("login-bt")


function change_bt(){
const currentbackgroundColor = changeBt.backgroundColor;

if(inputId !== "") && (inputPw !== ""){
    changeBt.style.backgroundColor="blue";
} else{

}



change_bt();
 
*/

const inputEvent = document.getElementsByClassName('.user-login')[0];


// inputEvent.addEventListener('keyup', function(){
// const inputId = document.querySelector("login-by-id").value;
// const inputPw = document.querySelector("type-password").value;
// const changeBt = document.querySelector("login-bt");

// })

// const inputId = document.querySelector(".user-login");
// const inputPw = document.querySelector(".type-password");

       // console.log(pwTry)    }



    // if()
    // if(event.keyCode === 13) {
    //     alert("로그인 시도")
    // }

const inputId = document.querySelector(".user-login")

inputId.addEventListener('keyup', function(){ 
    const idTry = document.querySelector(".login-by-id").value;
    // console.log(idTry)
    const pwTry = document.querySelector(".type-password").value;
    const loginButton = document.querySelector(".login-bt")

    if (idTry.length > 0 && pwTry.length > 0 ){
        loginButton.style.backgroundColor = "blue";
    } else {
        loginButton.style.backgroundColor = "rgba(var(--d69,0,149,246),.3)";
    }
})