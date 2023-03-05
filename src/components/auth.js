
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import { auth } from '../config/firrbase';
// import { useNavigate } from 'react-router-dom';
// import "./auth.css"


// export const Auth = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [uID, setUid] = useState('')
//     const signIn = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed i
//                 setUid(userCredential.user.uid)
//                 localStorage.setItem('key', userCredential.user.uid);
//                 console.log(userCredential.user.uid);
//                 navigate('/')

//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 alert(errorMessage);
//             });
//     }

    
//     useEffect(() => {
//         if (localStorage.getItem("key")) {
//             return navigate('/')  ;
//         } 
//     }, []);

//     return (
//         <div id='auth'>
//             <div id='box'>
//                 <input
//                     placeholder="email..."
//                     onChange={(e) => { setEmail(e.target.value) }} />
//                 <input type='password'
//                     placeholder="Pssword..."
//                     onChange={(e) => { setPassword(e.target.value) }} />
//                 <button onClick={signIn}>SignIn</button>
//             </div>
//         </div>

//     )
// }