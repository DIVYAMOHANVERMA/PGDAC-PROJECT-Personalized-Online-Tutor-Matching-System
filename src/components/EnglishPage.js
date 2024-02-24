import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './EnglishPage.css';

function EnglishPage() {
    return (
        <>
        <div id='maincoursediv'>
        <Header/>
        <div className='coursesbody'>
            <h1>English Courses</h1>
            {/* <h4>dsf</h4> */}
         <div className='coursesection'>
         <div className='cardcomponent'>
                <div className='cardbox'>
                <img src='https://i.pinimg.com/736x/e3/88/44/e38844ef720e15f03af4cb1c05a7505f.jpg' alt='error'/>
                    <h2 className='coursestopic'>Fundamental English</h2>
                </div>
            </div>
            <div className='courseabout'>
                <h4 className='courseaboutdetail'>Welcome to our Fundamental English Course! This comprehensive program is designed to provide learners with a solid foundation in English language skills. Whether you're a beginner or seeking to strengthen your existing knowledge, this course caters to individuals of all proficiency levels.

Throughout the course, you will delve into key aspects of English, including grammar, vocabulary, reading, writing, listening, and speaking. Each module is carefully crafted to cover essential concepts, building upon previous knowledge to ensure a gradual and effective learning experience.

Our engaging curriculum incorporates interactive lessons, practical exercises, and real-world examples to enhance comprehension and retention. You'll explore various topics such as sentence structure, verb tenses, word formation, idiomatic expressions, and more.

Additionally, our experienced instructors provide guidance, feedback, and support every step of the way, fostering a supportive learning environment conducive to success. Whether your goal is to improve communication skills, advance academically, or enhance career prospects, this course equips you with the tools and confidence to achieve your objectives.

Embark on your English language journey with us and unlock the doors to new opportunities, personal growth, and global connections. Let's begin this exciting adventure together!</h4>
            </div>
         </div>

        </div>
        <Footer/>
        </div>
        </>
    )
}

export default EnglishPage;