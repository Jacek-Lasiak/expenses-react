import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBn1dSj6X8WZfBVt9sgwwfUe7mf2ysA1zg",
  authDomain: "react-expense-40c3d.firebaseapp.com",
  databaseURL: "https://react-expense-40c3d.firebaseio.com",
  projectId: "react-expense-40c3d",
  storageBucket: "react-expense-40c3d.appspot.com",
  messagingSenderId: "199037330934"
};

firebase.initializeApp(config);
const database = firebase.database();
// database
//   .ref()
//   .set({
//     name: "Jacek Lasiak",
//     age: 21,
//     isSingle: true,
//     location: {
//       city: "Zakopane",
//       country: "Poland"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch(error => {
//     console.log("something went wrong ", error);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed");
//   })
//   .catch(e => {
//     console.log("something went wrong ", e);
//   });

// database.ref().update({
//   name: "Jacek",
//   age: 12
// });

database
  .ref()
  .once("value")
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch(e => {
    console.log("error: ", e);
  });
