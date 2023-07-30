import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const { logout } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto p-1 d-flex align-items-center gap-3 ">

                        <Nav.Item className='d-flex gap-3' as="li">
                            <Link className='text-secondary font-weight-bold' to='/home'>Inicio</Link>

                        </Nav.Item >
                        <Nav.Item className='d-flex gap-3' as="li">
                            <Link className='text-secondary font-weight-bold' to='/add'>Adicionar</Link></Nav.Item>

                        <NavDropdown title='Perfil'>

                            <NavDropdown.Item>
                                <Link to='/profile' className='text-secondary font-weight-bold'>Configuracoes</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <p onClick={handleLogout}> Sair</p>
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;