import React,{Component} from "react"

class Overview extends Component{
  
    renderInputValues(){// Renders all values from props.taskList and wraps them with <li> with map method
      let newArray = Object.keys(this.props.taskList).map(key => this.props.taskList[key])
      return newArray.map(task=> <li>{task}</li>)
    }

    render(){
        return(
            <ol>
                {this.renderInputValues()}
            </ol>
        )
    }
}

export default Overview