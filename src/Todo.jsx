import React from 'react'
import { motion } from 'framer-motion'
import { todoListAnimation } from './variants/varaints'
import { AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { deleteApiData } from '../utils/ApiData'
const Todo = ({ id, data, setText, setTodoId, setIsUpdate, setTodoData }) => {
    const updateData = (data, id) => {
        setText(data)
        setTodoId(id);
        setIsUpdate(true)
    }

    const deleteData = (id) => {
        deleteApiData(id, setTodoData)
    }

    return (
        <motion.div
            key={id}
            variants={todoListAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
            className='todo-list'
        >
            <div className='display-todo-data'>
                <p className='todo-data'>{data}</p>
            </div>
            <div className="todo-icons">
                <BsPencilSquare fontSize={'21px'} onClick={() => { updateData(data, id) }}
                />
                <AiFillDelete fontSize={'21px'}
                    onClick={() => {
                        deleteData(id)
                    }}
                />
            </div>
        </motion.div>
    )
}
export default Todo