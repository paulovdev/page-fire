import { addDoc, collection } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../../services/firebaseConfig";
import { PostAuth } from "../../context/PostContext";
import { UserAuth } from '../../context/AuthContext'

const Add = () => {
    const { title, setTitle, desc, setDesc } = PostAuth();
    const { currentUser } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "posts"), {
            title,
            desc,
            currentUser: currentUser.email
        });

    }

    return (
        <main
            className="container d-flex flex-column  justify-content-center align-items-center p-3"
            style={{
                minHeight: "80vh",
            }}
        >
            <Form className="border border-dark rounded p-4 w-100" onSubmit={handleSubmit}>
                <h1>Publicar</h1>
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
                    Enviar
                </Button>

            </Form>


        </main>
    );
};

export default Add;