import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from "./ProjectTask/ProjectTaskItem";
import axios from "axios";
// import "./mystyle.css";

// /home/kiran/Desktop/work/react/adminlte_react/public/dist/css
export default class RSApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      project_tasks:[]
    };
    
  }
  componentDidMount() {
    // const url = "http://jsonplaceholder.typicode.com/posts";
    // fetch(url, { method: "GET" })
    //   .then(response => response.json())
    //   .then(posts => {
    //     this.setState({ posts: posts });
    //   });
    const res= axios
    .get("http://localhost:8080/api/board/all")
    .then(
      response => { 
        this.setState({ project_tasks: response.data });
        // console.log(this.state.project_tasks);
        }
      );

     
  }


  render() {
    const {project_tasks} = this.state;
    let BoardContent;
    let todoItems=[];
    let inProgressItems=[];
    let doneItems=[];

    const BoardAlgorithm=project_tasks=>{
      if(project_tasks.length<1){
        return (
          <div className="alert alert-info text-center" role="alert">
            No project task on board
          </div>
        )
      }
      else{
        const tasks=project_tasks.map(project_task=>(
          <ProjectTaskItem key ={project_task.id} project_task={project_task}/>
        ));

        for(let i=0;i<tasks.length;i++){
          if(tasks[i].props.project_task.status=="TO_DO"){
            todoItems.push(tasks[i])
          }
          if(tasks[i].props.project_task.status=="IN_PROGRESS"){
            inProgressItems.push(tasks[i])
          }
          if(tasks[i].props.project_task.status=="DONE"){
            doneItems.push(tasks[i])
          }
          console.log(tasks[i].props.project_task.status);
        }

      }
    };
    BoardAlgorithm(project_tasks);
    return (
      
      <div className="container">
        <Link to="/addProjectTask" className="btn btn-primary mb-3">
          <i className="fa fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        {/* {this.state.project_tasks} */}
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="btn btn-primary">
                  <h3>TO DO</h3>
                </div>
              </div>
              {todoItems}
              {
                // <!-- SAMPLE PROJECT TASK STARTS HERE -->
              }{" "}
         {/* <ProjectTaskItem/> */}
              {
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }{" "}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="btn btn-warning">
                  <h3>In Progress</h3>
                </div>
              </div>
              {inProgressItems}
              {
                //     <!-- SAMPLE PROJECT TASK STARTS HERE -->
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
               {/* <ProjectTaskItem/> */}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="btn btn-danger">
                  <h3>Done</h3>
                </div>
              </div>
              {doneItems}
              {
                //     <!-- SAMPLE PROJECT TASK STARTS HERE -->
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
          </div>
        </div>
        {
          //<!-- Backlog ENDS HERE -->
        }{" "}
      </div>
 
    );
  }
}
