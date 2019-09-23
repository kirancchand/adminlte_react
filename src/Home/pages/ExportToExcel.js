import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
export default class ExportToExcel extends Component {
  render() {
    return (
      <div>
        <ReactHTMLTableToExcel
          id="table_xls"
          table="table-to-xls"
          filename="filtredData"
          sheet="tablexls"
          buttonText="Export"
        />
        <table hidden={true} id="table-to-xls">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
