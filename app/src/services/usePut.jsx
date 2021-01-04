import { useContext, useState, useCallback } from 'react'
import axios from 'axios'
import { LoginDetailsContext } from '../contexts/LoginDataContext'
import { HandleEventContextDispatch } from '../contexts/HandleEventContext'
import { SUCCESS, ERROR } from '../constants/ActionTypes'

export default function usePut({ url, payload, Reload }) {
    const { token } = useContext(LoginDetailsContext)
    const EventDispatch = useContext(HandleEventContextDispatch)
    const [res, setRes] = useState({ data: null, error: null, isLoading: false })
    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }
    // You POST method here
    const callAPI = useCallback(() => {
        setRes(prevState => ({ ...prevState, isLoading: true }))
        axios.put(url, payload, config)
            .then(res => {
                setRes({ data: res.data, isLoading: false, error: null })
                EventDispatch({ type: SUCCESS, message: res.data.message })
                Reload()
            }).catch((err) => {
                setRes({ data: null, isLoading: false })
                EventDispatch({ type: ERROR, message: err.response.data.errors[0].error })
            })
    }, [url, payload])
    return [res, callAPI];
}