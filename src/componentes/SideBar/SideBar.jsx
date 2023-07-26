import './SideBar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { AiFillHome } from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'
import { HiDocumentAdd } from 'react-icons/hi'
import { BiSolidLogOut } from 'react-icons/bi'




const navigation = [
    { title: 'Inicio', href: '/home', icon: AiFillHome },
    { title: 'Pecas', href: '/mypc', icon: RiComputerFill },
    { title: 'Adicionar', href: '/add', icon: HiDocumentAdd }
];

const SideBar = () => {
    const { user, signOut } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    const defaultPhotoURL = 'default-photo-url.jpg';

    const photoURL = userLogado?.photoURL || defaultPhotoURL;

    return (
        <div className='sidebar'>
            <div className="sidebar-items">
                <div className="profile">

                    <img
                        src={photoURL}
                        width={39}
                        alt={userLogado?.displayName}
                    />

                    <p>Olá, <span>{userLogado?.displayName}</span></p>
                </div>
                {navigation.map((item) => (
                    <Link to={item.href} key={item.title} className="sidebar-item">
                        <button><item.icon size={24} /></button>
                        <p>{item.title}</p>
                    </Link>
                ))}
                <div className="sidebar-item" onClick={signOut}>
                    <button>< BiSolidLogOut size={24} /></button>
                    <p> Sair</p>
                </div>
            </div>
        </div >
    );
}

export default SideBar;

