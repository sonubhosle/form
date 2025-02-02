import React, { useState } from 'react';
import './Stories.css';

const emp_data = [
    { name: "Anup Shinde", role: "Full-Stack Developer", testimonial: "This internship was a game-changer for my career. I gained hands-on experience and landed my dream job!" },
    { name: "Pooja Mehta", role: "UI/UX Designer", testimonial: "The real-world projects gave me confidence in my design skills. I now work at a top design agency!" },
    { name: "Rahul Verma", role: "Data Scientist", testimonial: "I applied my machine learning knowledge to real datasets. This internship paved the way for my data science career!" },
    { name: "Neha Sharma", role: "Software Engineer", testimonial: "I learned the latest tech stacks and worked with an amazing team. This experience helped me secure my first software job." },
    { name: "Vikas Patil", role: "Cybersecurity Analyst", testimonial: "The hands-on training in cybersecurity practices gave me the skills to get hired at a leading IT firm." },
    { name: "Sanjay Gupta", role: "Mobile App Developer", testimonial: "Developing real-world apps during my internship gave me the expertise to work in a fast-growing startup." },
    { name: "Aarti Desai", role: "Cloud Engineer", testimonial: "This internship provided deep cloud computing insights. Now, I work with AWS and Azure daily!" },
    { name: "Manoj Iyer", role: "DevOps Engineer", testimonial: "I learned CI/CD pipelines and automation tools, making my transition into DevOps seamless!" },
    { name: "Priya Singh", role: "AI Engineer", testimonial: "This internship helped me gain real AI project experience, leading to a fantastic opportunity in AI research." },
    { name: "Rohit Chavan", role: "Backend Developer", testimonial: "Building scalable APIs during my internship prepared me for my backend developer role at a top company!" }
];

const Stories = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(emp_data.length);
    };

    return (
        <div className='stories_section'>
            {emp_data.slice(0, visibleCount).map((item, index) => (
                <div className="story_card" key={index}>
                    <div className="feedback">{item.testimonial}</div>
                    <div className="role">{item.name} - {item.role}</div>
                </div>
            ))}
            {visibleCount < emp_data.length && (
                    <div className="show_more_btn" onClick={handleShowMore}>Show More</div>

            )}
        </div>
    );
};

export default Stories;
