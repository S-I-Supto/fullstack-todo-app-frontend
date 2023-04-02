import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Todo from './Todo'
import { getApiData, addApiData, updateApiData, deleteApiData } from '../utils/ApiData'
function App() {
  const [text, setText] = useState('')
  const [todoData, setTodoData] = useState([])
  const [todoId, setTodoId] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    getApiData(setTodoData)
  }, [])
  return (
    <>
      <div className="parent">
        <h1 className='header'>TODO APP!</h1>
        <div className="container">
          <div>
            <form className="text-box"
              onSubmit={
                isUpdate ?
                  (e) => {
                    e.preventDefault()
                    updateApiData(todoId, text, setIsUpdate, setText, setTodoData)
                  } :
                  (e) => {
                    e.preventDefault()
                    addApiData(text, setText, setTodoData)
                  }
              }>
              <input type="text" className='input-text' value={text} onChange={(e) => { setText(e.target.value) }} />
              <button className='btn'>
                {isUpdate ? 'Update' : "Add"}
              </button>
            </form>
          </div>
          <div className="todo-ul">
            <AnimatePresence>
              {todoData.map((e) => {
                return (
                  <Todo
                    key={e._id}
                    id={e._id}
                    data={e.data}
                    setText={setText}
                    setTodoId={setTodoId}
                    setIsUpdate={setIsUpdate}
                    setTodoData={setTodoData}
                  />
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
