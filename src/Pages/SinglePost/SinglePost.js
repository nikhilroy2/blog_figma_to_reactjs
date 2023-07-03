import React from 'react';
import './scss/SinglePost.css'
function SinglePost(props) {
    window.document.title = 'SinglePost'

    return (
        <div id='SinglePost'>
            <section>
                <div className="container_wrapper">
                    <div className="section_header">
                        <div className="">
                            <div className="section_type">
                                Technology
                            </div>
                            <h2 className='section_title'>
                                The Impact of Technology on the Workplace: How Technology is Changing
                            </h2>
                            <div className="user_tags">
                                <img src={require('../../Images/user_ts.png')} alt="img" />
                                <span className="user_name">Tracey Wilson</span>
                                <span className="date">August 20, 2022</span>
                            </div>

                            <div className="img_wrapper">
                                <img src={require('../../Images/single_page_img.png')} alt="img" />
                            </div>
                        </div>
                    </div>

                    <div className="section_body">
                        <div className="content_wrapper">
                            <p>
                                Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.

                                <br /><br />

                                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.


                            </p>
                            <strong className="content_strong">
                                Research Your Destination
                            </strong>

                            <p>
                                Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
                            </p>

                            <strong className="content_strong">
                                Plan Your Itinerary
                            </strong>

                            <p>
                                While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                                <br /><br />
                                Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="section_footer">
                        <div className="user_quote">
                            <q>
                                Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.
                            </q>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default SinglePost;