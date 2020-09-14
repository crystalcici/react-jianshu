import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
class List extends  Component {
    render() {
        return (
            <div>
              <ListItem>
              <img className='pic' alt='' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
              <ListInfo>
                <h3 className='title'>
                无性婚姻能长久吗
                </h3>
                <p className='desc'>
                我内心是一个特别保守的人，打这个题目之时都考虑了好久，因为觉得这个话题还是太敏感了。 刚开始不敢写这方面的话题，觉得太难以启齿了，于是写之前还特...
                </p>
              </ListInfo>
            </ListItem>
            </div>
        )
    }
}
export default List;
