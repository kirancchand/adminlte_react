import React, { Component } from "react";
import axios from "axios";
class UpdateProjectTask extends Component{
  constructor(props) {
    super(props);
    // console.dir(props);
    this.state = {
      pt_id: props.location.id,
      summary:"",
      acceptanceCriteria:"",
      status:"",
      errors:{}
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    // console.log(this.state.pt_id);
    
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const newprojectTask={
      summary:this.state.summary,
      acceptanceCriteria:this.state.acceptanceCriteria,
      status:this.state.status
    }
  }
  componentDidMount() {
    
    const res= axios
    .get("http://localhost:8080/api/board/"+this.state.pt_id)
    .then(
      response => { 
        this.setState({
          summary:response.data.summary,
          acceptanceCriteria:response.data.acceptanceCriteria,
          status:response.data.status
          
           });
        }
      );
      
     
  }


    render(){
      const {errors} = this.state;
      return(
        
<div>
  <div className="addProjectTask">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <a href="/RSApp" className="btn btn-light">
            Back to Board
          </a>
          <h4 className="display-4 text-center">Add /Update Project Task</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              {/* <input type="text" className={classnames("form-control form-control-lg",{"is-invalid":errors.summary})} name="summary" placeholder="Project Task summary" value={this.state.summary} onChange={this.onChange} /> */}
            <input type="text" className={errors.summary?("form-control form-control-lg isinvalid"):("form-control form-control-lg")} name="summary" placeholder="Project Task summary" value={this.state.summary} onChange={this.onChange} /> 
              {
                errors.summary && (<div className="isinvalid_feedback">{ errors.summary}</div>)
              } 
            </div>
            <div className="form-group">
              <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={this.state.acceptanceCriteria} onChange={this.onChange} />
            </div>
            <div className="form-group">
              <select className="form-control form-control-lg" name="status" value={this.state.status} onChange={this.onChange} >
                <option value>Select Status</option>
                <option value="TO_DO">TO DO</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
            </div>
            <input type="submit" className="btn btn-primary btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
      )
    }
}
export default UpdateProjectTask