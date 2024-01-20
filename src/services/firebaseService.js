import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  // Adicione as configurações do seu projeto Firebase
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export { messaging };
