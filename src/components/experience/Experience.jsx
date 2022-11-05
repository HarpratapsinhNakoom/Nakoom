import React from 'react';
import './experience.css';
import {FaUserGraduate, FaRegCalendarAlt} from 'react-icons/fa';
import {MdWorkOutline} from 'react-icons/md';

export default function Experience() {
    const [showEducation, setShowEducation] = React.useState(true);

    const educationData = [
        {
            heading : 'Computer Science and Engineering',
            subHeading1 :"IIIT Surat",
            subHeading2 : "CGPA - 9.22",
            dates: "2020 - Present"
        },
        {
            heading : 'Object Oriented Design',
            subHeading1 :"Love Babbar - Unacademy",
            subHeading2 : "",
            dates: "May 2022 - June 2022"
        },
        {
            heading : 'Secondary and Higher Secondary',
            subHeading1 :"St. Xavier's High School, Surat (GSEB)",
            subHeading2 : "12th Percentage - 83.7%",
            dates: "June 2016 - June 2020"
        },
    ];
    const educationSection = educationData.map((ele, index) => {
        return (
            <div className="experience-displaySection"
            key={index}
            >
                {index%2 !== 0 && <div></div>}

                {index%2 !== 0 && <div style={{height : '100%'}}>
                    <span className='displaySection-circle'></span>
                    <span className='displaySection-line' 
                            style={{
                                display : `${index === educationData.length - 1 ?
                                                            'none':'block'}`
                                }}></span>
                </div>}

                <div style={{
                    textAlign : `${index%2 === 0 ? 'right' : 'left'}`
                }}>
                    <div className="displaySection-heading">
                        {ele.heading}
                    </div>

                    <div className="displaySection-subHeading1">
                        {ele.subHeading1}
                    </div>
                    <span className="displaySection-subHeading2">
                        {ele.subHeading2}
                    </span>
                    <div className="displaySection-dates">
                        <FaRegCalendarAlt /> {ele.dates}
                    </div>
                </div>

                {index%2 === 0 && <div style={{height : '100%'}}>
                    <span className='displaySection-circle'></span>
                    <span className='displaySection-line'
                            style={{
                                display : `${index === educationData.length - 1 ?
                                                            'none':'block'}`
                                }}></span>
                </div>}

                {index%2 === 0 && <div></div>}
            </div>
        );
    })

    const workData = [
        // {
        //     heading : 'Computer Science and Engineering',
        //     subHeading1 :"IIIT Surat",
        //     subHeading2 : "CGPA - 9.22",
        //     dates: "2020 - Present"
        // },
        // {
        //     heading : 'Data Science Fundamentals',
        //     subHeading1 :"DataCamp Ce",
        //     subHeading2 : "",
        //     dates: "September 2022 - January 2023"
        // },
        // {
        //     heading : 'Object Oriented Design',
        //     subHeading1 :"Love Babbar - Unacademy",
        //     subHeading2 : "",
        //     dates: "May 2022 - June 2022"
        // },
    ];

    const workSection = workData.map((ele, index) => {
        return (
            <div className="experience-displaySection"
            key={index}
            >
                {index%2 !== 0 && <div></div>}

                {index%2 !== 0 && <div style={{height : '100%'}}>
                    <span className='displaySection-circle'></span>
                    <span className='displaySection-line' 
                            style={{
                                display : `${index === workData.length - 1 ?
                                                            'none':'block'}`
                                }}></span>
                </div>}

                <div style={{
                    textAlign : `${index%2 === 0 ? 'right' : 'left'}`
                }}>
                    <div className="displaySection-heading">
                        {ele.heading}
                    </div>

                    <div className="displaySection-subHeading1">
                        {ele.subHeading1}
                    </div>
                    <span className="displaySection-subHeading2">
                        {ele.subHeading2}
                    </span>
                    <div className="displaySection-dates">
                        <FaRegCalendarAlt /> {ele.dates}
                    </div>
                </div>

                {index%2 === 0 && <div style={{height : '100%'}}>
                    <span className='displaySection-circle'></span>
                    <span className='displaySection-line'
                            style={{
                                display : `${index === workData.length - 1 ?
                                                            'none':'block'}`
                                }}></span>
                </div>}

                {index%2 === 0 && <div></div>}
            </div>
        );
    })
  return (
    <div className='experience' id='experience'>
        <div className="experience-container">
            <div className="experience-heading">
                My Journey
            </div>
            <div className="experience-choice">
                <div className="educationChoice" 
                onClick={() => {setShowEducation(true)}}>
                    <FaUserGraduate /> Education
                </div>
                <div className="workChoice"
                onClick={() => {setShowEducation(false)}}>
                    <MdWorkOutline /> Real World Experience
                </div>
            </div>
            <div className="experience-mainSection">
                {showEducation && educationSection}
                {!showEducation && workData.length !== 0 && workSection}
                {!workData.length && !showEducation && 
                    <div className="emptyWork">
                        Looking for Opportunities to get <span className='specialText'>Real World Experience</span>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
