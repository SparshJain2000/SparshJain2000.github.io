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
                Hello ! My name is Sparsh Jain. I am a <strong className='text-highlight'>Full stack web developer.</strong>
            </h3>
            <p dangerouslySetInnerHTML={{ __html: content.about }} />
        </section>
    );
};

export default Intro;
