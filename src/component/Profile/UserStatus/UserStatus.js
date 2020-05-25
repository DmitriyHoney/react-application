import style from "../UserInfo/UserInfo.module.css";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateUserStatusThunkCallback} from "../../../Redux/profile-reducer";

export class UserStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status,
            editMode: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    onEditMode = () => {
        this.setState({editMode: true});
    }

    offEditMode = (e) => {
        let newStatus = e.target.value;
        this.setState({editMode: false, status: newStatus} );
        this.props.updateUserStatusThunkCallback(newStatus);
    }

    handleInput = (e) => {
        this.setState({status: e.target.value} );
    }


    render() {
        return (
            <div className={style.userInfo__status}>
                <h1 className={style.userInfo__name}>
                    {this.props.name}
                </h1>
               <div>
                   {
                       this.state.editMode
                        ?  <input type="text" onBlur={this.offEditMode} value={this.state.status} onChange={this.handleInput} autoFocus={true}/>
                        : <p className={style.userInfo__twit} onDoubleClick={this.onEditMode}>
                               {this.state.status}
                           </p>
                   }
               </div>
                <span className={style.userInfo__online}>
                online
            </span>
            </div>
        )
    }
}



export default compose(
    connect(null, {updateUserStatusThunkCallback})
)(UserStatus);