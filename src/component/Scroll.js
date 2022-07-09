import React from 'react';

const Scroll = ( props ) => {
return (
    <div style={{ overflow: 'auto' , border : '5px solid transparent', height: '600px'}}>
        {props.children}
    </div>
    );
};
export default Scroll;