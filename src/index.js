import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileSrc from './profile.png';
import midiSrc from './midi.png';
import treeSrc from './trees_fade.png';

//==================CONTENT============================================
const introSection = 
<div className="centered">
    <img src={treeSrc} className = "fillwidth"/>
    <p className = "largetext textcentered20 normalfont">Welcome.</p>
</div>

const midiText = <p>Test</p>;
const midiImage = <img src={midiSrc} className="fillwidth"/>

const footer = 
<div className="footer">
    <p className = "smalltext textcentered40 normalfont">E-mail me at elias.alesand@gmail.com.</p>
</div>
//=================COMPONENTS==========================================
function Header(){
    return (
        <div className="header">
            <p id = "title"><span className ="lightfont">Elias</span> <span className = "normalfont">Alesand</span></p>
            <p id = "undertitle" className ="mediumfont">M.Sc. Student in Information Technology with an AI & Machine Learning profile</p>
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
//=================FINAL PAGE========================================
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