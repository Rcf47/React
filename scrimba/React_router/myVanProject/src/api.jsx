import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC9J4fozX2bq6sxYPI3IO6zmme6xZy6bas",
  authDomain: "vanlife-80aea.firebaseapp.com",
  projectId: "vanlife-80aea",
  storageBucket: "vanlife-80aea.appspot.com",
  messagingSenderId: "883164643083",
  appId: "1:883164643083:web:b4502adebbda5c3ec46c0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vanCollection = collection(db, "vans")

export async function getVans() {
  const vanSnapshot = await getDocs(vanCollection)
  const vanList = vanSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vanList
}
