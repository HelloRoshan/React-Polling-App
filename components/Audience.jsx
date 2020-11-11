import React, { Component } from 'react';
import Display from './parts/Display.jsx';
import Join from './parts/Join.jsx';
class Audience extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Display if={this.props.status === 'connected'} >
                    <Display if={this.props.member.name}>
                        <h2>Welcome {this.props.member.name} </h2>
                        <p>{this.props.audience.length} audience Members connected</p>
                        <p>Questions will appear here</p>
                    </Display>
                    <Display if={!this.props.member.name}>
                        <h2>Join the session</h2>
                        <Join emit={this.props.emit} />
                    </Display>
                </Display>
            </div>
         );
    }
}
 
export default Audience;