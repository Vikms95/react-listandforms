import React,{Component} from "react"

class App extends Component{
  constructor(){
    super()
    // Array of strings, only the last index gets udpated with render
    this.state = ["hello"]
    this.handleClick = this.renderInputValues.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  renderInputValues(){
  // Renders all values from state and wraps them with <li> with map method
  }

  updateData(event){
  // Gets the last index from state and renders its value to the event value
    // const value = event.target.value
    this.setState(prevState=>{
      console.log(prevState)
      const value = event.target.value
      let newArray = Object.keys(prevState).map(key => prevState[key])
      newArray = newArray.slice(0, newArray.length - 1)
      return [...newArray, value]
    })
  }

  render(){
    return (
      <div>
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={this.updateData} value={this.state.name}></input>

        <button type="button">SUBMIT</button>
        </form>
      </div>
    );
   }
}

export default App;
