import firebase from "firebase";



export const loginUser = (phoneNum) => {

const PhoneNumber =`+91${phoneNum}`

var appVerifier = window.recaptchaVerifier;


firebase.auth().signInWithPhoneNumber(PhoneNumber, appVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult
     
    }).catch(function (error) {
      console.log(error)
    });
}

