import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusThunk(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                    :
                <div>
                    <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;