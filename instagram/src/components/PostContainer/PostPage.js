
import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

import '../../App.css';



class PostPage extends Component {
  constructor(){
    super();
    this.state = {
      infodata: [],
      filteredPosts: [],
      username: ''
    }
  }

  componentDidMount(){
    this.setState({
      infodata: dummyData,
      username: window.localStorage.getItem('username')
    })
  }

  handleSearch = e => {
    const posts = this.state.infodata.filter(a => {
      if (a.username.includes(e.target.value)){
        return a;
      }
        return a;
    });
    this.setState({
      filteredPosts: posts
    })
  }

  handleLogout = () => {
      window.localStorage.setItem('username', '');
      window.location.reload();
  }

  render() {
    return (
      <div className="PostPage">
        <SearchBar handleSearch={this.handleSearch} 
        handleLogout={this.handleLogout}
        />
        <PostContainer
        username={this.state.username} 
          infodata={this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.infodata
        } 
        />
      </div>
    );
  }
}

export default PostPage;