import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../context/authGoogle';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Add = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const usersCollectionRef = collection(db, 'configs');
    const { user } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    async function criarDado() {
        try {
            const config = await addDoc(collection(db, `configs/${userLogado.uid}/posts`), {
                title,
                message,
                url
            });
            console.log('dados salvos com sucesso', config);
            setSuccessMessage('Postagem criada com sucesso!');
            setTitle('');
            setMessage('');
            setUrl('');
            setShow(true);
        } catch (e) {
            console.error('Erro ao adicionar documento', e);
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return (
        <div className="container">
            <Form>
                {successMessage && <>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Postagem criada com sucesso!
                            </Modal.Title>
                        </Modal.Header>
                    </Modal>
                </>}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text"
                        placeholder="Titulo do texto"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control type="text"
                        placeholder="Digite sua mensagem..."
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control
                        type="url"
                        value={url}
                        placeholder="URL da imagem"
                        required
                        onChange={(e) => setUrl(e.target.value)} />
                </Form.Group>

                <Button onClick={criarDado} variant="primary" type="submit">
                    Criar
                </Button>
            </Form>
        </div>
    );
};

export default Add;