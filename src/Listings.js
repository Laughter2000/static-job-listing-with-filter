import React, { Component } from "react";
import data from "./data.json";
import Avatar from "./Avatar";
import GetAvatar from "./GetAvatar";
// eslint-disable-next-line
import IconRemove from "./images/icon-remove.svg";
import { remove } from "./images/_index";
import "./style.css";

function Filtered(filterList) {
  return function (item) {
    let test = [];
    var i;
    let main = [item.role, item.level, ...item.languages, ...item.tools];
    for (i = 0; i < filterList.length; i++) {
      if (main.includes(filterList[i])) {
        test.push("true");
      }
    }
    return test.length === filterList.length;
  };
}

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      filterList: [],
    };
  }

  filterListing = (item) => {
    if (this.state.filterList.includes(item)) {
    } else {
      this.setState({ filterList: [...this.state.filterList, item] });
    }
  };

  clearFilter = () => {
    this.setState({ filterList: [] });
  };

  removeIndividualFilter = (item) => {
    let updatedFilter = [];
    var i;
    for (i = 0; i < this.state.filterList.length; i++) {
      if (item !== this.state.filterList[i]) {
        updatedFilter.push(this.state.filterList[i]);
      }
    }
    this.setState({ filterList: updatedFilter });
  };

  render() {
    return (
      <div className="listing">
        {(() => {
          if (this.state.filterList.length >= 1) {
            return (
              <div className="card filter-table">
                <div className="filter-table-top">
                  {this.state.filterList.map((item) => (
                    <span
                      key={this.state.filterList.indexOf(item)}
                      className="languages-item filter-item"
                    >
                      {item}
                      <img
                        src={remove}
                        alt="icon-remove"
                        className="icon-remove"
                        onClick={() => this.removeIndividualFilter(item)}
                      />
                      {/* <IconRemove
                        className="icon-remove"
                        onClick={() => this.removeIndividualFilter(item)}
                      /> */}
                    </span>
                  ))}
                </div>
                <span
                  className="filter-clear"
                  onClick={() => this.clearFilter()}
                >
                  Clear
                </span>
              </div>
            );
          }
        })()}

        {this.state.data.filter(Filtered(this.state.filterList)).map((job) => (
          <div
            key={job.id}
            className={(() => {
              if (job.featured) {
                return "card-featured";
              }
              return "card";
            })()}
          >
            <div className="card-top">
              {/* <img src={job.logo} alt="company-logo" className="company-icon" /> */}
              <Avatar
                className="company-icon"
                url={GetAvatar(job.logo)}
                label={`${job.company} logo`}
              />
              <div className="card-header">
                <span className="company">{job.company}</span>
                {(() => {
                  if (job.new) {
                    return <span className="alert new">NEW!</span>;
                  }
                })()}

                {(() => {
                  if (job.featured) {
                    return <span className="alert featured">FEATURED</span>;
                  }
                })()}

                <h3>{job.position}</h3>
                <div className="status-list">
                  <span className="status">{job.postedAt}</span>
                  <span className="circle"></span>
                  <span className="status">{job.contract}</span>
                  <span className="circle"></span>
                  <span className="status">{job.location}</span>
                </div>
              </div>
            </div>
            <div className="profile">
              <span
                className="languages-item"
                onClick={() => this.filterListing(job.role)}
              >
                {job.role}
              </span>
              <span
                className="languages-item"
                onClick={() => this.filterListing(job.level)}
              >
                {job.level}
              </span>
              {job.tools.map((item) => (
                <span
                  key={job.tools.indexOf(item)}
                  className="languages-item"
                  onClick={() => this.filterListing(item)}
                >
                  {item}
                </span>
              ))}
              {job.languages.map((item) => (
                <span
                  key={job.languages.indexOf(item)}
                  className="languages-item"
                  onClick={() => this.filterListing(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Listings;
