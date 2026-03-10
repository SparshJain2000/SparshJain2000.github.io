import content from "../assets/content.json";
const Intro = () => {
    return (
        <section id='one'>
            <header className='major'>
                <h2>
                    About Me
                    <br />
                </h2>
            </header>

            <h3 className='col-text'>
                Hello ! My name is <strong className='text-highlight'>Sparsh Jain</strong>.
            </h3>
            <p dangerouslySetInnerHTML={{ __html: content.about }} />
        </section>
    );
};

export default Intro;
