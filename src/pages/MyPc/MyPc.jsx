import './MyPc.css'
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConfig';
import {
    collection,
    doc,
    deleteDoc,
    getDocs,
} from 'firebase/firestore';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../context/authGoogle';

const MyPc = () => {
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collection(db, `configs/${userLogado.uid}/pecas`));
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, [userLogado]);

    async function excluirPeca(id) {
        const userDoc = doc(db, `configs/${userLogado.uid}/pecas`, id);
        await deleteDoc(userDoc);
    }

    return (
        <section id='mypc'>
            <div className="grid">
                <h1>MEUS COMPUTADORES</h1>
                <p>PC's, Notebooks</p>
                <div className="pcs">
                    {users.map((user) => (
                        <div key={user.id} className="pcs-card">
                            <li><img src={user.url} alt="" /></li>
                            <div className="texts">
                                <li><h1>{user.peca}</h1></li>
                                <li><p>R$ {user.preco}</p></li>
                            </div>
                            <button onClick={() => excluirPeca(user.id)}>Excluir peça</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h1>
                        TOTAL:
                        R$ {users.reduce((total, user) => total + parseInt(user.preco), 0)}
                    </h1>

                </div>
            </div>
        </section>
    );
};

export default MyPc;