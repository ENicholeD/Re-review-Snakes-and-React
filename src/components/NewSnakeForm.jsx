import React from 'react';
import PropTypes from 'prop-types';

function NewSnakeForm(props) {
    let scientificName = null;
    let commonName = null;
    let venomous = false;
    let eggOrLive = null;
    let size = 0;
    let description = null;
    
    function handleNewSnakeFormSubmission(event) {
        event.preventDefault();
        props.onNewSnakeCreation({scientificName: _scientificName.value, commonName: _commonName.value, venomous: _venomous.value, eggOrLive: _eggOrLive.value, size: _size.value, description: _description.value});
        _scientificName.value = '';
        _commonName.value = '';
        _venomous.value = false;
        _eggOrLive.value = '';
        _size.value = 0;
        _description.value = '';
    }
    
    return (
        <div>
            <form onSubmit={handleNewSnakeFormSubmission}>
                <input
                type= 'text'
                id= 'scientificName'
                placeholder= 'Eunectes murinus'
                ref={(input) =>{_scientificName = input;}}/>
                <input
                type= 'text'
                id= 'commonName'
                placeholder= 'Green Anaconda'
                ref={(input) =>{_commonName = input;}}/>
                <input
                type= 'radio'
                id= 'venomous'
                ref={(input) =>{_venomous = input;}}/>
                <input
                type= 'text'
                id= 'eggOrLive'
                placeholder= 'live bearer'
                ref={(input) =>{_eggOrLive = input;}}/>
                <input
                type= 'number'
                id= 'size'
                ref={(input) =>{_size = input;}}/>
                <input
                type= 'text'
                id= 'description'
                placeholder= 'green back, yellow belly, black spots on back, ...'
                ref={(input) =>{_description = input;}}/>
            </form>
        </div>
    );
}

NewSnakeForm.propTypes = {
    onNewSnakeCreation: PropTypes.func
};

export default NewSnakeForm;