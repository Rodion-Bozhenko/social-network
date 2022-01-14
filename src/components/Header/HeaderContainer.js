import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserThunk} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunk()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserThunk})(HeaderContainer)

