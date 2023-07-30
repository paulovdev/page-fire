import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import { PostAuth } from "../../context/PostContext";
import { UserAuth } from '../../context/AuthContext'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';

const Add = () => {
    const { title, setTitle, desc, setDesc } = PostAuth();
    const { currentUser } = UserAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'posts'), {
            title,
            desc,
            currentUser: currentUser.email,
        });

        setDesc('');
        setTitle('');
        setShow(true); // Set 'show' to true after form submission
    };

    return (
        <main
            className="container d-flex flex-column  justify-content-center align-items-center p-3"
            style={{
                minHeight: "80vh",
            }}
        >
            <Form className="border border-dark rounded p-4 w-100" onSubmit={handleSubmit}>
                {show}
                <h1>Posts.</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descricao</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Publicar
                </Button>

            </Form>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Post publicado!</Modal.Title>
                </Modal.Header>

            </Modal>
        </main>
    );
};

export default Add;