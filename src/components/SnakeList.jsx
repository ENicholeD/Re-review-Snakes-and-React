import React from 'react';
import Snake from './Snake';
import PropTypes from 'prop-types';

function SnakeList(props){

    return (
        <div>
            <hr/>
            {props.snakeList.map((snake, index) =>
            <Snake scientificName={snake.scientificName}
            commonName={snake.commonName}
            venomous={snake.venomous}
            eggOrLive={snake.eggOrLive}
            size={snake.size}
            description={snake.description}
            key={index}
            />
            )}
        </div>
    );
}

snakeList.PropTypes = {
    snakeList: PropTypes.array
};

export default SnakeList;