import React,{Component} from "react"

class Overview extends Component{
  
    renderTasks(){
        console.log(this.props.taskList)
        return this.props.taskList.map(task =>{
            return <li key={task.id}>
                         {task.index} - {task.text}  
                         <button onClick={()=> this.props.handleDelete(task.id)} > Delete </button>
                    </li>
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