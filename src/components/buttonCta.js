import React from 'react'

const ButtonCta = (props) => {
    const { action } = props;
    return ( 
        <button className='button_cta'>
            {action}
        </button>
     );
}
 
export default ButtonCta;