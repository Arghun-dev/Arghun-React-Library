import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config = {
  apiKey: 'AIzaSyDspjXqIj8epFzBkjROUEuWsLZfmgSszI4',
  authDomain: 'master-react-a26ca.firebaseapp.com',
  projectId: 'master-react-a26ca',
  storageBucket: 'master-react-a26ca.appspot.com',
  messagingSenderId: '360478541067',
  appId: '1:360478541067:web:ea9d0959d8bd58d2280e0e',
  measurementId: 'G-QZN7NX8PEX',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
