import React,{Component} from "react"

class Overview extends Component{
  
    renderTasks(){
        return this.props.taskList.map(task =>{
            return <li key={task.id}>{task.index} {task.text}</li>
        })
    }

    render(){
        return(
            <ul>
                {this.renderTasks()}
            </ul>
        )
    }
}

export default Overview