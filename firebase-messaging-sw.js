/* App TIVA — recibe los avisos de Firebase cuando la app está cerrada (18/10/2026).
   Firebase muestra el aviso solo (título, texto, ícono y vibración vienen del servidor) y al tocarlo abre el link del aviso. */
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyAZNS6RnleazSGHr3-cj9pDd5vgWbo4jFY',
  authDomain: 'tiva-chat-notificaciones.firebaseapp.com',
  projectId: 'tiva-chat-notificaciones',
  storageBucket: 'tiva-chat-notificaciones.firebasestorage.app',
  messagingSenderId: '37768361854',
  appId: '1:37768361854:web:48e498b0987853f274252f'
});
firebase.messaging();
