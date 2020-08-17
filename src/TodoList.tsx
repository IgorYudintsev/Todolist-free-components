import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {CheckBox} from "./components/Checkbox";
import {EditableSpan} from "./components/EditableSpan";

type titleType = {
    id: string
    title: string
    Tasks: Array<arrayType>
    addTask: (title: string, todolistsID: string) => void
    RemoveTask: (id: string, todolistsID: string) => void
    TaskFilter: (title: string, todolistsId: string) => void
    Filter: string
    changeStatus: (CheckBoxId: string, todolistsID: string) => void
    RemoveTodolist: (todolistsID: string) => void;
    saveNewTitle: (title: string, todolistsID: string, TasksID: string) => void
    saveNewTitleTodolist:(title: string,todolistsID:string)=>void
}
type arrayType = {
    id: string;
    title: string;
    isDone: boolean
}

export let TodoList = (props: titleType) => {
    const addTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }


    let saveNewTitleTodolistHandler=(title:string)=>{
        props.saveNewTitleTodolist(title, props.id)
    }

    return (
        <div>
            <Button callBack={() => props.RemoveTodolist(props.id)} title={'delete'}/>
            <EditableSpan callBack={saveNewTitleTodolistHandler} title={props.title}/>
               <Input callBack={addTaskHandler}/>
            <ul>
                {props.Tasks.map(m => {
                    const saveNewTitleHandler = (title: string) => {
                        props.saveNewTitle(title, props.id, m.id)
                    }
                    return (<li>
                        <Button callBack={() => props.RemoveTask(m.id, props.id)} title={'delete'}/>
                        <CheckBox callBack={() => props.changeStatus(m.id, props.id)} isDone={m.isDone}/>
                        <EditableSpan callBack={saveNewTitleHandler} title={m.title}/>
                    </li>)
                })
                }
            </ul>
            <div>
                <Button callBack={() => props.TaskFilter('All', props.id)} title={'All'} Filter={props.Filter}/>
                <Button callBack={() => props.TaskFilter('Active', props.id)} title={'Active'} Filter={props.Filter}/>
                <Button callBack={() => props.TaskFilter('Completed', props.id)} title={'Completed'}
                        Filter={props.Filter}/>
            </div>
        </div>
    )
}

//==================================
// import React from 'react';
// import './App.css';
// import {Button} from "./components/Button";
// import {Input} from "./components/Input";
// import {CheckBox} from "./components/Checkbox";
// import {EditableSpan} from "./components/EditableSpan";
//
// type titleType = {
//     id: string
//     title: string
//     Tasks: Array<arrayType>
//     addTask: (title: string, todolistsID: string) => void
//     RemoveTask: (id: string, todolistsID: string) => void
//     TaskFilter: (title: string, todolistsId: string) => void
//     Filter: string
//     changeStatus: (CheckBoxId: string, todolistsID: string) => void
//     RemoveTodolist: (todolistsID: string) => void;
//     saveNewTitle: (title:string,todolistsID:string,TasksID:string) => void
// }
// type arrayType = {
//     id: string;
//     title: string;
//     isDone: boolean
// }
//
// export let TodoList = (props: titleType) => {
//     const addTaskHandler = (title: string) => {
//         props.addTask(title, props.id)
//     }
//
//     return (
//         <div>
//             <Button callBack={() => props.RemoveTodolist(props.id)} title={'delete'}/>
//             <h3>{props.title}</h3>
//             <Input callBack={addTaskHandler}/>
//             <ul>
//                 {props.Tasks.map(m =>{
//                     const saveNewTitleHandler = (title: string) => {
//                         props.saveNewTitle(title,props.id,m.id)
//                     }
//                     return (<li>
//                         <Button callBack={() => props.RemoveTask(m.id, props.id)} title={'delete'}/>
//                         <CheckBox callBack={() => props.changeStatus(m.id, props.id)} isDone={m.isDone}/>
//                         <EditableSpan callBack={saveNewTitleHandler} title={m.title}/>
//                     </li>)
//                 })
//                 }
//
//             </ul>
//             <div>
//                 <Button callBack={() => props.TaskFilter('All', props.id)} title={'All'} Filter={props.Filter}/>
//                 <Button callBack={() => props.TaskFilter('Active', props.id)} title={'Active'} Filter={props.Filter}/>
//                 <Button callBack={() => props.TaskFilter('Completed', props.id)} title={'Completed'}
//                         Filter={props.Filter}/>
//             </div>
//         </div>
//     )
// }