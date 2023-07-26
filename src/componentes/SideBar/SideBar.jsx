import './SideBar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { AiFillHome } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'
import { HiDocumentAdd } from 'react-icons/hi'
import { BiSolidLogOut } from 'react-icons/bi'




const navigation = [
    { title: 'Inicio', href: '/', icon: AiFillHome },
    { title: 'Meus Computadores', href: '/mypc', icon: RiComputerFill },
    { title: 'Adicionar', href: '/add', icon: HiDocumentAdd }
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
                        <button><item.icon size={30} color='#777' /></button>
                        {item.title}
                    </Link>
                ))}
                <div className="sidebar-item" onClick={signOut}>
                    <button>
                        < BiSolidLogOut size={30} color='#777' />
                    </button>
                    Sair
                </div>
            </div>
        </div >
    );
}

export default SideBar;


