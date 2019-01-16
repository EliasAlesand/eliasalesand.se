import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileSrc from './profile.png';
import midiSrc from './midi.png';
import treeSrc from './trees_fade_cut.png';
import githubSrc from './github.png';
import linkedinSrc from './linkedin.png';
import resumeSrc from './resume.png';
import kandidatSrc from './kandidat.png';


document.title = "Elias Alesand | Work In Progress";
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
        <a target="_blank" href="./files/resume.pdf">
            <img src={resumeSrc} className="headerlink"/>
        </a>   
        <img src={profileSrc} id="profileimage"/> 
    </div>
</div>

const introSection = 
<div className="center" id = "introsection">
    <img src={treeSrc} className = "fillwidth"/>
    <div id = "welcometext">
        <p className = "largertext fancyfont">Hello</p>
        <p className = "mediumtext fancyfont">My name is Elias. I am studying my fifth year at Linköping University. Here you will find things i have been doing the past few years. </p>
        <p className = "mediumtext fancyfont" id ="resumeref">For academic details and work experience, please see my resume among the links above.</p>    
    </div>
    <div class = "blackbar"></div>
</div>

const footer = 
<div className="footer">
    <p className = "smalltext footertext normalfont">E-mail me at elias.alesand@gmail.com</p>
</div>
//=================COMPONENTS==========================================

class Showcase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 2
        }
    }
    plusSlides(n) {
        this.showSlides(this.state.slideIndex + n);
    }
    showSlides(n) {
        var nslides = 2
        this.setState({slideIndex:n})
        if (n > nslides) {this.setState({slideIndex:1})} 
        if (n < 1) {this.setState({slideIndex:nslides})}
    }
    render(){
        return (
            <div className = "contententry">
                <div className="showcase">
                    <div className="slide fade"style={{display: this.state.slideIndex ==1 ? 'block' : 'none' }}>
                        <img className = "fillwidth" src={kandidatSrc}/>
                    </div>
                    <div className="slide fade"style={{display: this.state.slideIndex ==2 ? 'block' : 'none' }}>
                        <img className = "fillwidth" src={treeSrc}/>
                    </div>
                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
                <div class = "blackbar"></div>
            </div> 
        );
    }
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
            <Showcase/>
            <SingleContentEntry content={footer}/>
            
        </div>
    );
}
ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
