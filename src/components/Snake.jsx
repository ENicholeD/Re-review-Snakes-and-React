import React from 'react';
import PropTypes from 'prop-types';

function Snake(props){
    return (
        <div>
            <h3><i>{props.scientificName}</i> - {props.commonName}</h3>
            <p><em>{props.venomous}</em></p>
            <p>{props.eggOrLive}</p>
            <p>{props.size} m</p>
            <p>{props.description}</p>
            <hr/>
        </div>
    );
}
        Snake.propTypes = {
            scientificName: PropTypes.string.isRequired,
            commonName: PropTypes.string.isRequired,
            venomous: PropTypes.string.isRequired,
            eggOrLive: PropTypes.string,
            size: PropTypes.number,
            description: PropTypes.string
        }

        export default Snake;