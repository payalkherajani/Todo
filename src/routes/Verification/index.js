import React,{Component} from "react"

class Verification extends Component {
    constructor(props){
        super(props)
        this.state = {
            n: ""
        }
      console.log(localStorage.getItem("verification"))
    }

    handleChange = (e) => {
    this.setState({n: e.target.value})
    console.log(this.state.n)
    }

    submit = () => {
    localStorage.setItem("code",this.state.n)
    
    }

    render() {
        return(
            <div>
                <div>
                    <input type="number" onChange={this.handleChange}/>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        )
    }
   
}

export default Verification