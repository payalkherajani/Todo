import firebase from "firebase";
import history from '../../history'


export const loginUser = (phoneNum,pass) => {

const PhoneNumber =`+91${phoneNum}`

var appVerifier = window.recaptchaVerifier;


firebase.auth().signInWithPhoneNumber(PhoneNumber, appVerifier)
    .then(function (confirmationResult) {
     history.push({ pathname: '/verification',})

     var code = localStorage.getItem('code')     //"123456" ?? get code form user here either we can use prompt ?? localstorage wont work

      confirmationResult.confirm(code).then(function (result) {
            alert("Logged In")
            console.log(result)
            }).catch(function (error) {
            alert("Error In LogIn")
            console.log(error)
            });
            
      window.confirmationResult = confirmationResult;
     
    }).catch(function (error) {
      console.log(error)
    });
}


