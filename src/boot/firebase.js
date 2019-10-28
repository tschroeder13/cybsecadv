import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'
import firebaseConfig from './firebaseConfig.js'

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
// let firebaseAuth = firebaseApp.firestore()
export { firebaseAuth }
