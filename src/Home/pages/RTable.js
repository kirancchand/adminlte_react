import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ExportToExcel from "./ExportToExcel";
export default class RTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/posts";
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }
  deleteRow(id) {
    console.log(id);
  }
  render() {
    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "ID",
        accessor: "id",
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Content",
        accessor: "body",
        sortable: false
      },
      {
        Header: "Action",
        Cell: props => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => {
                this.deleteRow(props.original.id);
              }}
            >
              Delete
            </button>
          );
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ];
    return (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              {/* /.box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Data Table With React</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <ReactTable
                    columns={columns}
                    data={this.state.posts}
                    filterable
                    defaultPageSize={5}
                    noDataText={"Please Wait"}
                  >
                    {(state, filtredData, instance) => {
                      this.reactTable = state.pageRows.map(post => {
                        return post._original;
                      });
                      return (
                        <div>
                          {filtredData()}
                          <ExportToExcel posts={this.reactTable} />
                        </div>
                      );
                    }}
                  </ReactTable>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
      </div>
   
   );
  }
}
