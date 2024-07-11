import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../backend/config/firebaseConfig";

export const updateData = async (collectionName, docId, updatedData , successAction , errorAction) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log("Document successfully updated!");
    if (successAction) {
     successAction()
    }
  } catch (error) {
    console.error("Error updating document: ", error);
    if (errorAction) {
      errorAction()
    }
  }
};


