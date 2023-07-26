import './Add.css';
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../context/authGoogle';

const Add = () => {
    const [peca, setPeca] = useState('');
    const [preco, setPreco] = useState('');
    const [url, setUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'configs');
    const { user } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    async function criarDado() {
        try {
            const config = await addDoc(collection(db, `configs/${userLogado.uid}/pecas`), {
                preco,
                peca,
                url
            });
            console.log('dados salvos com sucesso', config);
            setSuccessMessage('Peça registrada com sucesso!');
            setPeca('');
            setPreco('');
            setUrl('');
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
        <div id="add">
            <div className="grid">
                <h1>ADICIONAR PECA</h1>
                <div className='form'>
                    {successMessage && <p>{successMessage}</p>}
                    <div className="input-wrapper">
                        <label htmlFor="">Peça</label>
                        <input
                            type="text"
                            placeholder="Nome da peça"
                            value={peca}
                            required
                            onChange={(e) => setPeca(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="">Preço</label>
                        <input
                            type="number"
                            placeholder="Preço da peça"
                            value={preco}
                            required
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">Imagem</label>
                        <input
                            type="url"
                            placeholder="URL da imagem da peça"
                            value={url}
                            required
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <button onClick={criarDado}>Registrar peça</button>
                </div>
            </div>
        </div>
    );
};

export default Add;