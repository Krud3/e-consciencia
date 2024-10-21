import { db } from '../../firebase.config.js';
import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export const createUser = async (uid, userData) => {
  try {
    const userDoc = doc(usersCollection, uid);
    await setDoc(userDoc, userData);
    console.log('User created successfully:', userData);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const getUser = async (uid) => {
  try {
    const userDoc = doc(usersCollection, uid);
    const userSnapshot = await getDoc(userDoc);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      console.log('No such user!');
      return null;
    }
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

export const updateUser = async (uid, updatedData) => {
  try {
    const userDoc = doc(usersCollection, uid);
    await updateDoc(userDoc, updatedData);
    console.log('User updated successfully:', updatedData);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const deleteUser = async (uid) => {
  try {
    const userDoc = doc(usersCollection, uid);
    await deleteDoc(userDoc);
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
