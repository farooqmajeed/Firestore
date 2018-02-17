
var config = {
    apiKey: "AIzaSyAM0d0jDh-XfUn43CPxhsAYvgm074sbL0w",
    authDomain: "firestorel-77484.firebaseapp.com",
    databaseURL: "https://firestorel-77484.firebaseio.com",
    projectId: "firestorel-77484",
    storageBucket: "firestorel-77484.appspot.com",
    messagingSenderId: "392069906134"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/outputData");
const headerObj = document.querySelector("#heading1");
const inputObj = document.querySelector("#input1");
console.log(inputObj)
const buttonObj = document.querySelector("#saveButton");


buttonObj.addEventListener("click", function () {
    const textToSave = inputObj.value;
    console.log(" saving " + textToSave + "firebase");
        docRef.set({
        dataStatus: textToSave
    }).then(function () {
        console.log(" Status saved ");
    }).catch(function (error) {
        console.log(" Status not saved:  " + error);
    })
})


