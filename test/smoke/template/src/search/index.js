"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/favicon.png';
import '../../common/index';
import './search.less';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Text: null
    }
  }
  loadComponent () {
    import('./test').then((Text) => {
      this.setState({Text:Text.default})
    })
  }
  render () {
    const { Text } = this.state;
    return <div className="search-text">
      搜索页
       {
        Text ? <Text/> : null
       }
      <img src={logo} onClick={this.loadComponent.bind(this)}/>
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)