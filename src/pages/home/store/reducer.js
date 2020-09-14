import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },{
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }],
  articleList: []
});

export default (state = defaultState, action) => {
  // immutable的set方法会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    default:
      return state
  }
}