/* eslint-disable no-unused-vars */
import firebase from "firebase"
import 'firebase/storage'

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUKET,
    messagingSenderId: process.env.REACT_APP_MESSAGERSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
}

export const appFirebase = firebase.initializeApp(config)
export const storage =appFirebase.firestore()
export const fbStorage= appFirebase.storage()

