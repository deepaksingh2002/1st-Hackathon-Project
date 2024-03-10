let getUserdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUserdata);
function singup(){
    let username = document.getElementById("naam").value
    let mobile = document.getElementById("phone").value
    let password = document.getElementById("pass").value

    if(mobile.length==0){
        alert("Enter Mobile Number");
    }
    else if(mobile.length !== 10){
        alert("Enter The Currect Mobile Number");
    }
    else{
    let userData = {
        username:username,
        mobile:mobile,
        password:password,
    }
    let users = [...getUserdata,userData];
    localStorage.setItem("usersdata", JSON.stringify(users))

alert("Signup Successfull");
window.location.href="signin.html"
}
}