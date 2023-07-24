import './Add.css'

const Add = () => {

    return (
        <section id='add'>
            <div className="grid">
                <h1>ADICIONAR PEÇA</h1>
                <form action="POST">
                    <div className="input-wrapper">
                        <input type="text" placeholder='Nome da peça' />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder='Preço da peça' />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder='URL da imagem da peça' />
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Add;
