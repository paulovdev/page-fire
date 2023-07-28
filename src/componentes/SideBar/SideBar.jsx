import './SideBar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navigation = [
    { title: 'Inicio', href: '/home' },
    { title: 'Adicionar', href: '/add' }
];

const SideBar = () => {
    const { user, signOut } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    const defaultPhotoURL = 'default-photo-url.jpg';

    const photoURL = userLogado?.photoURL || defaultPhotoURL;

    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand className="d-inline-flex p-2 gap-3">
                        {navigation.map((item) => (
                            <Link to={item.href} key={item.title} className="sidebar-item">
                                <p>{item.title}</p>
                            </Link>
                        ))}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end collapse" id="navbarNavAltMarkup">
                        <Navbar.Text>
                            <div className="profile">
                                <img
                                    src={photoURL}
                                    width={39}
                                    alt={userLogado?.displayName}
                                />
                                <div className="sidebar-item" onClick={signOut}>
                                    <p> Sair</p>
                                </div>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default SideBar;