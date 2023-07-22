import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Tasks } from "../../store/sliceTodo";
import { Appstate } from "../../store/store";
import { setItem } from "../../utils/localStorage";


export const LocalStore: React.FC<Tasks> = (props) => {
    const {id} = props;
    // const dispatch = useDispatch();
    const [store, setStore] = useState<boolean>();
    const localData = useSelector((state: Appstate) => state.todos)
    useEffect(() => {
        setStore(localData.some((item) => item.id === id))
        setItem("todos", localData)
    }, [localData, id])
    return (
        <div>
            <div>{store}</div>
        </div>
        
    )
}
