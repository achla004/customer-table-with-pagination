import "./Style.css";
import React, { Component } from "react";
import deleteicon from "../Icons/close-x-outline-16px.svg"
import hideicon from "../Icons/eye-hide-outline-16px.svg"
import showicon from "../Icons/eye-show-outline-16px.svg"
import Pagination from "../lib/view-coms/Pagination";
import { replaceUrlParams } from "../lib/utils/replaceUrlParams/replaceUrlParams";
import data from "../mock/Data.json";

const itemPerPage = 5;


class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: data,
      currentPage: Number(new URLSearchParams(window.location.search).get("page")) || 1,


    }
  }

  handleChange = (index) => {
    const { currentData } = this.state;
    currentData[index].hide = !currentData[index].hide;
    this.setState({
      currentData
    })

  }

  onDelete = (index) => {
    const { currentData } = this.state;
    currentData.splice(index, 1);
    this.setState({ currentData });
  }

  handlePaginationClick = (newPage) => {
    replaceUrlParams({ queryParam: "page", value: newPage });
    this.setState({
      currentPage: (Number(newPage))
    });
  };

  handleCustomerdata = (data) => {
    this.props.history.push(`listing/${data.id}`)
  }

  render() {
    const { currentData, currentPage } = this.state;
    const urlParams = new URLSearchParams(window.location.search);
    const urlParamsPage = Number(urlParams.get("page"));
    const currentPage1 = urlParamsPage ? urlParamsPage : 1
    const indexOfLastRow = currentPage1 * itemPerPage;
    const indexOfFirstRow = indexOfLastRow - itemPerPage;
    const newcurrentData = currentData.slice(indexOfFirstRow, indexOfLastRow);


    return (
      <div className="table-root">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th >Email</th>
              <th ></th>
            </tr>
          </thead>
          <tbody>
            {newcurrentData ?.map((row, index) => (
              <>
                {!row.hide ?
                  <tr onClick={(event) => {
                    event.stopPropagation();
                    this.handleCustomerdata(row);

                  }}>
                    <td >{row.id}</td>
                    <td >{row.name}</td>
                    <td>{row.email}</td>
                    <td>
                      <div className="display-flex hidebutton">
                        <div style={{ cursor: "pointer" }}>
                          <img
                            alt=""
                            src={row.hide ? showicon : hideicon}
                            height="16"
                            className=""
                            onClick={(event) => {
                              event.stopPropagation();
                              this.handleChange(index);
                            }

                            }
                          ></img>
                        </div>
                        <div className="delete" style={{ cursor: "pointer" }}>
                          <img
                            alt=""
                            src={deleteicon}
                            height="16"
                            onClick={(event) => {
                              event.stopPropagation();
                              this.onDelete(index);
                            }
                            }
                          ></img>
                        </div>
                      </div>

                    </td>
                  </tr>
                  :
                  <tr className="disable">
                    <td ></td>
                    <td ></td>
                    <td></td>
                    <td >
                      <div className="display-flex">
                        <div>
                          <img
                            alt=""
                            src={row.hide ? showicon : hideicon}
                            height="16"
                            className=""
                            onClick={(event) => {
                              event.stopPropagation();
                              this.handleChange(index)
                            }

                            }
                          ></img>
                        </div>
                      </div>

                    </td>
                  </tr>
                }
              </>
            ))}
          </tbody>
        </table>
        <div className="table-pagination">
          <Pagination
            currentPage={currentPage}
            dataLength={currentData.length}
            itemPerPage={itemPerPage}
            paginationOnClick={this.handlePaginationClick}
          />
        </div>
      </div >

    );
  }
}

export default Customer;









