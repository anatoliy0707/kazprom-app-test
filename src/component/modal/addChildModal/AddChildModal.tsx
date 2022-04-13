import React, {ChangeEvent, useState} from "react";
import style from './AddChildModal.module.css'

type PropsType = {
    onSave: (value: string) => void
    onCancel?: () => void
}

export const AddChildModal = ({onSave, onCancel}: PropsType) => {

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const onSaveHandler = () => {
        if (value.trim() === '') {
            setError('Is required!')
        } else {
            onSave(value.trim())
        }
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
                {error && <span className={style.error}>{error}</span>}
                <input className={`${style.input} ${error ? style.errorInput : ''}`} onChange={onChangeHandler}
                       value={value} type="text"/>
            </div>
            <div className={style.buttonBlock}>
                <button onClick={onCancel}>Отмена</button>
                <button onClick={onSaveHandler}>Ok</button>
            </div>
        </div>
    )
}