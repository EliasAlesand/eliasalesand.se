import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileSrc from './profile.png';
import midiSrc from './midi.png';
import treeSrc from './trees_fade.png';

//==================CONTENT============================================
const introSection = 
<div class="centered">
    <img src={treeSrc} className = "fillwidth"/>
    <p className = "largetext textcentered20">Welcome.</p>
</div>

const midiText = <p>Test</p>;
const midiImage = <img src={midiSrc} className="fillwidth"/>

const footer = 
<div class="footer">
    <p className = "smalltext textcentered40">E-mail me at elias.alesand@gmail.com.</p>
</div>
//=================COMPONENTS==========================================
function Header(){
    return (
        <div className="header">
            <img src={profileSrc} width="250" id="profileimage"/>
        </div>
    );
}
function SplitContentEntry(props){
    return (
        <div className = "contententry">
            <div className="contentsplit left">{props.left}</div>
            <div className="contentsplit right">{props.right}</div>
        </div> 
        
    );
}
function SingleContentEntry(props){
    return (
        <div className = "contententry">{props.content}</div> 
    );
}
//=================COMPILING THE FINAL PAGE=============================
function Page() {
    return (
        <div id = "page">
            <Header />
            <SingleContentEntry content={introSection}/>
            <SingleContentEntry content={footer}/>
        </div>
    );
}
ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
document.title = "Elias Alesand | Welcome";