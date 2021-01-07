import { useContext, useState, useCallback } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/Login/authContext'
import { MessageContext } from '../context/message/MessageContext'
import { SUCCESS, ERROR } from '../constants/ActionTypes'

export default function useDelete({ url, payload, Reload }) {
  const { token } = useContext(AuthContext)
  const EventDispatch = useContext(MessageContext)
  const [res, setRes] = useState({ data: null, error: null, isLoading: false })
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
  // You DELETE method here
  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }))
    axios
      .delete(url, config, payload)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null })
        EventDispatch({ type: SUCCESS, message: res.data.message })
        Reload()
      })
      .catch((err) => {
        setRes({ data: null, isLoading: false })
        EventDispatch({
          type: ERROR,
          message: err.response.data.errors[0].error,
        })
      })
  }, [url, payload])
  return [res, callAPI]
}
