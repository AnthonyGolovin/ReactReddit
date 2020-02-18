import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
    return (
      <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <hr/>
        </div>
    );
}
//this is the display for each ticket


Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Post;




