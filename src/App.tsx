import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";

function App() {
    let Tasks1 = v1();
    let Tasks2 = v1();
    let [todoLists, setTodolists] = useState([
        {
            id: Tasks1,
            title: "What to learn",
            filter: 'All'
        },
        {
            id: Tasks2,
            title: "What to buy",
            filter: 'All'
        }
    ])


    let [Tasks, setTasks] = useState({
        [Tasks1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: false}
        ],
        [Tasks2]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: false}
        ]
    })

    const deleteTasks = (deleteTasksId: string) => {
        setTodolists(todoLists.filter(f => f.id !== deleteTasksId))
    }

    const addTask = (title: string, setTitle: (title: string) => void, setError: (error: string | null) => void, TasksId: string) => {
        let addTaskId = Tasks[TasksId];
        if (title.trim() !== '') {
            let newTask = {id: v1(), title: title, isDone: true}
            Tasks[TasksId] = [newTask, ...addTaskId];
            setTasks({...Tasks})
            setTitle('')//обнуляем инпут после ввода
        } else {
            setError('Title is required')
        }
    }

    let removeTask = (removeId: string, TasksId: string) => {
        let removeTaskId = Tasks[TasksId]
        Tasks[TasksId] = removeTaskId.filter(f => f.id !== removeId);
        setTasks({...Tasks})
    }

    const changeFilter = (filterValue: string, todoListsId: string) => {
        let changeFilterId = todoLists.find(f => f.id === todoListsId);
        if (changeFilterId) {
            changeFilterId.filter = filterValue;
            setTodolists([...todoLists])
        }
        console.log(changeFilterId)

    }

    const changeStatus = (isDoneValue: boolean, idValue: string, TasksId: string) => {
        let changeStatusId = Tasks[TasksId];
        let newTasks = changeStatusId.find(f => f.id === idValue);
        if (newTasks) {
            newTasks.isDone = !isDoneValue;
            setTasks({...Tasks})
        }
    }

    return (
        <div className="App">
            {todoLists.map(m => {
                    let tasksLayer = Tasks[m.id]
                    if (m.filter === 'Active') {
                        tasksLayer = Tasks[m.id].filter(f => f.isDone === false)
                    }
                    if (m.filter === 'Completed') {
                        tasksLayer = Tasks[m.id].filter(f => f.isDone === true)
                    }
                    return (
                        <TodoList
                            id={m.id}
                            title={m.title}
                            Tasks={tasksLayer}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            changeStatus={changeStatus}
                            addTask={addTask}
                            filter={m.filter}
                            deleteTasks={deleteTasks}
                        />
                    )
                }
            )}

        </div>
    );
}

export default App;

//============================
// import React, {useState} from 'react';
// import './App.css';
// import {TodoList} from "./TodoList";
// import {v1} from "uuid";
//
// function App() {
//     let Tasks1 = v1();
//     let Tasks2 = v1();
//     let [todoLists, setTodolists] = useState([
//         {
//             id: Tasks1,
//             title: "What to learn",
//             filter: 'All'
//         },
//         {
//             id: Tasks2,
//             title: "What to buy",
//             filter: 'All'
//         }
//     ])
//
//
//     let [Tasks, setTasks] = useState({
//         [Tasks1]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: false},
//             {id: v1(), title: 'React', isDone: false}
//         ],
//         [Tasks2]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: false},
//             {id: v1(), title: 'React', isDone: false}
//         ]
//     })
//
//
//     const addTask = (title: string, setTitle: (title: string) => void, setError: (error: string | null) => void, TasksId: string) => {
//         let addTaskId = Tasks[TasksId];
//         if (title.trim() !== '') {
//             let newTask = {id: v1(), title: title, isDone: true}
//             Tasks[TasksId] = [newTask, ...addTaskId];
//             setTasks({...Tasks})
//             setTitle('')//обнуляем инпут после ввода
//         } else {
//             setError('Title is required')
//         }
//     }
//
//     let removeTask = (removeId: string, TasksId: string) => {
//         let removeTaskId = Tasks[TasksId]
//         Tasks[TasksId] = removeTaskId.filter(f => f.id !== removeId);
//         setTasks({...Tasks})
//     }
//
//     const changeFilter = (filterValue: string, todoListsId: string) => {
//         let changeFilterId = todoLists.find(f => f.id === todoListsId);
//         if (changeFilterId) {
//             changeFilterId.filter = filterValue;
//             setTodolists([...todoLists])
//         }
//         console.log(changeFilterId)
//
//     }
//
//     const changeStatus = (isDoneValue: boolean, idValue: string, TasksId: string) => {
//         let changeStatusId = Tasks[TasksId];
//         let newTasks = changeStatusId.find(f => f.id === idValue);
//         if (newTasks) {
//             newTasks.isDone = !isDoneValue;
//             setTasks({...Tasks})
//         }
//     }
//
//     return (
//         <div className="App">
//             {todoLists.map(m => {
//                     let tasksLayer = Tasks[m.id]
//                     if (m.filter === 'Active') {
//                         tasksLayer = Tasks[m.id].filter(f => f.isDone === false)
//                     }
//                     if (m.filter === 'Completed') {
//                         tasksLayer = Tasks[m.id].filter(f => f.isDone === true)
//                     }
//                     return (
//                         <TodoList
//                             id={m.id}
//                             title={m.title}
//                             Tasks={tasksLayer}
//                             removeTask={removeTask}
//                             changeFilter={changeFilter}
//                             changeStatus={changeStatus}
//                             addTask={addTask}
//                             filter={m.filter}
//                         />
//                     )
//                 }
//             )}
//
//         </div>
//     );
// }
//
// export default App;