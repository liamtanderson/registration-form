 function checkform(theform){
var why = "";

if(theform.CaptchaInput.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput.value != ""){
if(ValidCaptcha(theform.CaptchaInput.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}

var first_errors = document.getElementById('first_errors')
var last_errors = document.getElementById('last_errors')
var pass_errors = document.getElementById('pass_errors')
var agreedToCondition = document.getElementById('terms')
var email_errors = document.getElementById('email_errors')


console.log("pass Node: " + pass_errors.childNodes.length )
console.log("first_errors: " + first_errors.childNodes)
console.log('last_error: ' + last_errors.childNodes.length)

if(first_errors.childNodes.length > 1 || last_errors.childNodes.length > 1
|| pass_errors.childNodes.length > 1 || email_errors.childNodes.length > 1) {

console.log('here')
  return false

}

  if(!(agreedToCondition.checked === true)) {

    alert('Please agree to the terms and conditions')
    return false
  }

  if(document.getElementById('zipcode').style.color ==='red'){
     
     console.log('zip code')
    return false


  } 
    
    if(document.getElementById('phone').style.color==='red'){

        return false
    }

}

var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("CaptchaDiv").innerHTML = code;

// Validate input against the generated number
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
if (str1 == str2){
return true;
}else{
return false;
}
}


// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}

document.getElementById('first').onkeyup = ()=> {
  

  // get all the values of the form from the document object of the DOM

        var errors = document.getElementById('first_errors') 
        var firstname = document.forms['registration']['first'].value
      

        // check if the string contains characters other than a-z || A-Z

        var pattern = /[^a-z]/i

       

       // firstname should be less than 2 chars and not more than 25 chars and 



       if(firstname.length < 2 ||  firstname.length > 40 || firstname.match(pattern) ){

                    
           // set empty string for the symbol everytime a key is pressed




        document.getElementById('symbol_first').innerHTML = ''

        document.getElementById('first_label').style.color = 'red'
              
              // create a paragraph element and and textNode as a child

              // create list element and append text nodes as child to it 

              // elements below are appended to the div id 'errors' in DOM to show errors

        var text = document.createElement('b')
        text.appendChild(document.createTextNode('- First name'))
        var li_one = document.createElement('li')
        var li_two = document.createElement('li')
        li_one.appendChild(document.createTextNode('should be >= 2 chars'))
        li_two.appendChild(document.createTextNode('should be A-Z or a-z'))

        // check if the child node is already appended to avoid repitition of the error messages on the form

        if(errors.childNodes.length <=1 ){
        
                errors.appendChild(text) 
                errors.appendChild(li_one)
                errors.appendChild(li_two)

      }
        }

        // if the user entered firstname is valid 


        else {

               // remove the errors displayed as <p> and <li> created above

                // remove the elements until the parent element 'errors' <div> has no child

                document.getElementById('first_label').style.color = 'black'

            if(document.getElementById('first_errors').childNodes.length > 1) {
                       

                  while(errors.firstChild) {
                        errors.removeChild(errors.firstChild)
                  }
            }

            // set the green check symbol in the case the validation is successful without any errors

            document.getElementById('symbol_first').innerHTML = '&#9989;'
        }     
        
}

// same execution method as the firstname 

document.getElementById('last').onkeyup = ()=> {
        
        var errors = document.getElementById('last_errors') 
        var lastname = document.forms['registration']['last'].value

        var pattern = /[^a-z]/i


       if(lastname.length < 2 || lastname.length >=25 || lastname.match(pattern) ){

        document.getElementById('last_label').style.color = 'red'
        document.getElementById('symbol_last').innerHTML = ''
        var text = document.createElement('b')
        text.appendChild(document.createTextNode('Last Name'))
        var li_one = document.createElement('li')
        var li_two = document.createElement('li')
        li_one.appendChild(document.createTextNode('should be more than 2 chars and less than 25 chars '))
        li_two.appendChild(document.createTextNode('should be A-Z or a-z'))

        if(errors.childNodes.length <=1 ){
        
                errors.appendChild(text) 
                errors.appendChild(li_one)
                errors.appendChild(li_two)

      }
        }
        else {


            if(document.getElementById('last_errors').childNodes.length > 1) {
                       
                       document.getElementById('last_label').style.color = 'black'

                  while(errors.firstChild) {
                        errors.removeChild(errors.firstChild)
                  }
            }
            document.getElementById('symbol_last').innerHTML = '&#9989;'
        }     

}



document.getElementById("psw").onkeyup = ()=> {


var pass = document.getElementById('psw').value
var errors = document.getElementById('pass_errors')


// check to see if password length is at least 8 characters long

        var pattern = /[a-z]/i



  var special = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

         var isAlphaNumeric = false

          for(var i=0; i < pass.length; i++) {

               if(!isNaN(parseInt(pass[i]))) isAlphaNumeric = true
          }

        console.log("password: " + pass)
        console.log("isAlpha : " + isAlphaNumeric)

        console.log("pass_match: " + pass.match(pattern))

           if((pass.length < 8 || pass.length > 40) || !isAlphaNumeric || !pass.match(pattern)) {


        document.getElementById('psw_label').style.color = 'red'   
        document.getElementById('symbol_pass').innerHTML = ''
        var text = document.createElement('b')
        text.appendChild(document.createTextNode('- Password'))
        var li_one = document.createElement('li')
        var li_two = document.createElement('li')
        li_one.appendChild(document.createTextNode('should be at least 8 characters long'))
        li_two.appendChild(document.createTextNode('should contain at least one number'))

        if(errors.childNodes.length <=1 ){
        
                errors.appendChild(text) 
                errors.appendChild(li_one)
                errors.appendChild(li_two)

      }
        }
        else {

            document.getElementById('psw_label').style.color = 'black'   

            if(document.getElementById('pass_errors').childNodes.length > 1) {
                       

                  while(errors.firstChild) {
                        errors.removeChild(errors.firstChild)
                  }
            }
            document.getElementById('symbol_pass').innerHTML = '&#9989;'

         }

}

document.getElementById("conf_psw").onkeyup = ()=> {


var pass = document.getElementById('psw').value
var conf_pass = document.getElementById('conf_psw').value
var errors = document.getElementById('pass_errors')


// check to see if password length is at least 8 characters long


  var special = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

         var isAlphaNumeric = false

          for(var i=0; i < pass.length; i++) {

               if(!isNaN(parseInt(pass[i]))) isAlphaNumeric = true
          }

        console.log("password: " + pass)
        console.log("isAlpha : " + isAlphaNumeric)

           if(pass.length < 8 || !isAlphaNumeric || pass !== conf_pass) {


        document.getElementById('conf_psw_label').style.color = 'red'   
        document.getElementById('symbol_pass_conf').innerHTML = ''
        var text = document.createElement('b')
        text.appendChild(document.createTextNode('- Password'))
        var li_one = document.createElement('li')
        var li_two = document.createElement('li')
        var li_three = document.createElement('li')
        li_one.appendChild(document.createTextNode('should be at least 8 characters long'))
        li_two.appendChild(document.createTextNode('should contain at least one number'))
        li_three.appendChild(document.createTextNode('passwords should match'))

        if(errors.childNodes.length <=1 ){
        
                errors.appendChild(text) 
                errors.appendChild(li_one)
                errors.appendChild(li_two)
                errors.appendChild(li_three)

      }
        }
        else {

            document.getElementById('conf_psw_label').style.color = 'black'   

            if(document.getElementById('pass_errors').childNodes.length > 1) {
                       

                  while(errors.firstChild) {
                        errors.removeChild(errors.firstChild)
                  }
            }
            document.getElementById('symbol_pass_conf').innerHTML = '&#9989;'

         }

}


     document.getElementById('postal_code').onkeyup = ()=> {

      var zipcode = document.getElementById('postal_code').value


      var error = false;

            for(var i=0; i < zipcode.length; i++) {

               if(isNaN(parseInt(zipcode[i])) || zipcode.length !== 5)

                error = true;
          }
     

     if(error) document.getElementById('zipcode').style.color = 'red'
      if(!error) document.getElementById('zipcode').style.color = 'black'


}



document.getElementById('phone_number').onkeyup = ()=> {

  console.log("here")

     var phone = document.getElementById('phone_number').value

     var noNumber = false

     for(var i=0; i < phone.length; i++){
         if(isNaN(parseInt(phone[i]))){
              
              noNumber = true
              break;
         } 
     }
           
           console.log('not a number' + noNumber)
   if(noNumber || phone.length !== 10)document.getElementById('phone').style.color = 'red'
    else document.getElementById('phone').style.color = 'black'


   
}

document.getElementById('email').onkeyup = function () {

     var email = document.getElementById('email').value
     var errors = document.getElementById('email_errors')

      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
              
         document.getElementById('email_label').style.color = 'red'   
        document.getElementById('symbol_email').innerHTML = ''
        var text = document.createElement('b')
        text.appendChild(document.createTextNode('- Email'))
        var li_one = document.createElement('li')

        li_one.appendChild(document.createTextNode('should be valid'))

        if(errors.childNodes.length <=1 ){
        
                errors.appendChild(text) 
                errors.appendChild(li_one)

      }

      }

      else {
              
              document.getElementById('email_label').style.color = 'black'   

            if(document.getElementById('email_errors').childNodes.length > 1) {
                       

                  while(errors.firstChild) {
                        errors.removeChild(errors.firstChild)
                  }
            }
            document.getElementById('symbol_email').innerHTML = '&#9989;'


      }

}






