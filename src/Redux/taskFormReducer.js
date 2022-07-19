const ADD_TASK = 'ADD-TASK',
      UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEST';

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}

const taskFormReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                title: state.newMessageTitle,
                desc: state.newMessageText,
                createTime: formatAMPM(new Date()),
                status: 'complete',
            }
            state.push(newTask);
            state.newMessageTitle = '';
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_TASK_TEXT:
            state.newMessageTitle = action.newTitle;
            state.newMessageText = action.newText;
            return state;

        default: 
            return state;
            
    }
}

export const addTaskAction = () => ({type: ADD_TASK});
export const updateTaskTextAction = (newTitle, newText) => ({type: UPDATE_NEW_TASK_TEXT, newTitle: newTitle, newText: newText});

export default taskFormReducer;