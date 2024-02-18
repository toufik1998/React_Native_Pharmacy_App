// import { db } from './Config';

// export const  saveUserData = async (id, email, password) => {
//   try {
//     // Save the user data to your Firestore database using the 'db' reference
//     await db.collection('users').doc(id).set({
//       email,
//       password,
//     });
//     console.log('User data saved successfully');
//   } catch (error) {
//     console.error('Failed to save user data:', error);
//     // Handle the error appropriately
//   }
// };

// // ...

import { getFirestore, collection, doc, set } from "firebase/firestore";
import { db } from './Config';

export const saveUserData = async (id, email, password) => {
  try {
    // Save the user data to your Firestore database using the 'db' reference
    await set(doc(collection(db, 'users'), id), {
      email,
      password,
    });
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Failed to save user data:', error);
    // Handle the error appropriately
  }
};