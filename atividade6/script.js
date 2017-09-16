var students = new Array();

function validateForm()
{
  var fields = ["name", "sex", "age", "address", "phone", "email"];

  var l = fields.length;
  var fieldname;
  for (var i=0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["register"][fieldname].value === "") {
      alert(fieldname + " can not be empty");
      return false;
    }
  }
  return true;
}

function getDate(){
	var isValid = validateForm();
	if(isValid){
		var myForm = document.forms["register"];
		var student = new Object();
		
		student.name = myForm["name"].value;
		
		var gender = myForm["sex"];
		if(gender[0].checked){
			student.gender = gender[0].value;
		}else if(gender[1].checked){
			student.gender = gender[1].value;
		}
		
		student.age = myForm["age"].value;		
		student.address = myForm["address"].value;	
		student.phone = myForm["phone"].value;		
		student.email = myForm["email"].value;
	
		students.push(student);
	    myForm.reset();

		return false;
		
	}
	
	return false;
	
}

function showRegistration(){
    if (students.length == 0)
        return;
    
    // it will delete all child elements from div 'results' before fill it
    document.getElementById("results").innerHTML = "";
    
    for(var i=0; i<= students.length; i++){
		var student = students[i];
		var newElement = document.createElement('div');
		newElement.innerHTML = 
		'</br><p> Nome - '+student.name+'</p>'+
		'<p> Gênero - '+student.gender+'</p>'+
		'<p> Idade - '+student.age+'</p>'+
		'<p> Endereço - '+student.address+'</p>'+
        '<p> Telefone - '+student.phone+'</p>'+
		'<p> E-mail - '+student.email+'</p>';
		document.getElementById("results").appendChild(newElement);
	}
}	
