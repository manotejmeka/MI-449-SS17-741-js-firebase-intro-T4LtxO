// TODO Sign into the database anonymously

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCrqSs9tpVhjtB_ceWD66Ea69UzvVxicrw',
  authDomain: 'woof-mi-449.firebaseapp.com',
  databaseURL: 'https://woof-mi-449.firebaseio.com',
  projectId: 'woof-mi-449',
  storageBucket: 'woof-mi-449.appspot.com',
  messagingSenderId: '1082407024194'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  var woofText = woof.text
  console.log("created",woof.text)
  var timestamp = new Date().getTime()
  firebase.database().ref('woof').push({
    created_at: timestamp,
    text: woofText
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woof').on('child_added', function(woof){
    addWoofRow(woof.key,woof)
  })
  firebase.database().ref('woof').on('child_changed', function(woof){
    updateWoofRow(woof.key,woof)
  })
  firebase.database().ref('woof').on('child_removed', function(woof){
    deleteWoofRow(woof.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
  firebase.database().ref('woof').child(woofKey).child('text').set(
    woofText
  )
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woof').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
