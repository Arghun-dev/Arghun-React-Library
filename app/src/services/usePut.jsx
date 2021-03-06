import { useContext, useState, useCallback } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/Login/authContext'
import { MessageContext } from '../context/message/MessageContext'
import { SUCCESS, ERROR } from '../constants/ActionTypes'

export default function usePut({ url, payload, Reload }) {
  const { token } = useContext(AuthContext)
  const { messageDispatch } = useContext(MessageContext)
  const [res, setRes] = useState({ data: null, error: null, isLoading: false })
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
  // You POST method here
  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }))
    axios
      .put(url, payload, config)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null })
        messageDispatch({ type: SUCCESS, message: response.data.message })
        Reload()
      })
      .catch((err) => {
        setRes({ data: null, isLoading: false })
        messageDispatch({
          type: ERROR,
          message: err.response.data.errors[0].error,
        })
      })
  }, [url, payload])
  return [res, callAPI]
}
