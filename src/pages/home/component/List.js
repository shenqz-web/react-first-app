import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListItemInfo } from '../style'

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((item) => (
            <ListItem key={item.get('id')}>
              <img className="wrap-img" src={item.get('imgUrl')} alt={item.get('title')} />
              <ListItemInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="abstract">{item.get('abstract')}</p>
                <div className="meta">
                  <a className="nickname">{item.get('nickname')}</a>
                  <a className="nickname">{item.get('comments')}</a>
                  <span>{item.get('like')}</span>
                </div>
              </ListItemInfo>
            </ListItem>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'list']),
  }
}

export default connect(mapStateToProps, null)(List);