import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt={item.get('title')} />
              <span>{item.get('title')}</span>
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}

export default connect(mapStateToProps, null)(Topic);