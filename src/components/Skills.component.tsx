import React from "react";
import SkillBlock from "./SkillBlock.component";
import Image from "./Image.component";
import content from "../assets/content.json";
const Skills = () => {
    return (
        <section id='five'>
            <header className='major'>
                <h2>My Skills</h2>
            </header>
            <div className='container px-0'>
                {content.skills.map((skill) => (
                    <SkillBlock key={skill.title} title={skill.title} icon={skill.icon}>
                        <>
                            {skill.categories.map((category) => (
                                <div
                                    className={`card col-12 col-md-${12 / skill.categories.length} col-12-small my-2 px-2 skill`}
                                    style={{ borderRadius: "0.4rem" }}>
                                    <h3 className='card-title pl-3 my-1 mx-1'>{category.name}</h3>
                                    <hr className='mb-2 mt-0 hr-purple' />
                                    <table className='card-content my-4 mx-auto' style={{ width: "max-content" }}>
                                        {category.skills.map((skill, i) => (
                                            <tr className='my-2' style={{ height: "20px" }}>
                                                <td style={{ height: "inherit", paddingTop: "0.5rem" }}>
                                                    <Image className='img-fluid h-100' src={skill.icon} loader='my-auto sm' />
                                                </td>
                                                <td>
                                                    <span className='text-skill'>{skill.title}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                            ))}
                        </>
                    </SkillBlock>
                ))}
            </div>
        </section>
    );
};

export default Skills;
