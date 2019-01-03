import React from 'react';
import profileSrc from './profile.png';
import midiSrc from './midi.png';
import ReactDOM from 'react-dom';
import './index.css';

const midiText = <p>Test</p>;
const midiImage = <img src={midiSrc} id="midiimage"/>

function Header(){
    return (
        <div className="header">
            <img src={profileSrc} width="250" height="250" id="profileimage"/>
        </div>
    );
}

function ContentEntry(props){
    return (
        <div className = "contententry">
            <div className="contentsplit left">{props.left}</div>
            <div className="contentsplit right">{props.right}</div>
        </div> 
        
    );
}

function Page() {
    return (
        <div>
            <Header />
            <ContentEntry left={midiImage} right = {midiText}/>
            <ContentEntry left={midiText} right = {midiImage}/>
            
        </div>
    );
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);

document.title = "Elias Alesand | Welcome";

