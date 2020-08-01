import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/layouts/layout";
import Link from "next/link";

export default class Github extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/jood80/repos");
    const data = await res.json();
    return { repos: data };
  }
  render() {
    return (
      <Layout>
        <div>
          <img src={this.props.repos[0].owner.avatar_url} alt="avatar" />
          <ul>
            {this.props.repos.map((repo) => (
              <Link
                href={`/github/repo?user=jood80&repo=${repo.name}`}
                as={`/github/jood80/${repo.name}`}
              >
                <a>
                  {" "}
                  <li>{repo.name}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}
