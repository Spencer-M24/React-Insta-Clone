import React from 'react';
import PropType from 'prop-types';
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div>
            {props.infodata.map(p => 
            <Post username={props.username} 
            postData={p}
          key={`${p.username}${p.timestamp}` }
        />)}
        </div>
    );
}

PostContainer.propTypes = {
    infodata: PropType.array.isRequired
}

export default PostContainer;


