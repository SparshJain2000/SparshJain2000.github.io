import React from "react";

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
            <p>
                I am a highly skilled and experienced web developer with a{" "}
                <strong className='text-highlight'>Bachelor's degree in Information Technology</strong> from{" "}
                <strong className='text-highlight'>VIT Vellore</strong>. My expertise lies primarily in both front-end and back-end web development, utilizing a
                variety of modern frameworks and technologies. <br />
                <br />
                In terms of front-end development, I am proficient in{" "}
                <strong className='text-highlight'>React, Angular, SCSS, Bootstrap, and TailwindCSS</strong>. My skills in back-end development include{" "}
                <strong className='text-highlight'>Springboot, NodeJS, Deno JS, MongoDB, Firebase REST API, and GraphQL</strong>. I also have experience with
                web sockets, Git, and cloud services such as <strong className='text-highlight'>Google Cloud and Azure</strong>. My proficiency in multiple
                programming languages including <strong className='text-highlight'>C++, C, Java, Python, and Javascript</strong> has given me a broad
                understanding of software development principles. <br />
                <br />
                Throughout my career, I have worked on a variety of projects ranging from e-commerce platforms to social media networks. I am highly
                detail-oriented and take pride in delivering clean, efficient, and scalable code that meets the needs of clients and end-users alike.Moreover, I
                am a team player, with strong communication and collaboration skills. I enjoy working closely with clients, designers, and other developers to
                ensure that projects are completed successfully and to the highest standards.
            </p>
        </section>
    );
};

export default Intro;
