import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import style from './App.module.css';
import {List} from './component/List';
import {AddChildModal} from './component/modal/addChildModal/AddChildModal';
import Modal from './component/modal/Modal';
import {ItemType} from './store/itemsReducer';
import {AppRootStateType} from './store/store';

export enum EModeType {
    ADD_MODE = 'ADD_MODE',
    DELETE_MODE = 'DELETE_MODE'
}

function App() {

    const items = useSelector<AppRootStateType, ItemType[]>(state => state.items)
    const [mode, setMode] = useState<EModeType | null>(null)
    const [showModal, setShowModal] = useState(false);

    const onAddClickHandler = () => {
        setShowModal(true)
        setMode(EModeType.ADD_MODE)
    }

    return (
        <div className={style.app}>
            <div className={style.container}>
                <div className={style.controlBlock}>
                    <button onClick={onAddClickHandler}>Добавить</button>
                    <button>Удалить</button>
                    <button>Тест GQL</button>
                </div>
                <div className={style.listBlock}>
                    <List items={items}/>
                </div>
            </div>
            <Modal
                width={395}
                height={221}
                enableBackground={true}
                backgroundOnClick={() => setShowModal(false)}
                show={showModal}
            >
                {mode === EModeType.ADD_MODE && <AddChildModal onSave={() => {
                }}/>}
            </Modal>
        </div>
    )
}

export default App
