import './SideBar.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { GrFormAdd } from 'react-icons/gr'
import { HiOutlineLogout } from 'react-icons/hi'

const navigation = [
    { title: 'Inicio', href: '/', icon: AiOutlineHome },
    { title: 'Meus Computadores', href: '/mypc', icon: BsGrid },
    { title: 'Adicionar', href: '/add', icon: GrFormAdd },
    { title: 'Sair', href: '/', icon: HiOutlineLogout },
]
const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-items">
                <div className="profile">
                    <img src="./images/pxulin.jpg" width={40} />
                    <p>Olá, <span>Paulo Vitor</span></p>
                </div>
                {navigation.map((item) => (
                    <Link to={item.href} key={item.title} className="sidebar-item">
                        <button><item.icon size={30} /></button>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default SideBar
