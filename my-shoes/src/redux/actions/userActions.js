import Axios from "axios";

export const login = (username, password) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users?username=${username}&password=${password}`)
            .then(res => {
                console.log(res.data)
                if (res.data.length === 0) {
                    // kalau tidak ada muncul error
                    return dispatch({
                        type: 'ERROR_LOGIN'
                    })
                } else {
                    // kalau berhasil, data user akan dikirim userReducer
                    return dispatch({
                        type: 'LOGIN',
                        payload: res.data[0]
                    })
                }
            })
    }
}

export const errLoginFalse = () => {
    return (dispatch) => {
        return dispatch({
            type: 'ERROR_LOGIN_FALSE'
        })
    }
}