import React,{Component} from "react"
import Overview from "./components/Overview"
import uniqid from "uniqid"
class App extends Component{
  constructor(){
    super()
    // Array of strings, only the last index gets udpated with updateData
    this.state = {
      currentTask: {
        text: "",
        id: uniqid(),
        index: 0
      },
      tasks: []
    }
    this.updateData = this.updateData.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
  }

  addNewTask(){
    console.log(this.state.currentTask.index)
    this.setState({
      currentTask: {
        text:"",
        id:uniqid(),
        index: this.state.currentTask.index + 1
      },
      tasks: [...this.state.tasks, this.state.currentTask]
    })

  }

  updateData(event){
    this.setState({
      currentTask : {
        text: event.target.value,
        id: this.state.currentTask.id,
        index: this.state.currentTask.index
      }
    })
  }

  render(){
    return (
      <div>
        <form>
            <label htmlFor="task">Task</label>
            <input id="name" name="task" type="text" onChange={this.updateData}></input>
        <button type="button"  onClick={this.addNewTask}>SUBMIT</button>
        </form>
        <Overview taskList={this.state.tasks}/>
      </div>
    );
   }
}

export default App;
