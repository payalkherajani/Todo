import React,{Component} from "react";
import AppRoutes from "./routes";
import './App.css';
import * as firebase from "firebase";

class App extends Component {

  constructor(props){
    super(props)
  }

componentDidMount() {
firebase.auth().onAuthStateChanged(() => {
  const token = localStorage.getItem("token");
  if(token !== null){
  console.log("Logged In")
  }
  else{
  console.log("Logged out")
  }
 })
}


  render(){
    return (
      <div className="App">
        <AppRoutes />
      </div>
    )
  }
  
}

export default App;
