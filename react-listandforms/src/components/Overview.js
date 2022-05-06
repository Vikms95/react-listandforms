import React,{Component} from "react"

class Overview extends Component{
  
    renderTasks(){
        console.log(this.props.taskList)
        return this.props.taskList.map(task =>{
            return <li key={task.id}>{task.text}</li>
        })
    }

    render(){
        return(
            <ol>
                {this.renderTasks()}
            </ol>
        )
    }
}

export default Overview