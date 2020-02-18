import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
    let _title = null;
    let _description = null;
    // let _karma = null;


    function handleNewPostSumbission(event){
        event.preventDefault();
        props.onNewTicketCreation({title: _title.value, description: _description.value, id: v4()});
        _title.value = '';
        _description.value = '';
    }


    return (
      <div>
          <form onSubmit={handleNewPostSumbission}> 
              <input
                  type='text'
                  id='title'
                  placeholder='Title'
                  ref={(input) => {_title = input;}}/>
              <input
                  type='text'
                  id='decription'
                  placeholder='Description'
                  ref={(input) => {_description = input;}}/>
              <button type='submit'>Post!</button>
            </form>
        </div>
         
    );
}

NewPostForm.PropTypes = {
    onNewTicketCreation: PropTypes.func
};


export default NewPostForm;