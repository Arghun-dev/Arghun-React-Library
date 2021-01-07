import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/Login/authContext'
import { MessageContext } from '../context/message/MessageContext'
import { ERROR } from '../constants/ActionTypes'

export default function useFetch(url, search, reload, condition) {
  const { token } = useContext(AuthContext)
  const { messageDispatch } = useContext(MessageContext)
  const [Data, setData] = useState({ isLoading: true, data: null })
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  useEffect(() => {
    if (condition !== undefined) {
      if (condition?.condition !== null) {
        const source = axios.CancelToken.source()
        const loadData = async () => {
          try {
            const { data } = await axios.get(url, config, {
              cancelToken: source.token,
            })
            setData({
              isLoading: false,
              data,
            })
          } catch (err) {
            messageDispatch({
              type: ERROR,
              message: err.response.data.errors[0].error,
            })
          }
        }

        loadData()
        return source.cancel()
      }
    } else if (condition === undefined) {
      const source = axios.CancelToken.source()
      const loadData = async () => {
        try {
          const { data } = await axios.get(url, config, {
            cancelToken: source.token,
          })
          setData({
            isLoading: false,
            data,
          })
        } catch (err) {
          messageDispatch({
            type: ERROR,
            message: err.response.data.errors[0].error,
          })
        }
      }

      loadData()
      return source.cancel()
    }

    return null
  }, [url, reload, search])

  return Data
}
