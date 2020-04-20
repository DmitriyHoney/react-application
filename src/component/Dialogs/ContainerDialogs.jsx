import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageCreateAction, updateMessageTextareaCreateAction} from "../../Redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageTextarea: (text) => {
            dispatch(updateMessageTextareaCreateAction(text));
        },
        addNewMessage: () => {
            dispatch(addNewMessageCreateAction());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


