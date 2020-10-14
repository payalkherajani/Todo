import firebase from "firebase";
import history from '../../history'


export const loginUser = (phoneNum,pass) => {

const PhoneNumber =`+91${phoneNum}`

var appVerifier = window.recaptchaVerifier;


firebase.auth().signInWithPhoneNumber(PhoneNumber, appVerifier)
    .then(function (confirmationResult) {
       console.log(confirmationResult)
      window.confirmationResult = confirmationResult
     
    }).catch(function (error) {
      console.log(error)
    });
}

