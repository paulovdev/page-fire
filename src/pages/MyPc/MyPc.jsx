import './MyPc.css'

const configs = [
    { img: './pc_img/pc1.jpg', cpu: 'AMD Ryzen 5 4600G', gpu: 'Geforce GTX1650' },
    { img: './pc_img/pc1.jpg', cpu: 'AMD Ryzen 5 4600G', gpu: 'Geforce GTX1650' },
]

const MyPc = () => {
    return (
        <section id='mypc'>
            <div className="grid">
                <h1>MEUS COMPUTADORES</h1>
                <p>PC's, Notebooks</p>
                <div className="pcs">
                    {configs.map((item, i) => (
                        <div key={i} className="pcs-card">
                            <img src={item.img} />
                            <h1>{item.cpu}</h1>
                            <p>{item.gpu}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyPc
