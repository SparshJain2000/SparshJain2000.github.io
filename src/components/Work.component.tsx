import WorkCard from "./WorkCard.component";

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
                            <WorkCard
                                title='Software Engineer'
                                link={<a href='https://www.wellsfargo.com/'>Wells Fargo</a>}
                                description={[
                                    <li>
                                        Developed a solution to integrate DMS system with <strong className='text-highlight'>AWS S3</strong> bucket through
                                        StorageGrid with custom metadata which is used for ingestion through REST service.
                                    </li>,
                                    <li>
                                        Adopted <strong className='text-highlight'>Karate, Selenium and Cucumber</strong> framework for BDD to automate testing
                                        and integrated the results with the Jenkins CI/CD pipeline which covered 90% test cases, reducing manual testing efforts
                                        significantly.
                                    </li>,
                                ]}
                                duration='July 2022 - Present'
                            />

                            <WorkCard
                                title='Intern Analyst'
                                link={<a href='https://www.wellsfargo.com/'>Wells Fargo</a>}
                                description={[
                                    <>
                                        Developed multiple features in Enterprise Search micro-services in
                                        <strong className='text-highlight'>Grails(Spring)</strong> and implemented Quality gates in SonarQube and performed unit
                                        testing with above 80% code coverage. Migrated AngularJS applications to
                                        <strong className='text-highlight'>Angular</strong> and improved the UI, enhancing the performance by 5 times.
                                    </>,
                                ]}
                                duration='Jan 2022 - Jul 2022'
                            />

                            <WorkCard
                                title='SDE Summer Intern'
                                link={<a href='https://www.wellsfargo.com/'>Wells Fargo</a>}
                                duration='May 2021 - July 2021'
                                description={[
                                    <li>
                                        Collaborated in a team of 7 interns in developing an ML model and web application to predict the listing gains of an IPO
                                        with accuracy of 98%.
                                    </li>,
                                    <li>
                                        Worked on complete software development lifecycle using
                                        <strong className='text-highlight'>React, RESTful APIs and RDBMS(Postgres)</strong> including complete testing and
                                        deployment.
                                    </li>,
                                ]}
                            />

                            <WorkCard
                                title='Freelance Web Developer'
                                link={<a href='https://vit.ac.in/ASCE2021/'>ASCE-VIT</a>}
                                duration='Dec 2020 - Feb 2021'
                                description={[
                                    <>
                                        Designed and developed a fully responsive website for <strong className='text-highlight'>ASCE-VIT</strong> and worked on
                                        complete software development life-cycle using <strong className='text-highlight'>React, Bootstrap and Sass</strong>{" "}
                                        including complete deployment.
                                    </>,
                                ]}
                            />

                            <WorkCard
                                title='Web Development intern'
                                link={<a href='https://curoid.co/'>Curoid</a>}
                                duration='July 2020 - Sept 2020'
                                description={[
                                    <li>
                                        Develop a full stack website (a job portal for medical professionals) with
                                        <strong className='text-highlight'>RESTful APIs using NodeJs, MongoDB</strong> for efficient data retrieval and
                                        manipulation and <strong className='text-highlight'>ReactJS</strong> for a fully responsive front-end.
                                    </li>,

                                    <li>Successfully implemented an admin console for job monitoring and efficient customization of cron job schedules.</li>,
                                ]}
                            />

                            <WorkCard
                                title='Core Committee member'
                                link={<a href='https://vinnovateit.com/'>VinnovateIT</a>}
                                duration='Sept 2019 - Mar-2021'
                                description={[
                                    <>
                                        As a Core Committee Member of <strong className='text-highlight'>VinnovateIT</strong>, an official innovation and
                                        incubation lab of SITE organized events and collaborated on projects. Demonstrated strong leadership, effective
                                        teamwork, and time management skills while fostering an engaging environment within the student-run technology and
                                        innovation club.
                                    </>,
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <ul className="actions">
                        <li><a href="#" className="button">Full Portfolio</a></li>
                    </ul> --> */}
        </section>
    );
};

export default Work;
