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
<div className="center" id = "introsection">
    <img src={treeSrc} className = "fillwidth"/>
    <div id = "welcometext">
        <p className = "largertext fancyfont">Hello</p>
        <p className = "mediumtext fancyfont">My name is Elias. I am studying my fifth year at Linköping University. Here you can find things i have been working on the past few years. </p>
    </div>  
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