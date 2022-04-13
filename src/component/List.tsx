import React from "react";
import { ItemType } from "../store/itemsReducer";
import style from './List.module.css'

type ListPropsType = {
    items: ItemType[]
}

export const List = ({items}: ListPropsType) => {
    return (
        <ul>
            {items.map((item) => {
                return <li className={style.listItem}
                    key={item.id}>
                    {item.text}
                </li>
            })}
        </ul>
    )
}

