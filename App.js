import React ,{Component} from 'react';
var Profile = require('./component');
import names from './names';


class user extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'anant',
                    username: 'kumar'
                }
            ]
        };
    }

    render()
    {
        return (

            <names data = {this.state.data} />
        )
    }
}


class App extends React.Component{
    render() {
        return (
            <div className='mainComponent'> hello react training
            <Profile/>
                <div>
                <user names={names}/>
                </div>
            </div>
        )
    }
}

export default App;