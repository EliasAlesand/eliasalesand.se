import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileSrc from './profile.png';
import treeSrc from './trees_fade_cut.png';
import githubSrc from './github.png';
import linkedinSrc from './linkedin.png';
import resumeSrc from './resume.png';
import kandidatSrc from './kandidat.png';
import midiSrc from './midi.png';
import midi2Src from './midi2.png';


document.title = "Elias Alesand | Welcome";
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
    <div className = "blackbar"></div>
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
            slideIndex: 1
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
                        <img className = "showcaseimage" src={midi2Src}/>
                        <p className = " largertext fancyfont showcasetitle">MIDI-lights</p>
                        <div className = "showcasetext">
                            <hr></hr>
                            <p className = "mediumtext lightfont">
                                In an attempt to make learning to play the piano more fun I created a small Python program that visualizes notes from MIDI 
                                files on an addressable LED strip connected to a Raspberry Pi.
                                Read more about it <a target = "_blank"href="https://github.com/EliasAlesand/MIDI-lights">here</a>.
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                    <div className="slide fade"style={{display: this.state.slideIndex ==2 ? 'block' : 'none' }}>
                        <img className = "showcaseimage" src={kandidatSrc}/>
                        <p className = "largertext fancyfont showcasetitle">Graphical Password</p>
                        <div className = "showcasetext">
                            <hr></hr>
                            <p className = " mediumtext lightfont">
                            As my bachelor’s thesis me and another student developed a graphical password
                            system for Android designed to be resistant to third parties watching users log in.
                            You can find the thesis <a target = "_blank"href="https://liu.diva-portal.org/smash/record.jsf?c=1&pid=diva2%3A1108259">here</a>.
                            </p>
                            <hr></hr>
                        </div>
                    </div>
                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
                <div className = "blackbar"></div>
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
