import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageCreateAction, updateMessageTextareaCreateAction} from "../../Redux/messages-reducer";

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

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ContainerDialogs;