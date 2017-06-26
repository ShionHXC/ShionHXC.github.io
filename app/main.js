import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-media';
import PCIndex from './pc_components/pc_index.jsx';
import MobileIndex from './mobile_components/mobile_index.jsx';

ReactDOM.render(
    <div>
        <MediaQuery query='(min-width:1224px)'>
            <PCIndex></PCIndex>
        </MediaQuery>
        <MediaQuery query='(max-width:1224px)'>
            <MobileIndex></MobileIndex>
        </MediaQuery>
    </div>
    ,
    document.getElementById("app")
)