import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {changeCurrentPage, followOnUser, getUsers, unFollowOnUser} from "../../Redux/users-reducer";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUsersPageSelector} from "../../utils/selectors/selectors";

let mapStateToProps = (state) => {
    return {
        usersPage: getUsersPageSelector(state),
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers
    }
};

class ContainerUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsers)
    }

    changePage = (newPageNumber) => {
        this.props.changeCurrentPage(newPageNumber);
    }

    followOnUser = (userId) => {
        this.props.followOnUser(userId);
    }

    unFollowOnUser = (userId) => {
        this.props.unFollowOnUser(userId);
    }


    render() {
        if (this.props.usersPage.items) {
            return(
                <Users
                    {...this.props.usersPage}
                    followOnUser={this.followOnUser}
                    unFollowOnUser={this.unFollowOnUser}
                    changePage={this.changePage}
                />
            )
        }
        else return <Preloader/>
    }
}
export default compose(
    connect(mapStateToProps, {getUsers, changeCurrentPage, followOnUser, unFollowOnUser}),
    withAuthRedirect
)(ContainerUsers)
