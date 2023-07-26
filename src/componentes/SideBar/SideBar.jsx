import './SideBar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { AiOutlineHome } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { GrFormAdd } from 'react-icons/gr'
import { HiOutlineLogout } from 'react-icons/hi'

const navigation = [
    { title: 'Inicio', href: '/', icon: AiOutlineHome },
    { title: 'Meus Computadores', href: '/mypc', icon: BsGrid },
    { title: 'Adicionar', href: '/add', icon: GrFormAdd }
];

const SideBar = () => {
    const { user, signOut } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    const defaultPhotoURL = 'default-photo-url.jpg';

    return (
        <div className='sidebar'>
            <div className="sidebar-items">
                <div className="profile">
                    <img
                        src={userLogado?.photoURL || defaultPhotoURL}
                        width={39}
                        alt={userLogado?.displayName}
                    />
                    <p>Olá, <span>{userLogado?.displayName}</span></p>
                </div>
                {navigation.map((item) => (
                    <Link to={item.href} key={item.title} className="sidebar-item">
                        <button><item.icon size={30} /></button>
                        {item.title}
                    </Link>
                ))}
                <div className="sidebar-item" onClick={signOut}>
                    <button>
                        < HiOutlineLogout size={30} />
                    </button>
                    Sair
                </div>
            </div>
        </div >
    );
}

export default SideBar;
