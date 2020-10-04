function validatePassword() {
    var password = document.getElementById("citizenPassword").value;
    var retype=document.getElementById("citizenPassword1").value;
    if (password.length <= 6) {
        return "Password should be at least 6 characters";
    }
    
    if(password!=retype){
        return "pass not same";
    }
    return "";
}
function validateAdhaar(){
    var aadhar =document.getElementById("aadhaar").value;
    var aob=/^\d{12}$/;
    if(aob.test(aadhar)){
        return "";
    }else{
        return "Adhaar Number should be of 12 digits";
    }
    return "";
}
function validatePhone(){
    var phone =document.getElementById("phoneNumber").value;
    var check=/^\d{10}$/;
    if(check.test(phone)){
        return "";
    }else{
        return "phone Number should be of 10 digits";
    }
    return "";
}
function validatePan(){
    var pan=document.getElementById("pan").value;
    var regpan = /^([a-zA-Z])([0-9])([a-zA-Z])?$/;
    if(regpan.test(pan)){
        return "";
    }else{
        return "Invalid Pan Number";
    }
}
// function validate(){
//     var result ="";
//     result+=validatePassword();
//     result+=validateAdhaar();
//     //alert("asd");
//     if(result ==""){
//         return true;
//     }
//     alert(result);
// }
function validate(){
    //var result="";
    if(validatePassword().localeCompare("")!=0){
        let li=document.createElement('li');
        li.innerText=validatePassword();
        //alert(validatePassword());
        val.appendChild(li);
        
    }

    if(validateAdhaar().localeCompare("")!=0){
        let li=document.createElement('li');
        li.innerText=validateAdhaar();
        val.appendChild(li);
        
    }
    if(validatePhone().localeCompare("")!=0){
        let li=document.createElement('li');
        li.innerText=validatePhone();
        val.appendChild(li);
        
    }
    if(validatePan().localeCompare(""!=0)){
        let li=document.createElement('li');
        li.innerText=validatePan();
        val.appendChild(li);
    }
    

}
