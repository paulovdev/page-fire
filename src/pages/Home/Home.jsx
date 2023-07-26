import './Home.css'
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";

const Home = () => {
    const { user } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);
    console.log(userLogado.uid)
    return (
        <section id='home'>
            <div className="grid">
                <h1>Olá, {userLogado.displayName}</h1>
                <p>Veja o resultado da ultima solicitação:</p>
            </div>
        </section>
    )
}

export default Home