import React from "react";

const FeedbackSingle = props => {
    const { person, identity, feedback, img_url } = props.data || {};
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 feedbackSingle">
                    <div className="feedbackSingle_imgWrapper">
                        <img src={img_url} alt="" />
                    </div>
                </div>
                <div className="col-10">
                    <p className="feedbackSingle_feedback">{feedback}</p>
                    <h3 className="feedbackSingle_person">{person}</h3>
                    <h6 className="feedbackSingle_identity">{identity}</h6>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSingle;
