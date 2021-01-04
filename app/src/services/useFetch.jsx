import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { LoginDetailsContext } from '../contexts/LoginDataContext'
import { HandleEventContextDispatch } from '../contexts/HandleEventContext'
import { SUCCESS, ERROR } from '../constants/ActionTypes'

export default function useFetch(url, search, reload, condition) {
    const { token } = useContext(LoginDetailsContext)
    const EventDispatch = useContext(HandleEventContextDispatch)
    const [data, setData] = useState({ isLoading: true, data: null })
    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }

    useEffect(() => {
        if (condition !== undefined) {
            if (condition?.condition !== null) {
                const source = axios.CancelToken.source()
                const loadData = async () => {
                    try {
                        const { data } = await axios.get(url, config, { cancelToken: source.token })
                        setData({
                            isLoading: false,
                            data
                        })
                    } catch (err) {
                        EventDispatch({ type: ERROR, message: err.response.data.errors[0].error })
                    }
                }

                loadData()
                return source.cancel()
            }

        } else if (condition === undefined) {
            const source = axios.CancelToken.source()
            const loadData = async () => {
                try {
                    const { data } = await axios.get(url, config, { cancelToken: source.token })
                    setData({
                        isLoading: false,
                        data
                    })
                } catch (err) {
                    EventDispatch({ type: ERROR, message: err.response.data.errors[0].error })
                }
            }

            loadData()
            return source.cancel()
        }
    }, [url, reload, search])

    return data
}