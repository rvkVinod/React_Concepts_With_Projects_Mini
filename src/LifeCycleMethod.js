import { Component } from "react";

class LifeCycleMehtod extends Component {
    state={
        count:0,
    }
   
    increment=()=>{
    this.setState({count:this.state.count+1})
  }
  componentDidMount(){
    console.log("componentDidMount mostly used for api calls")
   }

   componentDidUpdate(){
    console.log("Component did updated")
   }

   componentDidUmMount(){
    console.log("component was unmount ")
   }

    render(){
        return(
           <>
       

           <h4>Count:{this.state.count}</h4>

           <button onClick={this.increment}>click </button>



           </> 
        )
    }
}
export default LifeCycleMehtod;