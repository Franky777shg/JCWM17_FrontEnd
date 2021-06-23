import Axios from 'axios'

export const addCart = (id, data) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users/${id}`)
            .then(res => {
                let tempCart = res.data.cart
                tempCart.push(data)

                Axios.patch(`http://localhost:2000/users/${id}`, { cart: tempCart })
                    .then(res => {
                        Axios.get(`http://localhost:2000/users/${id}`)
                            .then(res => {
                                return dispatch({
                                    type: 'LOGIN',
                                    payload: res.data
                                })
                            })
                    })
            })
    }
}

export const delCart = (idUser, idProdCart) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users/${idUser}`)
            .then(res => {
                let tempCart = res.data.cart
                tempCart.splice(idProdCart, 1)

                Axios.patch(`http://localhost:2000/users/${idUser}`, { cart: tempCart })
                    .then(res => {
                        Axios.get(`http://localhost:2000/users/${idUser}`)
                            .then(res => {
                                return dispatch({
                                    type: 'LOGIN',
                                    payload: res.data
                                })
                            })
                    })
            })
    }
}

export const saveCart = (idUser, idProdCart, qtyUpdate) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users/${idUser}`)
            .then(res => {
                // tempCart untuk menampung data cart yg sekarang
                let tempCart = res.data.cart

                // tempProd untuk menampung data product yang mau kita update qty nya
                let tempProd = res.data.cart[idProdCart]

                // update qty prod yang lama dengan qty yang baru
                tempProd.qty = qtyUpdate

                // kita ganti data cart dengan data product yang sudah kita edit
                tempCart.splice(idProdCart, 1, tempProd)

                // kita patch data cart di user dengan yang terbaru
                Axios.patch(`http://localhost:2000/users/${idUser}`, { cart: tempCart })
                    .then(res => {
                        // karena data base sudah terupdate maka kita perlu menyesuaikan data update di database
                        // dengan yang ada di redux
                        Axios.get(`http://localhost:2000/users/${idUser}`)
                            .then(res => {
                                return dispatch({
                                    type: 'LOGIN',
                                    payload: res.data
                                })
                            })
                    })
            })
    }
}

export const checkout = (idUser, dataTrans) => {
    return (dispatch) => {
        // untuk mencatat data history ke dalam database
        Axios.post('http://localhost:2000/history', dataTrans)
            .then(res => {
                let idUser = localStorage.getItem('idUser')
                
                Axios.get(`http://localhost:2000/history?idUser=${idUser}`)
                    .then(res => {
                        return dispatch({
                            type: 'GET_HISTORY',
                            payload: res.data
                        })
                    })
            })
            .then(res => {
                // untuk mengosongkan cart user
                Axios.patch(`http://localhost:2000/users/${idUser}`, { cart: [] })
                    .then(res => {
                        // untuk update data di redux
                        Axios.get(`http://localhost:2000/users/${idUser}`)
                            .then(res => {
                                return dispatch({
                                    type: 'LOGIN',
                                    payload: res.data
                                })
                            })
                    })
            })
    }
}

export const getHistory = () => {
    return (dispatch) => {
        let idUser = localStorage.getItem('idUser')
        Axios.get(`http://localhost:2000/history?idUser=${idUser}`)
            .then(res => {
                return dispatch({
                    type: 'GET_HISTORY',
                    payload: res.data
                })
            })
    }
}