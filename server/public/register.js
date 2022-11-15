
const registerBtn = document.querySelector("#registerBtn");

registerBtn.onclick = async function () {
    // const registerForm = document.querySelector(".register-form");
    // console.log("clicked",registerForm);
    // const userData = new FormData(registerForm);
    // console.log(userData);

    const inputEmail = document.querySelector("#InputEmail").value;
    const inputFName = document.querySelector("#fName").value;
    const inputLName = document.querySelector("#lName").value;
    const inputProgram = document.querySelector("#InputProgram").value;
    const InputPassword = document.querySelector("#InputPassword").value;

    const userData = {
        emai : inputEmail,
        fName : inputFName,
        lName : inputLName,
        program : inputProgram,
        password : InputPassword
    }
    console.log(userData);

    await fetch('/register', {
        method: 'post',
        body: JSON.stringify(userData),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    
}
