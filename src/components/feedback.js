import React from 'react';

// components
import Block from './block';
import TitledContainer from './titledContainer';
import FeedbackSingle from './feedbackSingle';

const Feedback = () => {
    return ( 
        <Block id="feedback">
            <TitledContainer title="看看他們怎麼說">
                <div className="row">
                    <div className="col-12">
                        <FeedbackSingle />
                    </div>
                </div>
            </TitledContainer>
        </Block>
     );
}
 
export default Feedback;