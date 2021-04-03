import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCdxy_oFpP526hsEsrElSFuRmrgXwR_7jw',
	authDomain: 'slack-clone-a078e.firebaseapp.com',
	projectId: 'slack-clone-a078e',
	storageBucket: 'slack-clone-a078e.appspot.com',
	messagingSenderId: '340903054877',
	appId: '1:340903054877:web:e39d4e2faa0728a67700f4',
	measurementId: 'G-57G4YVGLP4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

export default db
