import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {TaskDTO} from "../dto/TaskDTO.ts";
import {act} from "react-dom/test-utils";

type Action = {
    type: "add" | "delete" | "update" | "set-list",
    [property: string]: any
}

const TaskContext = createContext<TaskDTO[]>([]);
const TaskDispatchContext = createContext<React.Dispatch<Action>>(() => {
});

function taskReducer(taskList: TaskDTO[], action : Action) {
    if (action.type === "add") {
        return [...taskList, action.task];
    }else if (action.type === "delete") {
        return taskList.filter(task => task.id !== action.id);
    }else if (action.type === "update") {
        return taskList.map(task => {
            if (task.id === action.task.id) {
                return {...task, status: !task.status}
            }
            return task;
        })
    }else if (action.type === "set-list"){
        return action.taskList;
    } else {
        return taskList;
    }
}

export function TaskProvider({ children}: { children: ReactNode }) {
    const [taskList, taskDispatcher] = useReducer(taskReducer, []);

    return (<TaskContext.Provider value={taskList}>
        <TaskDispatchContext.Provider value={taskDispatcher}>
            {children}
        </TaskDispatchContext.Provider>
    </TaskContext.Provider>)
}

export function useTaskList() {
    return useContext(TaskContext);
}

export function useTaskDispatcher(){
    return useContext(TaskDispatchContext);
}