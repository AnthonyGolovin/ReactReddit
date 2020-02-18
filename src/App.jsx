import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import FrontPage from './components/FrontPage';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';

class App extends React.Component() {

    constructor(props){
        super(props);
        this.state = {
            masterPostList : []
        };
        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    }


    handleAddingNewPostToList(newPost){
        var newMasterPostToList = this.state.masterPostList.slice();
        newMasterPostToList.push(newPost);
        this.setState({masterPostList: newMasterPostToList});
    }

    
    return (
      <div className="App">
          <FrontPage/>
          <Switch>
              <Route exact path='/' component={FrontPage} />
              <Route exact path='/newpost' component={NewPostForm} />
            </Switch>
        </div>
    );
}

export default App;
