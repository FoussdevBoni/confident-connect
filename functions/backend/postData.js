   
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../backend/config/firebaseConfig";
  
  
  export  const postData = async (collectionName , data , successAction , errorAction) => {
       
        try {
            const docRef = await addDoc(collection(db, collectionName), {
              ...data
            });
            successAction(docRef.id)
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
            errorAction(e)
         }
         
 }