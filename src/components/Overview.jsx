import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overview() {
    return (
        <>
            {/* <Header /> */}
            <div className="container">
                <h1 className="text-center mt-5 mb-4">Overview Page</h1>
                <h5 className='overviews'>
                    Welcome to our Online Tuition Management System! We are dedicated to providing a comprehensive platform that facilitates seamless interaction between educators and learners, fostering a dynamic and engaging online learning experience.

                    Our website serves as a centralized hub for students and teachers alike, offering a wide range of features designed to streamline the tuition process and optimize educational outcomes. From intuitive course enrollment to robust session management tools, we prioritize user-friendly functionality and accessibility to ensure an effortless navigation experience for all users.

                    <br /><br />
                    For Students:
                    <ul>
                        <li>Browse through our extensive catalog of courses spanning various subjects, levels, and topics.</li>
                        <li>Discover personalized learning pathways tailored to individual interests, goals, and proficiency levels.</li>
                        <li>Access high-quality educational resources, including video lectures, interactive quizzes, downloadable materials, and more.</li>
                        <li>Engage in live tutoring sessions with experienced instructors, participating in collaborative discussions, problem-solving activities, and skill-building exercises.</li>
                        <li>Monitor progress and track performance metrics to identify areas for improvement and celebrate academic achievements.</li>
                        <li>Connect with peers, exchange ideas, and collaborate on group projects within a supportive and inclusive learning community.</li>
                    </ul>
                    <br />
                    For Teachers:
                    <ul>
                        <li>Create and customize course offerings, leveraging flexible scheduling options and diverse teaching methodologies to accommodate different learning styles and preferences.</li>
                        <li>Upload and share educational content, assignments, assessments, and supplementary materials to enrich the learning experience and support student success.</li>
                        <li>Monitor student engagement and performance through comprehensive analytics and reporting tools, enabling data-driven decision-making and targeted intervention strategies.</li>
                        <li>Foster meaningful interactions with students through real-time communication channels, facilitating personalized feedback, guidance, and support.</li>
                        <li>Stay organized and efficient with streamlined administrative features, including calendar management, attendance tracking, and gradebook functionalities.</li>
                    </ul>
                    <br />
                    Our commitment to excellence extends beyond the virtual classroom, as we continuously strive to enhance the user experience and expand our course offerings to meet the evolving needs of our diverse student body. Whether you're embarking on a journey of academic discovery, seeking to expand your skill set, or pursuing lifelong learning opportunities, our Online Tuition Management System is your gateway to success.
                </h5>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Overview;
