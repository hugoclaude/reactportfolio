import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>

            <a href="/">Wrong  Home</a>

                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null}
            </div>
        );
    }
}