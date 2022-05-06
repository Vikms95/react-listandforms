import React,{Component} from "react"
import Overview from "./components/Overview"

class App extends Component{
  constructor(){
    super()
    // Array of strings, only the last index gets udpated with updateData
    this.state = ["hello","bye","no"]
    this.updateData = this.updateData.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask(){
    this.setState(prevState=>{
      const input = document.getElementById('name')
      input.value = ""
      let newArray = Object.keys(prevState).map(key => prevState[key])
      return [...newArray, ""]
    })
  }

  updateData(event){
    // Gets the last index from state and renders its value to the event value
    // const value = event.target.value
    this.setState(prevState=>{
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
            <label htmlFor="task">Task</label>
            <input id="name" name="task" type="text" onChange={this.updateData}></input>
        <button type="button" onClick={this.addNewTask}>SUBMIT</button>
        </form>
        <Overview taskList={this.state}/>
      </div>
    );
   }
}

export default App;
