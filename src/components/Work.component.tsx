import WorkCard from "./WorkCard.component";
import content from "../assets/content.json";
const Work = () => {
    return (
        <section id='two'>
            <header className='major'>
                <h2>Work Experience</h2>
            </header>

            <div className='row'>
                <div className='col-md-12 pl-0'>
                    <div className='timeline'>
                        <div className='outer'>
                            {content.work.map((work, index) => (
                                <WorkCard
                                    title={work.title}
                                    link={
                                        <a href={work.link.href} target={work.link.target} rel='noreferrer'>
                                            {work.link.content}
                                        </a>
                                    }
                                    description={work.description}
                                    duration={work.duration}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
