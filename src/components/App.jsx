import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewSnakeControl from '/NewSnakeControl';
import SnakeList from './SnakeList';
import Header from './Header';
class App extends React.Component {
    construct (props) {
        super(props);
        this.state = {
            masterSnakeList: []
        };
        this.handleAddingNewSnakeToList = this.handleAddingNewSnakeToList.bind(this);
    }
    handleAddingNewSnakeToList(newSnake) {
        var newMasterSnakeList = this.state.masterSnakeList.slice();
        newMasterSnakeList.push(newSnake);
        this.setState({masterSnakeList: newMasterSnakeList});
    }
    render(){
        return (
            <div>
                <Switch>
                    <Header/>
                    <Route exact path='/' render={()=><SnakeList snakelist={this.state.masterSnakeList}/>}/>
                    <Route path='/newsnake' render={()=><NewSnakeControl onNewSnakeCreation={this.handleAddingNewSnakeToList} />}/>
                </Switch>
            </div>
        );
    }
}
export default App;