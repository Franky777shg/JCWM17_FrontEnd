import Axios from 'axios'

export const getData = () => {
    return (dispatch) => {
        Axios.get('http://localhost:2000/activities')
            .then(res => {
                // kirim res.data ke todoReducer dengan dispatch
                dispatch({
                    type: 'GET_DATA',
                    payload: res.data
                })
            })
    }
}

export const addData = (obj) => {
    return (dispatch) => {
        Axios.post('http://localhost:2000/activities', obj)
            .then(res => {
                Axios.get('http://localhost:2000/activities')
                    .then(res => {
                        // kirim res.data ke todoReducer dengan dispatch
                        dispatch({
                            type: 'GET_DATA',
                            payload: res.data
                        })
                    })
            })
    }
}

export const delData = (id) => {
    return (dispatch) => {
        Axios.delete(`http://localhost:2000/activities/${id}`)
            .then(res => {
                Axios.get('http://localhost:2000/activities')
                    .then(res => {
                        // kirim res.data ke todoReducer dengan dispatch
                        dispatch({
                            type: 'GET_DATA',
                            payload: res.data
                        })
                    })
            })
    }
}

export const completeData = (id) => {
    return (dispatch) => {
        Axios.patch(`http://localhost:2000/activities/${id}`, { isCompleted: true })
            .then(res => {
                Axios.get('http://localhost:2000/activities')
                    .then(res => {
                        // kirim res.data ke todoReducer dengan dispatch
                        dispatch({
                            type: 'GET_DATA',
                            payload: res.data
                        })
                    })
            })
    }
}