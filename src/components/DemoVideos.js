import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './DemoVideos.css';

function DemoVideos() {
    const handleVideoClick = (videoUrl) => {
        console.log('Clicked on video:', videoUrl);
      };
    return (
        <>
            <Header />
            <div className='maindemodiv'>
                <h2 className='demovideosh2'>Demo Videos</h2>
                <div className='mainvideos'>
                    <div>
                        <h3>Video 1:Lecture on a Blood circulation of Heart</h3>
                        <video controls onClick={() => handleVideoClick('../videos.mp4')}>
                            <source src='../videos.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <h3>Video 2: Lecture on a Quantitive Aptitude'LCM AND HCF' Concept</h3>
                        <video controls onClick={() => handleVideoClick('../videos.mp4')}>
                            <source src='../videos.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DemoVideos;