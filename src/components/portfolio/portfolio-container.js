import React, { Component } from "react";
import axios from 'axios';


import PortfolioItem from "./portfolio-item";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                // { title: "Quip", category: "eCommerce", slug: 'quip' },
                // { title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' },
                // { title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe' },
                // { title: "SwingAway", category: "eCommerce", slug: 'swingaway' }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
        // this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }
  
    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item => {
          return item.category === filter;
        })
      });
    }

    getPortfolioItems() {
        axios.get("https://allisdust.devcamp.space/portfolio/portfolio_items")
        .then(response => {
            this.setState({
              data: response.data.portfolio_items  
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
  
    portfolioItems() {
        // Data that we'll need:
        // - background image: thumb image url
        // - log
        // - description
        // - id

      return this.state.data.map(item => {
        return (
            <PortfolioItem
            key={item.id}
            // title={item.name}
            // url={item.url}
            // slug={item.id}
            item={item}
          />
        );
      });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
  
    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

    //   this.getPortfolioItems();
  
      return (
        <div>
          <h2>{this.state.pageTitle}</h2>
  
          <button onClick={() => this.handleFilter("eCommerce")}>
            eCommerce
          </button>
          <button onClick={() => this.handleFilter("Scheduling")}>
            Scheduling
          </button>
          <button onClick={() => this.handleFilter("Enterprise")}>
            Enterprise
          </button>
        
        <div className="portfolio-items-wrapper">
          {this.portfolioItems()}
          </div>
        </div>
      );
    }
  }