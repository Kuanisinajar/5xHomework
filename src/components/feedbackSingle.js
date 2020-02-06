import React from "react";

const FeedbackSingle = props => {
    const { person, identity, feedback, img_url } = props.data || {};
    return (
        <div className="container-fluid feedbackSingle">
            <div className="row justify-content-center align-items-center feedbackSingle_row">
                <div className="col-2 col-sm-4 col-md-2 col-lg-2 feedbackSingle">
                    <div className="feedbackSingle_imgWrapper">
                        <img src={img_url} alt="" />
                    </div>
                </div>
                <div className="col-6 col-sm-8 col-md-6 col-lg-6">
                    <p className="feedbackSingle_feedback">{feedback}</p>
                    <h3 className="feedbackSingle_person">{person}</h3>
                    <h6 className="feedbackSingle_identity">{identity}</h6>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSingle;
