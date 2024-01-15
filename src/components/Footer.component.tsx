const Footer = () => {
    return (
        <footer id='footer'>
            <div className='inner'>
                <ul className='icons'>
                    <li>
                        <a href='https://wa.me/+916397696910' className='icon brands fa-whatsapp'>
                            <span className='label'>WhatsApp</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jain-sparsh/' className='icon brands fa-linkedin'>
                            <span className='label'>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/SparshJain2000' className='icon brands fa-github'>
                            <span className='label'>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/sparsh._jain/' className='icon brands fa-instagram'>
                            <span className='label'>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:jainsparsh0801@gmail.com?subject=Feedback' className='icon solid fa-envelope'>
                            <span className='label'>Email</span>
                        </a>
                    </li>
                </ul>
                <ul className='copyright'>
                    <li style={{ color: "#a9a9a9" }}>&copy; Sparsh Jain</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
