import React from "react";
import SkillBlock from "./SkillBlock.component";
import Image from "./Image.component";

const Skills = () => {
    return (
        <section id='five'>
            <header className='major'>
                <h2>My Skills</h2>
            </header>
            <div className='container px-0'>
                <SkillBlock title={"Front-end Web Development"} icon='fab fa-js'>
                    <>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 my-1 mx-1'>HTML</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-4-large col-4-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/html5.png' />
                                    <p className='my-2 text-skill'>HTML</p>
                                </div>

                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-4-large col-4-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/react.webp' />
                                    <p className='my-2 text-skill'>JSX</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-4-large col-4-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/EJS.png' />
                                    <p className='my-2 text-skill'>EJS</p>
                                </div>
                            </div>
                        </div>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 m-1'>CSS</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/scss.png' />
                                    <p className='my-2 text-skill'>Scss</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/tailwindcss.svg' />
                                    <p className='my-2 text-skill'>Tailwind CSS</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/bootstrap.png' />
                                    <p className='my-2 text-skill'>Bootstrap</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-xsmall'>
                                    <Image className='mx-auto img-fluid' src='icons/material.svg' />
                                    <p className='my-2 text-skill'>Material UI</p>
                                </div>
                            </div>
                        </div>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 m-1'>JavaScript</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small '>
                                    {/* <Image  className='mx-auto img-fluid' src="nextjs.svg"  /> */}
                                    <Image src='icons/nextjs.svg' className='mx-auto img-fluid' />
                                    <p className='my-2 text-skill'>Next JS</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/react.webp' />
                                    <p className='my-2 text-skill'>React</p>
                                </div>

                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/angular.png' />
                                    <p className='my-2 text-skill'>Angular</p>
                                </div>

                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/ts.png' />
                                    <p className='my-2 text-skill'>TypeScript</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SkillBlock>
                <SkillBlock title={"Back-end Web Development"} icon='fa fa-cogs'>
                    <>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 m-1'>Backend</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/nodejs.png' />
                                    <p className='my-2 text-skill'>Node JS</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/deno.png' />
                                    <p className='my-2 text-skill'>DenoJS</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/flask.png' />
                                    <p className='my-2 text-skill'>Flask</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/spring.png' />
                                    <p className='my-2 text-skill'>Spring</p>
                                </div>
                                {/* <!-- <div className="py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small">
                                <Image  className="mx-auto img-fluid" src="graphql.png"
                                    alt="image">
                                <p className='my-2 text-skill'>GraphQL</p>
                            </div> --> */}
                            </div>
                        </div>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 m-1'>Database</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/mongo.png' />
                                    <p className='my-2 text-skill'>Mongo DB</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/sql.png' />
                                    <p className='my-2 text-skill'>MySQL</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/firebase.png' />
                                    <p className='my-2 text-skill'>Firebase</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/postgresql.png' />
                                    <p className='my-2 text-skill'>PostgresSQL</p>
                                </div>
                            </div>
                        </div>
                        <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                            <h3 className='card-title pl-3 m-1'>Others</h3>
                            <hr className='mb-2 mt-0 hr-purple' />
                            <div className='card-content m-2 row justify-content-around'>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/docker.png' />
                                    <p className='my-2 text-skill'>Docker</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/gc.png' />
                                    <p className='my-2 text-skill'>Google Cloud</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/git.png' />
                                    <p className='my-2 text-skill'>Git</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/heroku.png' />
                                    <p className='my-2 text-skill'>Heroku</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/socket.png' />
                                    <p className='my-2 text-skill'>Socket.io</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/jest.png' />
                                    <p className='my-2 text-skill'>Jest</p>
                                </div>
                                {/* <!-- <div className="py-1 px-2 justify-content-between my-2 flex flex-col  col-3-large col-6-small">
                                <Image  className="mx-auto img-fluid" src="selenium.png"
                                    alt="image">
                                <p className='my-2 text-skill'>Selenium</p>

                            </div> --> */}
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/rest.png' />
                                    <p className='my-2 text-skill'>Rest API</p>
                                </div>
                                <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                    <Image className='mx-auto img-fluid' src='icons/graphql.png' />
                                    <p className='my-2 text-skill'>GraphQL</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SkillBlock>
                <SkillBlock title={"languages"} icon='fa fa-laptop-code'>
                    <div className='card col-12-large col-12-small my-4 skill' style={{ borderRadius: "0.4rem" }}>
                        <h3 className='card-title pl-3 m-1'>Languages</h3>
                        <hr className='mb-2 mt-0 hr-purple' />
                        <div className='card-content m-2 row justify-content-around'>
                            <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                <Image className='mx-auto img-fluid' src='icons/c.png' />
                                <p className='my-2 text-skill'>C</p>
                            </div>
                            <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                <Image className='mx-auto img-fluid' src='icons/cpp.png' />
                                <p className='my-2 text-skill'>C++</p>
                            </div>
                            <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                <Image className='mx-auto img-fluid' src='icons/java.png' />
                                <p className='my-2 text-skill'>Java</p>
                            </div>
                            <div className='py-1 px-2 justify-content-between my-2 flex flex-col col-3-large col-6-small'>
                                <Image className='mx-auto img-fluid' src='icons/python.png' />
                                <p className='my-2 text-skill'>Python</p>
                            </div>
                        </div>
                    </div>
                </SkillBlock>
            </div>
        </section>
    );
};

export default Skills;
