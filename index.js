function saveData(email,password){
    if(localStorage.getItem(email)!=null){
         document.getElementById('dataError').style.display = "block";
         return;
    }
    else {
        document.getElementById('dataError').style.display = "none";
        localStorage.setItem(email,password);
    }
}
function submitForm(){
    var name = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var contact = document.getElementById('contact');
    var contactError = document.getElementById('contactError');
    var password = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    var confirmpass = document.getElementById('confirmpass');
    var confirmpassError = document.getElementById('confirmpassError');
    var loader = document.getElementById('loader');
    var a = checkEmptyOrNot(name,nameError);
    var b = checkEmptyOrNot(email,emailError);
    var c = checkEmptyOrNot(contact,contactError);
    var d = checkEmptyOrNot(password,passwordError);
    var e = checkEmptyOrNot(confirmpass,confirmpassError);
    var booleanArray = [a,b,c,d,e];
    if(booleanArray.includes(false)){
         return;
    }
    else {
        if(email.value.includes('@')){
             document.getElementById('emailTypeError').style.display = "none";
        }
        else {
            document.getElementById('emailTypeError').style.display = "block";
            return;
        }
        if(/^[a-zA-Z]+$/.test(contact.value)){
            document.getElementById('contactTypeError').style.display = "block";
            return;
        }
        else {
            document.getElementById('contactTypeError').style.display = "none";
        }
        if(contact.value.length < 10){
            document.getElementById('contactSizeError').style.display = "block";
            return;
        }
        else {
            document.getElementById('contactSizeError').style.display = "none";
        }
        if(password.value!=confirmpass.value){
            document.getElementById('passwordTypeError').style.display = "block";
            return; 
        }
        else {
            document.getElementById('passwordTypeError').style.display = "none";
        }
        if(password.value.length<8){
            document.getElementById('passwordSizeError').style.display = "block";
            return;
        }
        else {
            document.getElementById('passwordSizeError').style.display = "none";
        }
        loader.style.display = "block";
        setTimeout(()=>{
            loader.style.display = "none";
        },1000);
        saveData(email.value,password.value);
        name.value = "";
        email.value = "";
        contact.value = "";
        password.value = "";
        confirmpass.value = "";
        document.getElementById('register-success').style.display = "block";
        setTimeout(()=> {
        document.getElementById('register-success').style.display = "none";
        },2000);
    }
}
function checkEmptyOrNot(val,error){
    if(val.value == "" || val.value == null){
        error.style.display = "block";
        return false;
    }
    else {
        error.style.display = "none";
        return true;
    }
}
function Login(){
    var email = document.getElementById('login-email');
    var password = document.getElementById('login-password');
    var email_error = document.getElementById('email-error');
    var password_error = document.getElementById('password-error');
    var loader = document.getElementById('loader-login');
    var a = checkEmptyOrNot(email,email_error);
    var b = checkEmptyOrNot(password,password_error);
    var booleanArray = [a,b];
    if(booleanArray.includes(false)){
         return;
    }
    else {
        loader.style.display = "block";
        setTimeout(()=>{
            loader.style.display = "none";
        },1000);
        if(checkDataAlreadyExists(email.value) && localStorage.getItem(email.value)!=password.value){
            document.getElementById('wrong-password-error').style.display = "block";
            return;
        }
        else {
            document.getElementById('wrong-password-error').style.display = "none";
        }
        if(!checkDataAlreadyExists(email.value)){
            document.getElementById('register-error').style.display = "block";
            return;
        }
        else {
            document.getElementById('register-error').style.display = "none";
        }
        if(checkDataAlreadyExists(email.value) && localStorage.getItem(email.value)==password.value){
            document.getElementById('login-component').style.display = "none";
            document.getElementById('login-success').style.display = "block";
            //insert home navigation
        }
        else {
            document.getElementById('login-component').style.display = "block";
            document.getElementById('login-success').style.display = "none";
        }
    }
}
function checkDataAlreadyExists(email){
    if(localStorage.getItem(email)==null){
        return false;
    }
    return true;
}