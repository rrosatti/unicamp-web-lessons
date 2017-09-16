function checkForm(){
    var myForm = document.forms["register"];
    var name=document.forms["register"]["name"].value;
    alert(name);
    var sex=document.forms["register"]["sex"].value;
    alert(sex);
    var state=document.forms["register"]["estadoCivil"].value;
    alert(state);
    //var bens=//document.getElementById("bensFinanciados").value;
    //alert(name + "|" + sex + "|" + state + "|" + bens);
}

