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
        index: 0,
        isEditMode: false
      },
      tasks: []

    }
    this.updateTask = this.updateTask.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask   = this.editTask.bind(this)
  }

  addNewTask(){
    document.getElementById('name').value = ""
    this.setState({
      currentTask: {
        text:"",
        id:uniqid(),
        index: this.state.currentTask.index + 1,
        isEditMode: false
      },
      tasks: [...this.state.tasks, this.state.currentTask]
    })

  }

  updateTask(event){
    this.setState({
      currentTask : {
        text: event.target.value,
        id: this.state.currentTask.id,
        index: this.state.currentTask.index,
        isEditMode: this.state.currentTask.isEditMode
      }
    })
  }

  deleteTask(id){
      this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)

    })
  }

  editTask(id,event){
      // Get index
      let taskIndex = this.state.tasks.findIndex(task => task.id === id)
      // Modify with setState the task at the index found
      this.setState({
          currentTask:{
            text: this.state.tasks[taskIndex].text,
            id: this.state.tasks[taskIndex].id,
            index: this.state.tasks[taskIndex].index,
            isEditMode: !this.state.tasks[taskIndex].isEditMode    
          }
        })
        console.log(this.state)
    document.getElementById('name').value = ""
    // Reenable the div and the button to its original state (use boolean is edit mode??)
  }

  render(){
    return (
      <div>
        <form>
            <label htmlFor="task">Task</label>
            <input id="name" name="task" type="text" onChange={this.updateTask}></input>
        <button type="button"  onClick={this.addNewTask}>SUBMIT</button>
        </form>
        <Overview 
            taskList={this.state.tasks} 
            handleDelete={this.deleteTask} 
            handleEdit={this.editTask}
            handleAdd={this.addNewTask}
        />
      </div>
    );
   }
}

export default App;
