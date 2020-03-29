const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.database();

exports.addPost = functions.database
  .ref("/post/{postId}")
  .onCreate((snapshot, context) => {
    db.ref("/amountPost")
      .once("value")
      .then(_snapshot =>
        db
          .ref("/amountPost")
          .set(typeof _snapshot.val() === "number" ? _snapshot.val() + 1 : 1)
      )
      .catch(e => console.log("error", e));
  });

exports.deletePost = functions.database
  .ref("/post/{postId}")
  .onDelete((snapshot, context) => {
    db.ref("/amountPost")
      .once("value")
      .then(_snapshot =>
        db
          .ref("/amountPost")
          .set(
            typeof _snapshot.val() === "number" && _snapshot.val() > 0
              ? _snapshot.val() - 1
              : 0
          )
      )
      .catch(e => console.log("error", e));
  });
