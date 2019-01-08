import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileSrc from './profile.png';
import midiSrc from './midi.png';
import treeSrc from './trees_fade.png';
import githubSrc from './github.png';
import linkedinSrc from './linkedin.png';

//==================CONTENT============================================
const header = 
<div id="header">
    <div className = "left center sidemargin" id = "headertext">
        <p><span className ="lightfont largetext">Elias</span> <span className = "normalfont largetext">Alesand</span></p>
        <p className ="mediumfont smalltext" id = "subtitle">M.Sc. Student in Information Technology with an AI & Machine Learning profile</p>
    </div>
    <div id = "headerlinks" className = "left">
        <a target="_blank" href="https://www.linkedin.com/in/eliasalesand/">
            <img src={linkedinSrc} className="headerlink"/>
        </a>
        <a target="_blank" href="https://github.com/EliasAlesand">
            <img src={githubSrc} className="headerlink"/>
        </a>   
        <img src={profileSrc} id="profileimage"/> 
    </div>
</div>

const introSection = 
<div className="center">
    <img src={treeSrc} className = "fillwidth"/>
    <p className = "largetext normalfont" id= "welcometext">Welcome</p>
</div>

const footer = 
<div className="footer">
    <p className = "smalltext textcentered40 normalfont">E-mail me at elias.alesand@gmail.com.</p>
</div>
//=================COMPONENTS==========================================
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
            <SingleContentEntry content={header}/>
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