import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ProjectTaskItem extends Component{
onDeleteClick(pt_id){
  axios
  .delete('http://localhost:8080/api/board/'+pt_id)
  .then(
   //  response=>console.log(response.data)
    response => { alert(response.data) },
    );
}
    render(){
      const { project_task } = this.props;
      return(
          <div>
              <div className="card mb-1 bg-light">
                <div className="card-header text-primary">
                  ID: {project_task.id}
                </div>
                <div className="card-body bg-light">
                  <h5 className="card-title">{project_task.summary}</h5>
                  <p className="card-text text-truncate ">{project_task.acceptanceCriteria}</p>
                  <Link to={{pathname:'/updateProjectTask',id: project_task.id}}><button className="btn btn-primary ml-4">Update or delete</button></Link>
                  <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this,project_task.id)}>Delete</button>
                </div>
              </div>
          </div>
      )
    }
}
export default ProjectTaskItem