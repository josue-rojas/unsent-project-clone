const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.database();

exports.addPost = functions.database
  .ref("/post")
  .onCreate((snapshot, context) => {
    db.ref("/amountPost")
      .once("value")
      .then(_snapshot =>
        db.ref("/amountPost").set(_snapshot.val() ? _snapshot.val() + 1 : 1)
      )
      .catch(e => db.ref("/amountPost").set(1));
  });

exports.deletePost = functions.database
  .ref("/post")
  .onDelete((snapshot, context) => {
    db.ref("/amountPost")
      .once("value")
      .then(_snapshot =>
        db
          .ref("/amountPost")
          .set(_snapshot.val() && _snapshot.val() > 0 ? _snapshot.val() - 1 : 0)
      )
      .catch(e => db.ref("/amountPost").set(0));
  });
