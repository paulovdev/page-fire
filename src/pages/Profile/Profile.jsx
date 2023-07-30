import { UserAuth } from "../../context/AuthContext";
import Form from 'react-bootstrap/Form';

const Profile = () => {
    const { currentUser } = UserAuth()

    return (
        <main className='container'>
            <br />
            <h1>Configurações</h1>
            <br />
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder={currentUser.email}
                readOnly
            />
            <br />
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder={"Entrou em " + currentUser.metadata.creationTime}
                readOnly
            />


        </main >
    )
}

export default Profile

