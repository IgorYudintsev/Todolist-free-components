import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import {Input} from "./components/Input";

type todolistsType = {
    id: string
    title: string
    filter: string
}
const Todolist1 = v1();
const Todolist2 = v1();

function App() {
    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {
            id: Todolist1,
            title: 'What to learn',
            filter: 'All'
        },
        {
            id: Todolist2,
            title: 'What to buy',
            filter: 'All'
        },
    ])

    let [Tasks, setTasks] = useState(
        {
            [Todolist1]: [
                {id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: false},
                {id: v1(), title: 'React', isDone: false}
            ],
            [Todolist2]: [
                {id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: false},
                {id: v1(), title: 'React', isDone: false}
            ]
        });
    const addTodolist = (title: string) => {
        let newTodolistId = v1();
        let newTodolist: todolistsType = {
            id: newTodolistId,
            title: title,
            filter: 'All'};
        setTodolists([ ...todolists,newTodolist])
        setTasks({...Tasks, [newTodolistId]: []})
    }

    const RemoveTodolist = (todolistsID: string) => {
        console.log(todolistsID);
        setTodolists(todolists.filter(f => f.id !== todolistsID))
    }
    const saveNewTitleTodolist=(newTitle: string,todolistsID:string)=>{
      let todolist= todolists.find(f=>f.id==todolistsID);
      if(todolist){
          todolist.title=newTitle;
          setTodolists([...todolists])
      }
    }
    const addTask = (title: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        if (title.trim() !== '') {
            let newTasks = {id: v1(), title: title, isDone: true}
            Tasks[todolistsID] = [newTasks, ...todolist]
            setTasks({...Tasks})
        }
    }
    const RemoveTask = (valueId: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        Tasks[todolistsID] = todolist.filter(f => f.id !== valueId)
        setTasks({...Tasks});
    }
    const TaskFilter = (titleValue: string, todolistsId: string) => {
        let todolist = todolists.find(f => f.id == todolistsId);
        if (todolist) {
            todolist.filter = titleValue;
            setTodolists([...todolists])
        }
    }
    const changeStatus = (CheckBoxId: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        let changeStatusValue = Tasks[todolistsID].find(f => f.id === CheckBoxId);
        if (changeStatusValue) {
            changeStatusValue.isDone = !changeStatusValue.isDone
            setTasks({...Tasks})
        }
    }
    const saveNewTitle = (title: string, todolistsID: string, TasksID: string) => {
        let todolist = Tasks[todolistsID];
        let task=todolist.find(f=>f.id===TasksID);
        if(task){
         task.title=title
            setTasks({...Tasks})
        }
    }


    return (
        <div className="App">
            <Input callBack={addTodolist}/>
            {todolists.map(m => {
                let prokladka = Tasks[m.id];
                if (m.filter === 'Active') {
                    prokladka = Tasks[m.id].filter(f => f.isDone === false)
                }
                if (m.filter === 'Completed') {
                    prokladka = Tasks[m.id].filter(f => f.isDone === true)
                }
                return (
                    <TodoList
                        id={m.id}
                        title={m.title}
                        Tasks={prokladka}
                        addTask={addTask}
                        RemoveTask={RemoveTask}
                        TaskFilter={TaskFilter}
                        Filter={m.filter}
                        changeStatus={changeStatus}
                        RemoveTodolist={RemoveTodolist}
                        saveNewTitle={saveNewTitle}
                        saveNewTitleTodolist={saveNewTitleTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;

//========================================
// import React, {useState} from 'react';
// import './App.css';
// import {TodoList} from "./TodoList";
// import {v1} from "uuid";
// import {Input} from "./components/Input";
// import {log} from "util";
//
//
// type todolistsType = {
//     id: string
//     title: string
//     filter: string
// }
// const Todolist1 = v1();
// const Todolist2 = v1();
//
// function App() {
//     let [todolists, setTodolists] = useState<Array<todolistsType>>([
//         {
//             id: Todolist1,
//             title: 'What to learn',
//             filter: 'All'
//         },
//         {
//             id: Todolist2,
//             title: 'What to buy',
//             filter: 'All'
//         },
//     ])
//
//     let [Tasks, setTasks] = useState(
//         {
//             [Todolist1]: [
//                 {id: v1(), title: 'HTML&CSS', isDone: true},
//                 {id: v1(), title: 'JS', isDone: false},
//                 {id: v1(), title: 'React', isDone: false}
//             ],
//             [Todolist2]: [
//                 {id: v1(), title: 'HTML&CSS', isDone: true},
//                 {id: v1(), title: 'JS', isDone: false},
//                 {id: v1(), title: 'React', isDone: false}
//             ]
//         });
//     const addTodolist = (title: string) => {
//         let newTodolistId = v1();
//         let newTodolist: todolistsType = {id: newTodolistId, title: title, filter: 'All'};
//         setTodolists([newTodolist, ...todolists])
//         setTasks({...Tasks, [newTodolistId]: []})
//     }
//     const RemoveTodolist = (todolistsID: string) => {
//         console.log(todolistsID);
//         setTodolists(todolists.filter(f => f.id !== todolistsID))
//     }
//     const addTask = (title: string, todolistsID: string) => {
//         let todolist = Tasks[todolistsID];
//         if (title.trim() !== '') {
//             let newTasks = {id: v1(), title: title, isDone: true}
//             Tasks[todolistsID] = [newTasks, ...todolist]
//             setTasks({...Tasks})
//         }
//     }
//     const RemoveTask = (valueId: string, todolistsID: string) => {
//         let todolist = Tasks[todolistsID];
//         Tasks[todolistsID] = todolist.filter(f => f.id !== valueId)
//         setTasks({...Tasks});
//     }
//     const TaskFilter = (titleValue: string, todolistsId: string) => {
//         let todolist = todolists.find(f => f.id == todolistsId);
//         if (todolist) {
//             todolist.filter = titleValue;
//             setTodolists([...todolists])
//         }
//     }
//     const changeStatus = (CheckBoxId: string, todolistsID: string) => {
//         let todolist = Tasks[todolistsID];
//         let changeStatusValue = Tasks[todolistsID].find(f => f.id === CheckBoxId);
//         if (changeStatusValue) {
//             changeStatusValue.isDone = !changeStatusValue.isDone
//             setTasks({...Tasks})
//         }
//     }
//     const saveNewTitle = (title: string, todolistsID: string, TasksID: string) => {
//         let todolist = Tasks[todolistsID];
//         let task=todolist.find(f=>f.id===TasksID);
//         if(task){
//             task.title=title
//             setTasks({...Tasks})
//         }
//     }
//
//     return (
//         <div className="App">
//             <Input callBack={addTodolist}/>
//             {todolists.map(m => {
//                 let prokladka = Tasks[m.id];
//                 if (m.filter === 'Active') {
//                     prokladka = Tasks[m.id].filter(f => f.isDone === false)
//                 }
//                 if (m.filter === 'Completed') {
//                     prokladka = Tasks[m.id].filter(f => f.isDone === true)
//                 }
//                 return (
//                     <TodoList
//                         id={m.id}
//                         title={m.title}
//                         Tasks={prokladka}
//                         addTask={addTask}
//                         RemoveTask={RemoveTask}
//                         TaskFilter={TaskFilter}
//                         Filter={m.filter}
//                         changeStatus={changeStatus}
//                         RemoveTodolist={RemoveTodolist}
//                         saveNewTitle={saveNewTitle}
//                     />
//                 )
//             })}
//
//         </div>
//     );
// }
//
// export default App;
