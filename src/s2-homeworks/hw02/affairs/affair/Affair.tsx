import React from 'react'
import { AffairType,  } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'
import setAffairs from '../../HW2'
import deleteAffairCallback from '../../HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // need to fix
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}
                    <p>{props.affair.name}</p>
                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            <button onClick={deleteCallback}
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                // need to fix

            >
                {/*текст кнопки могут изменить студенты*/}
                Х
                {/**/}
            </button>
        </div>
    )
}

export default Affair
