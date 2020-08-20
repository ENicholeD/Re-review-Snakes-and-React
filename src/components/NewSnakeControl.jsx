import React from 'react';
import NewSnakeForm from './NewSnakeForm';
import PropTypes from 'prop-types';

class NewSnakeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage:true
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }
    handleTroubleshootingConfirmation() {
        this.setState({formVisibleOnPage: true});
    }
    
    render() {
        let currentlyVisibleContent=null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewSnakeForm onNewSnakeCreation= {this.props.onNewSnakeCreation}/>;
        } else {
            return(
                <h1>Something went wrong</h1>
            );
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        )
    }
}
NewSnakeControl.PropTypes = {
 onNewSnakeCreation: PropTypes.func
};
export default NewSnakeControl;