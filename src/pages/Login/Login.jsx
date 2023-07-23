import { useEffect, useState } from 'react';
import './Login.css';
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
} from 'firebase/firestore';

const Login = () => {
    const firebaseLogin = initializeApp({
        apiKey: "AIzaSyBL8I06vN63e-XFPHfs3x2zgkvJrpmbOZU",
        authDomain: "fir-f9ab0.firebaseapp.com",
        projectId: "fir-f9ab0",
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false); // Track login status

    const db = getFirestore(firebaseLogin);
    const userCollectionRef = collection(db, 'users');

    async function logar() {
        const user = await addDoc(userCollectionRef, {
            email,
            password
        });
        if (email === 'pxulin@gmail.com' && password === '123123') {
            setLoggedIn(true);
        }
        console.log(user);
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return (
        <div id='login'>
{/*             <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={logar}>Login</button>

            {loggedIn ? (
                <div>
                    <p>Welcome, you are logged in!</p>
                    <ul>
                        {users.map((user) => (
                            <div key={user.id}>
                                <li>{user.email}</li>
                                <li>{user.password}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Please log in to see the content.</p>
            )}
 */}
        </div>
    );
};

export default Login;