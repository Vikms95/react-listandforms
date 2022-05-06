import React,{Component} from "react"

class Overview extends Component{
  
    renderTasks(){
        return this.props.taskList.map(task =>{
            return <li key={task.id}>
                         {task.index} - {task.text}  
                         {this.props.isEditMode 
                         ?  <button 
                                onClick={()=>
                                this.props.addNewTask(task.id)}
                                > Edit 
                            </button>
                        : <button 
                            onClick={()=>
                            this.props.handleEdit(task.id)}
                            > Edit 
                          </button>    
                        }

                        <button
                          onClick={(event)=>
                           this.props.handleDelete(task.id, event)}
                            > Delete 
                        </button>
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