import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  list: [{
    id: 1,
    title: '这一生，我们为什么要这么努力',
    abstract: '现在每次和朋友聊天，发现大家都有来自不同等级的生活压力。结婚了，压力大多都来自家庭和工作；单身的，压力大多还是来自工作。当然，最终都发现，所有...',
    nickname: '小妖的晴天小镇',
    comments: 10,
    like: 190,
    imgUrl: '//upload-images.jianshu.io/upload_images/805783-7ce80c84eb7f0493.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 2,
    title: '这一生，我们为什么要这么努力',
    abstract: '现在每次和朋友聊天，发现大家都有来自不同等级的生活压力。结婚了，压力大多都来自家庭和工作；单身的，压力大多还是来自工作。当然，最终都发现，所有...',
    nickname: '小妖的晴天小镇',
    comments: 10,
    like: 190,
    imgUrl: '//upload-images.jianshu.io/upload_images/805783-7ce80c84eb7f0493.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 3,
    title: '这一生，我们为什么要这么努力',
    abstract: '现在每次和朋友聊天，发现大家都有来自不同等级的生活压力。结婚了，压力大多都来自家庭和工作；单身的，压力大多还是来自工作。当然，最终都发现，所有...',
    nickname: '小妖的晴天小镇',
    comments: 10,
    like: 190,
    imgUrl: '//upload-images.jianshu.io/upload_images/805783-7ce80c84eb7f0493.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}