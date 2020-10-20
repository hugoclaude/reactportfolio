import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleSuccessfulFormSubmissionError = this.handleSuccessfulFormSubmissionError.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    //TODO
    //update portfolio item state
    //add portfolio item list
  }

  handleSuccessfulFormSubmissionError(error) {
    console.log("handleSuccessfulFormSubmissionError", error);
  }

  getPortfoilioItems() {
    axios
      .get("https://allisdust.devcamp.space/portfolio/portfolio_items", {
        withCredentials : true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfoilioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleSuccessfulFormSubmissionError={this.handleSuccessfulFormSubmissionError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}