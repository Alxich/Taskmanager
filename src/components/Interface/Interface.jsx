import React from "react";
import FormPosting from "./FormPosting/FormPosting";
import InfoBar from "./InfoBar/InfoBar";
import Task from "./Task/Task";

class Interface extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
        this.status = this.props.status;
        this.taskStatusInterface = this.props.taskStatusInterface;
        this.infoBar = this.state.infoBar;
        this.calendar = this.infoBar.calendar;
        this.tasks = this.state.tasks;
        this.taskAmountTitle = this.infoBar.taskAmount.title;
        this.taskAmount = this.tasks;
        this.taskForm = this.state.taskForm;
        this.dispatch = this.props.dispatch;
    }

    render() {

        const tasks = this.tasks
            .map ( (item, i) => <Task 
                time={item.createTime} 
                title={item.title} 
                desc={item.desc} 
                status={item.status} 
                barStatus={this.status} 
                dispatch={this.dispatch}
                key={i}
                id={i}
            /> );

            let classShowsInput = () => {
                if(this.status === 'complete') {
                    return 'is_has_input';
                }
            }

        return(
            <div id="interface-content" className={classShowsInput()} >
                <InfoBar calendar={this.calendar} taskAmount={this.taskAmount} taskAmountTitle={this.taskAmountTitle} />
                <div className="container">
                    <div className="main-title">
                        <h1>{this.taskStatusInterface.title}</h1>
                    </div>
                    <div className="description">
                        <p>{this.taskStatusInterface.desc}</p>
                    </div>
                    <div className="task-cn">
                        {tasks}
                    </div>
                </div>
                <FormPosting taskForm={this.taskForm} dispatch={this.dispatch} />
            </div>
        )
    }
}

export default Interface;