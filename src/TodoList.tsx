import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./components/Buttons";
import {InputButton} from "./components/InputButton";
import {CheckBox} from "./components/CheckBox";

type titleType = {
    id:string
    title: string;
    Tasks: Array<arrayType>
    addTask:(title:string,setTitle:(title: string)=>void,setError:(error:string|null)=>void,TasksId: string)=>void
    removeTask: (removeId: string,TasksId: string) => void
    changeFilter: (filterValue: string,todoListsId:string) => void
    changeStatus:(isDoneValue:boolean,idValue:string,TasksId: string)=>void
    filter:string
    deleteTasks:(deleteTasksId:string)=>void;
  }

type arrayType = {
    id: string;
    title: string;
    isDone: boolean
}

export let TodoList = (props: titleType) => {
    let [title, setTitle] = useState('');
    let [error,setError]=useState()
        return (
        <div>
            <h3><Buttons callBack={() => props.deleteTasks(props.id)} title={'X'}/>{' '}{props.title}</h3>
            <div>
                <InputButton callBack={()=>props.addTask(title,setTitle,setError,props.id)}
                             title={title}
                             setTitle={setTitle}
                             error={error}
                             setError={setError}
                />
            </div>
            <ul>
                {props.Tasks.map(m =>
                    <li>
                        <Buttons callBack={() => props.removeTask(m.id,props.id)} title={'X'}/>
                        <CheckBox callBack={()=>props.changeStatus(m.isDone,m.id,props.id)} checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>)}
            </ul>
            <div>
                <Buttons callBack={() => props.changeFilter('All',props.id)} title={'All'} filter={props.filter}/>
                <Buttons callBack={() => props.changeFilter('Active',props.id)} title={'Active'} filter={props.filter}/>
                <Buttons callBack={() => props.changeFilter('Completed',props.id)} title={'Completed'} filter={props.filter}/>
            </div>
        </div>
    )
}
//======================================
// import React, {useState} from 'react';
// import './App.css';
// import {Buttons} from "./components/Buttons";
// import {InputButton} from "./components/InputButton";
// import {CheckBox} from "./components/CheckBox";
//
// type titleType = {
//     id:string
//     title: string;
//     Tasks: Array<arrayType>
//     addTask:(title:string,setTitle:(title: string)=>void,setError:(error:string|null)=>void,TasksId: string)=>void
//     removeTask: (removeId: string,TasksId: string) => void
//     changeFilter: (filterValue: string,todoListsId:string) => void
//     changeStatus:(isDoneValue:boolean,idValue:string,TasksId: string)=>void
//     filter:string
// }
//
// type arrayType = {
//     id: string;
//     title: string;
//     isDone: boolean
// }
//
// export let TodoList = (props: titleType) => {
//     let [title, setTitle] = useState('');
//     let [error,setError]=useState()
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <div>
//                 <InputButton callBack={()=>props.addTask(title,setTitle,setError,props.id)}
//                              title={title}
//                              setTitle={setTitle}
//                              error={error}
//                              setError={setError}
//                 />
//             </div>
//             <ul>
//                 {props.Tasks.map(m =>
//                     <li>
//                         <Buttons callBack={() => props.removeTask(m.id,props.id)} title={'X'}/>
//                         <CheckBox callBack={()=>props.changeStatus(m.isDone,m.id,props.id)} checked={m.isDone}/>
//                         <span>{m.title}</span>
//                     </li>)}
//             </ul>
//             <div>
//                 <Buttons callBack={() => props.changeFilter('All',props.id)} title={'All'} filter={props.filter}/>
//                 <Buttons callBack={() => props.changeFilter('Active',props.id)} title={'Active'} filter={props.filter}/>
//                 <Buttons callBack={() => props.changeFilter('Completed',props.id)} title={'Completed'} filter={props.filter}/>
//             </div>
//         </div>
//     )
// }