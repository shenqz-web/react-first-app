import React, { Component } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  Homeright
} from './style'

class Home extends Component {
  componentDidMount() {
    console.log(process.env)
    if(process.env.NODE_ENV === 'development') {
      console.log('development')
    } else {
      console.log('prod')
    }
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='我是banner图' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <Homeright>
          <Recommend />
          <Writer />
        </Homeright>
      </HomeWrapper>
    )
  }
}

export default Home;