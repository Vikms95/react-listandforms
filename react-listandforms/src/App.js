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
    this.updateTask = this.updateTask.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addNewTask(){
    const input = document.getElementById('name')
    input.value = ""
    this.setState({
      currentTask: {
        text:"",
        id:uniqid(),
        index: this.state.currentTask.index + 1
      },
      tasks: [...this.state.tasks, this.state.currentTask]
    })

  }

  updateTask(event){
    this.setState({
      currentTask : {
        text: event.target.value,
        id: this.state.currentTask.id,
        index: this.state.currentTask.index
      }
    })
  }

  deleteTask(id){
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
  
    })
  }

  render(){
    return (
      <div>
        <form>
            <label htmlFor="task">Task</label>
            <input id="name" name="task" type="text" onChange={this.updateTask}></input>
        <button type="button"  onClick={this.addNewTask}>SUBMIT</button>
        </form>
        <Overview taskList={this.state.tasks} handleDelete={this.deleteTask}/>
      </div>
    );
   }
}

export default App;
