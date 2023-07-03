import React from 'react';
import './scss/BlogUpload.css';

function BlogUpload(props) {
    return (
        <div id='BlogUpload'>
            <section>
                <div className="container_wrapper">
                    <div className="section_header">
                        <span>Upload Image</span>
                        <svg width="140" height="32" viewBox="0 0 140 32" fill="none" >
                            <g opacity="0.5">
                                <path d="M54.7931 9.93391H64.827V20.2675C64.827 20.4019 65.3158 20.5118 65.9132 20.5118H74.0597C74.6571 20.5118 75.1459 20.4019 75.1459 20.2675V9.93391H85.2069C86.1166 9.93391 86.619 9.69871 86.0623 9.53987L70.8554 5.20851C70.7538 5.1793 70.624 5.15568 70.4758 5.13943C70.3276 5.12319 70.1649 5.11475 70 5.11475C69.8352 5.11475 69.6725 5.12319 69.5243 5.13943C69.3761 5.15568 69.2462 5.1793 69.1446 5.20851L53.9377 9.53682C53.3811 9.69871 53.8834 9.93391 54.7931 9.93391V9.93391ZM119.694 19.3511H111.547C110.95 19.3511 110.461 19.4611 110.461 19.5955V24.2995H29.5388V19.5955C29.5388 19.4611 29.05 19.3511 28.4526 19.3511H20.3061C19.7086 19.3511 19.2198 19.4611 19.2198 19.5955V25.6435C19.2198 26.1842 21.1614 26.621 23.5647 26.621H116.435C118.839 26.621 120.78 26.1842 120.78 25.6435V19.5955C120.78 19.4611 120.291 19.3511 119.694 19.3511Z" fill="white" />
                            </g>
                        </svg>

                    </div>
                    <div className="section_body">
                        <div className="form_group">
                            <label htmlFor="" className="form_label">Post Title:</label>
                            <input type="text" className="form_control" />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className="form_label">Date:</label>
                            <input type="date" className="form_control" />
                        </div>
                        <div className="form_group">
                            <label htmlFor="" className="form_label">Description:</label>
                            <textarea className="form_control"></textarea>
                        </div>
                    </div>
                    <div className="section_footer">
                        <button className="upload_btn">
                            Upload post
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogUpload;