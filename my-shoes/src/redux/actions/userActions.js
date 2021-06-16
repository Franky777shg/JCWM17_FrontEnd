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
                    // simpan data id user ke local storage
                    localStorage.setItem('idUser', res.data[0].id)

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

export const logout = () => {
    return (dispatch) => {
        // menghapus data idUser di localStorage
        localStorage.removeItem('idUser')

        return dispatch({
            type: 'LOG_OUT'
        })
    }
}

export const keepLogin = (id) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users/${id}`)
        .then(res => {
            return dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        })
    }
}