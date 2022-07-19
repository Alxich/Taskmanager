const COMPLETE_TASK = 'COMPLETE-TASK',
      DELETE_TASK = 'DELETE-TASK';

const taskReducer = (state, action) => {
    switch (action.type) {
        case COMPLETE_TASK:
            state[action.id].status = 'done';
            return state;

        case DELETE_TASK: 
            state[action.id].status = 'delete';
            return state;
            
        default:
            return state;
    }
}

export const completeTaskAction = (id) => ({type: COMPLETE_TASK, id: id});
export const deleteTaskAction = (id) => ({type: DELETE_TASK, id: id});

export default taskReducer;