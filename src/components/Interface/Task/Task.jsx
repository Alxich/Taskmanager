import React from "react";
import {completeTaskAction, deleteTaskAction} from "../../../Redux/taskReducer";
import interactive from "./TaskitemRender";

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.time = this.props.time;    
        this.title = this.props.title;
        this.desc = this.props.desc;
        this.status = this.props.status;
        this.barStatus = this.props.barStatus;
        this.dispatch = this.props.dispatch;
        this.id = this.props.id;
    }

    render() {

        let completeTask = () => {
            this.dispatch(completeTaskAction(this.id))
        }

        let deleteTask = () => {
            this.dispatch(deleteTaskAction(this.id))
        }

        return interactive(this.status, this.barStatus, this.title, this.desc, this.time, deleteTask, completeTask);

    }
}

export default Task;