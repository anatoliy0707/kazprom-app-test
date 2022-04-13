import React, {ChangeEvent, useState} from "react";
import style from './AddChildModal.module.css'

type PropsType = {
    onSave: (value: string) => void
    onCancel?: () => void
}

export const AddChildModal = ({onSave, onCancel}: PropsType) => {

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    // const onChangeHandler: ComponentProps<typeof SuperInputText>['onChangeText'] = (value) => {
    //     setName(value)
    // }

    const onSaveCallBack = () => {
        if (value.trim() === '') {
            setError('Is required!')
        }
        onSave(value)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(e.currentTarget.value)
    }

    return (
        <div className={style.wrapp}>
            <div className={style.header}>
                <h3>Добавить запись</h3>
            </div>
            <div className={style.inputBlock}>
                {error && <span>{error}</span>}
                <input className={style.input} onChange={onChangeHandler} value={value} type="text"/>
            </div>
            <div className={style.buttonBlock}>
                <button onClick={onCancel}>Отмена</button>
                <button disabled={false} onClick={onSaveCallBack}>Ok</button>
            </div>
        </div>
    )
}