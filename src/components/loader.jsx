

import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
        <div>
          <div id="overlayer" />
          <div className="loader">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
  };