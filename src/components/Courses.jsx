import React from 'react';
// import './Courses.css';
// import { withRouter } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import { Link } from 'react-router-dom';

function Courses ({history}) {
    // const addToCart = (price, image) => {
    //     localStorage.setItem('cartPrice', price);
    //     localStorage.setItem('cartImage', image);
    //     history.push("/AddToCart");
    // };
    return (
        <div id='maincoursediv'>
        {/* <Header/> */}
        <div className='coursesbody'>
            <h1>Our Courses</h1>
            <div className='cardcomponent'>
                <div className='cardbox'>
                <img src='https://i.pinimg.com/736x/e3/88/44/e38844ef720e15f03af4cb1c05a7505f.jpg' alt='error'/>
                    <h2 className='coursestopic'>Fundamental English</h2>
                    <h4>Price: $69.00</h4>
                    <Link to="/englishpage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>

                    {/* <button onClick={() => addToCart(69.00, 'https://i.pinimg.com/736x/e3/88/44/e38844ef720e15f03af4cb1c05a7505f.jpg')} className='enrollBtn'>Add to Cart</button> */}
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://img.freepik.com/premium-vector/modern-science-particle-molecule-element-logo-design-logo-scienceatombiologytechnologyphysicslab_607588-10571.jpg' alt='error'/>
                    <h2 className='coursestopic'>Science</h2>
                    <h4>Price: $79.00</h4>
                    <Link to="/sciencepage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    {/* <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link> */}
                    </div>

                </div>
                <div className='cardbox'>
                <img src='https://i.pinimg.com/736x/6c/2d/40/6c2d40e51b303afa827ba31f73b48223.jpg' alt='error'/>
                    <h2 className='coursestopic'>Maths</h2>
                    <h4>Price: $99.00</h4>
                    <Link to="/mathspage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://abctrainings.in/media/thumbnails/computer_fundamental.jpg' alt='error'/>
                    <h2 className='coursestopic'>Fundamental Computer</h2>
                    <h4>Price: $99.00</h4>
                    <Link to="/fundamentalcomputerpage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://cdn.worldvectorlogo.com/logos/reasoning.svg' alt='error'/>
                    <h2 className='coursestopic'>Reasoning</h2>
                    <h4>Price: $81.00</h4>
                    <Link to="/ReasoningPage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://static.wixstatic.com/media/998112_2c6a5be326a94411aacaab6b2aac0932~mv2.jpg/v1/fill/w_560,h_318,al_c,q_80,usm_2.00_1.00_0.00,enc_auto/Image-empty-state.jpg' alt='error'/>
                    <h2 className='coursestopic'>Aptitude</h2>
                    <h4>Price: $92.00</h4>
                    <Link to="/Aptitudepage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvkOgApDaMFmmsfgQpWyn7ay3TwpFZukPpQ&usqp=CAU' alt='error'/>
                    <h2 className='coursestopic'>Personality Development</h2>
                    <h4>Price: $90.00</h4>
                    <Link to="/PersonalityDevelopmentPage"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg' alt='error'/>
                    <h2 className='coursestopic'>Business Communication</h2>
                    <h4>Price: $49.00</h4>
                    <Link to="/BusinessCommunication"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                    </Link>
                    </div>
                </div>
                <div className='cardbox'>
                <img src='https://t4.ftcdn.net/jpg/00/79/77/19/360_F_79771929_dkEtuIuxFdNOlv6Evj1Nj1kaSLgSas34.jpg' alt='error'/>
                    <h2 className='coursestopic'>Finance</h2>
                    <h4>Price: $61.00</h4>
                    <Link to="/Finance"><button className='enrollBtn'>VIEW DETAILS ABOUT COURSE</button></Link>
                    <Link to="/PaymentPage"><button className='enrollBtn'>PAY FOR FULL COURSE</button></Link>
                    <div className='addToCartBtn'>
                    <Link to={{ pathname: "/cart", state: { price: 69.00 } }}>
                            <button className='enrollBtn'>Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </div>

    )
}

export default Courses;