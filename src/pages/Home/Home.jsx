import './Home.css'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConfig';
import {
    collection,
    doc,
    deleteDoc,
    getDocs,
} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
    const { user } = useContext(AuthGoogleContext);
    const [users, setUsers] = useState([]);
    let userLogado = JSON.parse(user);
    console.log(userLogado.uid)

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collection(db, `configs/${userLogado.uid}/posts`));
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, [userLogado]);

    async function excluirPeca(id) {
        const userDoc = doc(db, `configs/${userLogado.uid}/posts`, id);
        await deleteDoc(userDoc);
    }

    return (
        <div id="wrapper" className="container">
            <section class="bs-callout bs-callout-primary">
                <h1>Olá, {userLogado.displayName}</h1>
                <p>Veja o resultado da ultima solicitação:</p>


                {users.map((user) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.url} />
                        <Card.Body>
                            <Card.Title>{user.title}</Card.Title>
                            <Card.Text>
                                {user.message}
                            </Card.Text>
                            <Button onClick={() => excluirPeca(user.id)} variant="danger">Deletar</Button>
                        </Card.Body>
                    </Card>
                ))}




            </section>
        </div>
    )
}

export default Home;