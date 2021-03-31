import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  Ping() {
    console.log("Pong");
  }
  Clear() {
    console.log("Clear");
  }
  OptimizeWaste() {
    console.log("OptimizeWaste");
  }
  OptimizeCount() {
    console.log("OptimizeCount");
  }
  CountByRecipe() {
    console.log("CountByRecipe");
  }

  render() {
    return (
      <div>
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.Ping();
          }}
        >
          <i className="material-icons">Ping </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.Clear();
          }}
        >
          <i className="material-icons">Clear </i>
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            this.OptimizeWaste();
          }}
        >
          <i className="material-icons">OptimizeWaste </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.OptimizeCount();
          }}
        >
          <i className="material-icons">OptimizeCount </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.CountByRecipe();
          }}
        >
          <i className="material-icons">CountByRecipe </i>
        </button>
        <br />
      </div>
    );
  }
}

export default connect()(Home);
