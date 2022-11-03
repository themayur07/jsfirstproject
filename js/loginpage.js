function getDetails(){
    let a=document.getElementById("email").value;
    let b=document.getElementById("password").value;
    document.write("Your Email is : "+a+"<br>"+"Your Password is : "+b)
}

function formvalidation(){
    let a=document.forms["form1"]["email"].value;
    let b=document.forms["form1"]["password"].value;
    if(a=="" && b==""){
        alert("Enter your email !"+"Enter your password !");
    }
}