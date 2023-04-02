import axios from "axios";
const baseUrl = 'https://fullstack-todo-app-backend-2gg2.onrender.com'
export const getApiData = (setTodoData) => {
    axios.get(baseUrl).then(({ data }) => {
        setTodoData(data)
    })
}

export const addApiData = (text, setText, setTodoData) => {
    axios.post(`${baseUrl}/create`, {
        data: text
    }).then((response) => {
        getApiData(setTodoData)
        setText('')
    })
}

export const updateApiData = (todoId, text, setIsUpdate, setText, setTodoData) => {
    axios.put(`${baseUrl}/update`, {
        id: todoId,
        data: text
    }).then(() => {
        setText('')
        setIsUpdate(false)
        getApiData(setTodoData)
    })
}
export const deleteApiData = (id, setTodoData) => {
    axios.delete(`${baseUrl}/delete/${id}`).then((res) => {
        getApiData(setTodoData)
    })
}