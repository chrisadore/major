import firebase from "@/plugins/firebase";

export default {
  state: {
    studentData: {}
  },
  mutations: {
    setStudentData: (state, payload) => {
      state.studentData = payload;
    }
  },
  actions: {
    pushStudentData: ({ commit }, payload) => {
      commit("setStudentData", payload);
      return new Promise((resolve, reject) => {
        firebase
          .firestore()
          .collection("applications")
          .doc(payload.mobileno)
          .get()
          .then(doc => {
            if (doc.exists) {
              reject("Application already exists using this mobile number.");
              return;
            }
            firebase
              .firestore()
              .collection("applications")
              .doc(payload.mobileno)
              .set(payload)
              .then(() => {
                resolve("Application submitted succesfully.");
              })
              .catch(error => {
                reject(error.message);
              });
          });
      });
    }
  }
};
