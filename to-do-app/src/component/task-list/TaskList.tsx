import './TaskList.css';
import {Task} from "../task/Task.tsx";
import {useTaskDispatcher, useTaskList} from "../../context/TaskContext.tsx";
import {useEffect} from "react";
import {useUser} from "../../context/UserContext.tsx";
import {getAllTasks} from "../../service/task-service.tsx";
export function TaskList() {
    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    useEffect(() => {
        getAllTasks(user!.email!).then(taskList => {
            taskDispatcher({type: 'set-list', taskList});
        }).catch(err => {
            alert("Failed to load tasks");
        })
        return ()=>{
            taskDispatcher({type: 'set-list', taskList: []});
        }
    }, []);

    return (
        <>
            {taskList.map(task =>
                <Task key={task.id} {...task} />
            )}
        </>
    );
}