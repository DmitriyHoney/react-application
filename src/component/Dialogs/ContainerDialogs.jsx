import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageCreateAction, updateMessageTextareaCreateAction} from "../../Redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../utils/selectors/selectors";

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state)
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


