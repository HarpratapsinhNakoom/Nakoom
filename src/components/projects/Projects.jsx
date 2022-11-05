import React from 'react';
import './projects.css'

export default function Projects() {
    const projectData = [
        // {
        //     heading : 'LearnCodeGroww',
        //     desc : <>A solution for <span className='specialText'>Interview Prep</span>.
        //     <br />Get to <span className='specialText'>visualize algorithm</span>, learn them and even code in our code editor.<br />Wanna discuss with friends? Use our real time shared code editor  <br /> Got Stuck? See the code in multiple languages or see the video solution</>,
        //     bgImage : "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        // githubLinks :"/",
        //     demoLink:"/"
        // },
        
        {
            heading : 'Kiyopon Shop',
            desc : <>Are you a fan of Anime? Do you love to cosplay as your favourite character? Stop fantasizing and get to buy all that anime apparel right here! <br />
            <br />We have all your favourite anime merch, shipped right to your door. From the latest merch to classics, we've got you covered. <br />
            Browse through our wide selection of anime merch, from funny and cute to serious and dark. We offer a range of products from different franchises to satisfy your craving for all things anime.</>,
            bgImage : "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            githubLink :"/",
            demoLink:"/",
            readMoreLink:'/'
        },
        {
            heading : 'Know your money',
            desc : <>Keep track of your daily expenses and get a good view of what you spend money on. <br/>
            Know Your Money makes it easy to set limits on your monthly, quarterly and daily budget. Know where you stand financially and be able to control your spending habits better.</>,
            bgImage : "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            githubLink :"/",
            demoLink:"/",
            readMoreLink:"/",
        },
        {
            heading : 'MovieZilla',
            desc : <>
                Scroll through the latest movies in your town and see what people are saying about them. <br />
                Our star-based review system lets you know what other people think of the movie and if it's worth watching or not. You'll be informed and entertained in no time using MovieZilla!
            </>,
            bgImage : "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/03/how-to-write-movie-review.jpg",
            githubLink :"https://github.com/HarpratapsinhNakoom/MovieZilla.github.io",
            demoLink:"https://harpratapsinhnakoom.github.io/MovieZilla.github.io/",
            readMoreLink:"/",
        },
    ];

    const showProjectCards = projectData.map((ele, index) => {
        return(
            <div className={`projectItem${index + 1} projectItem`}
                key={index}
                style={{
                    backgroundImage : `url('${ele.bgImage}')`
                }}>
                <div className="projectItem-content">
                    <div className="projectCard-heading">{ele.heading}</div>
                    <div className="projectCard-desc">{ele.desc}</div>
                    <div className="projectCard-links">
                        <a href={`${ele.demoLink}`} rel="noreferrer" target="_blank" className="links">Demo</a>
                        <a href ={`${ele.githubLink}`} rel="noreferrer" target="_blank" className="links">Github</a>
                        <a href ={`${ele.readMoreLink}`} rel="noreferrer" target="_blank" className="links">Read more</a>
                    </div>
                </div>
            </div>
        );
    })
  return (
    <div className='projects' id='projects'>
        <div className="projects-container">
            <div className="projects-heading">Some of my works...</div>
            <div className="projects-gridContainer">
                {showProjectCards}
            </div>
        </div>
    </div>
  )
}
