// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBOT6lzM8zZN53ZsttfBZ8jwjHFoKz2cqI',
  authDomain: 'joke-a-tron-9000-aee52.firebaseapp.com',
  databaseURL: 'https://joke-a-tron-9000-aee52.firebaseio.com',
  projectId: 'joke-a-tron-9000-aee52',
  storageBucket: 'joke-a-tron-9000-aee52.appspot.com',
  messagingSenderId: '702600515925'
};

firebase.initializeApp(config);
firebase.auth().signInAnonymously();
