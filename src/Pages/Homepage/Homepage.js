import React from 'react';
import './scss/Homepage.css'
function Homepage(props) {
    const card_object = [
        {
            id: 1,
            card_img: require('../../Images/card_1.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_1.png'),
            user_name: 'Tracey Wilson',
            date: 'August 20, 2022'
        },
        {
            id: 2,
            card_img: require('../../Images/card_2.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_2.png'),
            user_name: 'Jason Francisco',
            date: 'August 20, 2022'
        },
        {
            id: 3,
            card_img: require('../../Images/card_3.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_3.png'),
            user_name: 'Elizabeth Slavin',
            date: 'August 20, 2022'
        },
        {
            id: 4,
            card_img: require('../../Images/card_4.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_4.png'),
            user_name: 'Ernie Smith',
            date: 'August 20, 2022'
        },
        {
            id: 5,
            card_img: require('../../Images/card_5.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_5.png'),
            user_name: 'Eric Smith',
            date: 'August 20, 2022'
        },
        {
            id: 6,
            card_img: require('../../Images/card_6.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_6.png'),
            user_name: 'Tracey Wilson',
            date: 'August 20, 2022'
        },
        {
            id: 7,
            card_img: require('../../Images/card_7.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_7.png'),
            user_name: 'Jason Francisco',
            date: 'August 20, 2022'
        },
        {
            id: 8,
            card_img: require('../../Images/card_8.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_8.png'),
            user_name: 'Elizabeth Slavin',
            date: 'August 20, 2022'
        },
        {
            id: 9,
            card_img: require('../../Images/card_9.png'),
            card_type: 'Technology',
            description: `The Impact of Technology on the Workplace: How Technology is Changing`,
            user_img: require('../../Images/user_9.png'),
            user_name: 'Ernie Smith',
            date: 'August 20, 2022'
        },
    ]
    return (
        <div id='Homepage'>
            <div className="container_wrapper">
                <section>
                    <h2 className='section_title'>
                        Latest Post
                    </h2>



                    <div className="card_flex_wrapper">
                        {card_object.map((v, i) => {
                            return (

                                <div className="card" key={v.id}>
                                    <div className="card_header">
                                        <img src={v.card_img} alt="img" />
                                    </div>
                                    <div className="card_body">
                                        <small>{v.card_type}</small>

                                        <p>
                                            {v.description}
                                        </p>
                                    </div>

                                    <div className="card_footer">
                                        <div className="user_control">
                                            <img src={v.user_img} alt="img" />
                                            <span className="user_name">{v.user_name}</span>
                                            <span className="date">{v.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <div className="btn_card_wrapper">
                        <button className="btn_card_all_view">
                            View All Post
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Homepage;