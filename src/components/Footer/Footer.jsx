import './Footer.css';

const Footer =()=>{
    return <footer className='footer' style={{backgroundImage: "url(/src/assets/img/footer.png)"}}>
        <div className='redes' >
            <a href="http://www.aluracursos.com/">
                <img src="/src/assets/img/facebook.png" alt="Facebook" />
            </a>
            <a href="http://www.aluracursos.com/">
                <img src="/src/assets/img/twitter.png" alt="Twitter" />
            </a>
            <a href="http://www.aluracursos.com/">
                <img src="/src/assets/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/src/assets/img/Logo.png" alt="Logo" />
        <strong>Desarrollado por Carolina Limay</strong>
    </footer>
}
export default Footer;