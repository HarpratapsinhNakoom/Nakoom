import React from 'react';
import './skills.css';
import { CgWebsite } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'
import { FaRegComments } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Skills() {
    
    const skillsData = [
        {
            logo:CgWebsite,
            heading:'Web Development',
            description:'I am a full stack web developer who knows React.js, Node.js and MongoDB. I enjoy working on side projects, building new tools and experimenting with different technologies'
        },
        {
            logo:BsCodeSlash,
            heading:'Problem Solving',
            description:'I have been solving DSA problems on various coding platforms, mainly LeetCode and GeeksForGeeks. Have solved 400+ questions of all difficulty levels.'
        },
        {
            logo:FaRegComments,
            heading:'Communication',
            description:'Can communicate effeciently in English, Hindi and Gujarati. Practised english speaking since early school days and actively took part in speaking sessions.'
        },
    ];

    const subSkillsData = [
        {
            heading:'Programming Languages',
            techList : [
                {
                    name:"C/C++",
                    rating : 4
                },
                {
                    name:"Python",
                    rating : 3
                },
                {
                    name:"Java",
                    rating : 2
                },
                {
                    name:"Javascript",
                    rating : 4
                }
            ]
        },
        {
            heading:'Front-End development',
            techList : [
                {
                    name:"HTML",
                    rating : 4
                },
                {
                    name:"CSS",
                    rating : 3
                },
                {
                    name:"React",
                    rating : 4
                },
                {
                    name:"Bootstrap 5",
                    rating : 3
                },
                {
                    name:"Tailwind CSS",
                    rating : 2
                }
            ]
        },
        {
            heading:'Back-End development',
            techList : [
                {
                    name:"NodeJS",
                    rating : 2
                },
                {
                    name:"Express",
                    rating : 3
                },
                {
                    name:"MongoDB",
                    rating : 3
                },
                {
                    name:"Mongoose",
                    rating : 3
                },
                {
                    name:"PHP",
                    rating : 2
                },
                {
                    name:"MySQL",
                    rating : 4
                }
            ]
        },
    ];

    const showCardItems = skillsData.map( (ele, index) => {
        return (
            <div className="skills-cardItem" key={index}>
                <div className="skills-cardItem-logo">
                    <ele.logo />
                </div>
                <div className="skills-cardItem-heading">
                    {ele.heading}
                </div>
                <div className="skills-cardItem-desc">
                    {ele.description}
                </div>
            </div>
        );
    })

    const showSubSkills = subSkillsData.map( (ele, index) => {
        return (
            <div className="subSkills-cardItem" key={index}>
                <div className="subSkills-cardItem-heading">
                    {ele.heading}
                </div>
                {
                    ele.techList.map((item, i) => {
                        return(
                            <div className="subSkills-cardItem-listItem" key={i}>
                                <p>{item.name}</p>
                                <div className="skillStars">
                                    {
                                        [...Array(item.rating)].map((star, index) => {
                                            return (
                                                <span key={index} style={{
                                                        color : 'var(--special)',
                                                        fontSize : '15px'
                                                        }}>
                                                    <AiFillStar />
                                                </span>
                                            );
                                        })
                                    }
                                    {
                                        [...Array(5 - item.rating)].map((star, index) => {
                                            return (
                                                <span key={index}
                                                    style={{
                                                        color : 'var(--special)',
                                                        fontSize : '15px'
                                                        }}>
                                                    <AiOutlineStar />
                                                </span>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    })
  return (
    <div className='skills' id='skills'>
        <div className="skills-container">
            <div className="skills-heading">
                Skills
            </div>
            <div className="skills-cards">
                {showCardItems}
            </div>
            <div className="subSkills-heading">
                Technologies I have worked with
            </div>

            <div className="subSkills-cards">
                {showSubSkills}
            </div>
        </div>
    </div>
  )
}
