import {v1} from "uuid";


export const itemsReducer = (state: ItemType[] = [], action: itemsActionsType): ItemType[] => {
    switch (action.type) {
        case "items/ADD_ITEM":
            return [...state, {...action.payload}]
        default: {
            return state
        }
    }
};

//actions
export const addItem = (itemText: string) => {
    return {
        type: 'items/ADD_ITEM',
        payload: {id: v1(), text: itemText}
    } as const
}

//types
export type ItemType = {
    id: string,
    text: string
}

export type itemsActionsType = ReturnType<typeof addItem>