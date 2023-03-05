import "./home.css"
import { useEffect, useState } from 'react';
import { db } from '../config/firrbase';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import Footer from "./footer";
import { useNavigate } from 'react-router-dom';




export default function Home() {
    // const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [foundUser, setFoundUser] = useState('');
    const [ID, setID] = useState('')
    const ndate = new Date().toLocaleString()
    const [editUserId, setEditUserId] = useState('');
    const userCollectionRef = collection(db, 'users')
    const newDate = {
        date: ndate
    }
    // const uidd = localStorage.getItem('key')
    const getUsers = async () => {
        try {
            const data = await getDocs(userCollectionRef);
            const filtterData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setUsers(filtterData);
        } catch (err) {
            console.log(err);
        }
    };
    

    useEffect(() => {
        // if (localStorage.getItem("key")) {
            
        // } else{
        //     return navigate('/auth');
        // }
        getUsers();
    }, []);

    const Serach = () => {
        getUsers();
        if (ID.length != 14) {
            alert('ID Must be 14 number')
        } else {
            return users.find((p) => p.Id == ID)
        }
    }

    const AddUser = async () => {
        try {
            await addDoc(userCollectionRef, { Id: ID, date: ndate })
            getUsers();
        } catch (err) {
            console.log(err);
        }
        alert("Add Done!")
    };

    
    const UpdateDate = () => {
        if (editUserId.length != 14) {
            alert('ID Must be 14 number')
        } else {
            users.map((p) => {
                if (p.Id == editUserId) {

                    const docRef = doc(db, "users", `${p.id}`);
                    updateDoc(docRef, newDate)
                        .then(docRef => {

                            alert("Update Done!")
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
                return p
            })
        }
    }

    // const logOut = () => {
    //     localStorage.removeItem('key');
    //     navigate('/auth')
    // }



    return (
        <div id="home">
            {/* <button className="log-out" onClick={logOut}>Log Out</button> */}

            <div id="img">
                <img src='./logo.png' />
            </div>

            <section>
                <input value={ID} pattern="[0-9]" inputMode="numeric" onChange={evt => setID(evt.target.value)} />
                <button id="find" onClick={() => { setFoundUser(Serach()) }}>Find</button>
            </section>
            
            {foundUser ?
                <div className="user-found">
                    <h4>User found:</h4>
                    <h3>{foundUser.Id}</h3>
                    <h4 id='date'>{foundUser.date}</h4>
                </div> :
                <div className="not-found">
                    <p>User Was not found</p>
                    <button id="add" onClick={AddUser}>Add</button>
                </div>}

            <div className="section">
                <h1>Edit User By Id</h1>
                <label>ID  </label>
                <input value={editUserId} pattern="[0-9]" inputMode="numeric" onChange={e => setEditUserId(e.target.value)} />
                <button id="edit" onClick={UpdateDate}>Edit</button>
            </div>


            <Footer />

        </div>
    )
}
