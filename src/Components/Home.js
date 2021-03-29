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
          <i class="material-icons">Ping </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.Clear();
          }}
        >
          <i class="material-icons">Clear </i>
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            this.OptimizeWaste();
          }}
        >
          <i class="material-icons">OptimizeWaste </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.OptimizeCount();
          }}
        >
          <i class="material-icons">OptimizeCount </i>
        </button>
        <br />
        <br />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
            this.CountByRecipe();
          }}
        >
          <i class="material-icons">CountByRecipe </i>
        </button>
        <br />
      </div>
    );
  }
}

export default connect()(Home);
