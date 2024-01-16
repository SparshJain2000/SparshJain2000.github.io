import React from "react";
import ProjectCard from "./ProjectCard.component";

const Projects = () => {
    return (
        <section id='three'>
            <header className='major'>
                <h2>Projects</h2>
            </header>
            <div className='row justify-content-between project-container'>
                <ProjectCard
                    title='Curoid'
                    github='https://github.com/SparshJain2000/canopus'
                    deployed={"https://curoid.co"}
                    image='07.webp'
                    description='A Job Portal for healthcare providers using MERN stack'
                />

                <ProjectCard
                    title='Salary Predictor'
                    github='https://github.com/SparshJain2000/Salary-Predictor'
                    deployed={null}
                    image='10.webp'
                    description='A platform to predict salary of people working in technical field'
                />

                <ProjectCard
                    title='Cyber Bully Detection'
                    github='https://github.com/SparshJain2000/cyber-bully-detection'
                    deployed={null}
                    image='04.webp'
                    description='Social Media website built using MERN stack preventing post of offensive comments and posts'
                />

                <ProjectCard
                    title='ASCE'
                    github='https://github.com/SparshJain2000/asce-site'
                    deployed={"https://vit.ac.in/ASCE2021/"}
                    image='09.webp'
                    description='Official website for ASCE-VIT, a chapter in VIT, Vellore using ReactJS'
                />

                <ProjectCard
                    title='Jobhub'
                    github='https://github.com/SparshJain2000/jobhub'
                    deployed={null}
                    image='08.webp'
                    description='A Job Portal for daily wage job workers and employers using MERN stack'
                />

                <ProjectCard
                    title='Edutracker'
                    github='https://github.com/SparshJain2000/edutracker'
                    deployed={"http://edutrackerr.herokuapp.com/"}
                    image='01.webp'
                    description='A Learning Management System using NodeJS and EJS'
                />

                <ProjectCard
                    title='Convo'
                    image='03.webp'
                    github='https://github.com/SparshJain2000/convo'
                    deployed={"https://convoo.herokuapp.com/"}
                    description='A chat application using socket.io and NodeJS.'
                />
                <ProjectCard
                    title='WeatherCast'
                    image='06.webp'
                    github='https://github.com/SparshJain2000/WeatherCast'
                    deployed={"https://weathercaast.netlify.app/"}
                    description='Weather forecasting website with data visualisation'
                />

                <ProjectCard
                    title='BlogApp'
                    image='02.webp'
                    github='https://github.com/SparshJain2000/blogApp'
                    deployed={"https://blogg--app.herokuapp.com/"}
                    description='A blogging website using MERN stack.'
                />

                <ProjectCard
                    title='FeedIndia'
                    image='05.webp'
                    github='https://github.com/bit-Chor/feedIndia'
                    deployed={null}
                    description='Food donation website using NodeJS and MongoDB'
                />
            </div>
            {/* <!-- <ul className="actions">
                <li><a href="#" className="button">Full Portfolio</a></li>
            </ul> --> */}
        </section>
    );
};

export default Projects;
