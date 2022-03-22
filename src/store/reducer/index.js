const initialState = {
    tasks: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] };
        case "COMPLETE_TASK":
            // return { tasks: state.tasks.splice((action.payload, 1)) }
            return {
                tasks: state.tasks.filter((task) => task !== action.payload)
            }

        default:
            return state
    }
}