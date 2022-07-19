import React from "react";
import { addTaskAction, updateTaskTextAction } from "../../../Redux/taskFormReducer";

class FormPosting extends React.Component {
    constructor(props) {
        super(props);

        this.taskForm = this.props.taskForm;
        this.newMessageTitle = this.taskForm.newMessageTitle;
        this.newMessageText = this.taskForm.newMessageText;
        this.dispatch = this.props.dispatch;
    }

    render() {

        let newTaskTitleElement = React.createRef(),
            newTaskTextElement = React.createRef();

        let addingFunction = (e) => {
            e.preventDefault();

            let title = newTaskTitleElement.current.value,
                text = newTaskTextElement.current.value;

            if(text && title) {
                this.dispatch(addTaskAction());
            }

            newTaskTitleElement.current.value = '';
            newTaskTextElement.current.value = '';
        }

        let changeTaskValue = () => {
            let newTitle = newTaskTitleElement.current.value;
            let newText = newTaskTextElement.current.value;
            this.dispatch(updateTaskTextAction(newTitle, newText));
        }

        return(
            <div className="form-posting">
                <div className="container">
                    <div className="inputs-cn">
                        <input type="text" onChange={changeTaskValue} placeholder={this.taskForm.placeholder} ref={newTaskTitleElement} value={this.newMessageTitle} />
                        <input type="text" onChange={changeTaskValue} placeholder={this.taskForm.placeholder} ref={newTaskTextElement} value={this.newMessageText} />
                    </div>
                    <input value={this.taskForm.value} onClick={ addingFunction } type="submit" />
                </div>
            </div>
        )
    }
}

export default FormPosting;