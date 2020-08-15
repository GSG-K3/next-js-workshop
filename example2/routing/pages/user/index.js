import React, { Component } from "react";
import Layout from "../../components/layouts/layout";

export default class User extends Component {

  // by commenting this fn the user object will be empty after refreshing the page
  static async getInitialProps({ query }) {
    console.log(query);
    return query;
  }
  render() {
    return (
      <div>
        <Layout>
          <h1>This is {this.props.name} page </h1>
        </Layout>
      </div>
    );
  }
}
