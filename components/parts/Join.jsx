import React, { Component } from 'react';
class Join extends Component {
    state = {  }
    nameInput = React.createRef()
    joinPresentation = (e) => {
        e.preventDefault();
        let memberName = this.nameInput.current.value.trim();
        this.props.emit('join', {name: memberName});
    }
    render() { 
        return ( 
            <form onSubmit={this.joinPresentation}>
                <label htmlFor="">Full Name</label>
                <input ref={this.nameInput} type="text" className="form-control" placeholder="Enter Full Name" required />
                <button className="btn btn-primary mt-3">Join</button>
            </form>
         );
    }
}
 
export default Join;