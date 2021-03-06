import React, {ChangeEvent, useState} from 'react';
import './App.css';
import TextField from "@material-ui/core/TextField";

type PropsType = {
    title: string
    saveNewTitle: (newTitle: string) => void
}

export const EditTableSpan = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>(props.title);
    const activateEditeMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const detivateEditeMode = () => {
        setEditMode(false)
    }
    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        props.saveNewTitle(title);
    }
    return (
        editMode
            ? <TextField id="standard-basic" label="Standard"
                         value={title} onBlur={detivateEditeMode}
                         autoFocus={true} onChange={changeTitle}/>
            : <span onDoubleClick={activateEditeMode}>{props.title}</span>
    )
}