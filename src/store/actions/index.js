export const ADD_TASK = "ADD_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"

export const addTask = task => { return { type: "ADD_TASK", payload: task } }
export const completeTask = key => { return { type: "COMPLETE_TASK", payload: key } }