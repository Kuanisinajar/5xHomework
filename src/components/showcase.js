import React from 'react'

// components
import Block from './block';
import TitledContainer from './titledContainer';
import CoverCard from './coverCard';

const Showcase = (props) => {
    const { showcase } = props.data || {};
    console.log(showcase)
    return ( 
        <Block id='showcase'>
            <TitledContainer title='案例作品 Showcase'>
                <div className="row">
                    {
                         showcase.map((info, i) => {
                            return (
                                <div className="col-4" key={i}>
                                    <CoverCard ratio={0.612} img_url={info.img_url}>
                                        <h2 className="showcase_name">
                                            {info.name}
                                        </h2>
                                        <p>
                                            {info.description}
                                        </p>
                                    </CoverCard>
                                </div>
                            )
                        })
                    }
                </div>
            </TitledContainer>
        </Block>
     );
}
 
export default Showcase;