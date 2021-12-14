import React from "react";
import "./about.css"
import picture from './picture.JPG'

function About() {
    return (
        <div className="component-container">
            <h1 className="about-title">Who is Tyler Pennington</h1>
            <div className="about-info">
                {/*picture of myself*/}
                <img className="image" src={picture} alt="Tyler"/>
                
                <p className="about-content">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Enim facilisis gravida neque convallis. 
                    Purus sit amet luctus venenatis lectus magna fringilla 
                    urna porttitor. Sapien pellentesque habitant morbi 
                    tristique senectus et. Morbi tempus iaculis urna id. 
                    Congue mauris rhoncus aenean vel elit scelerisque. Massa 
                    id neque aliquam vestibulum morbi blandit cursus risus 
                    at. Rhoncus dolor purus non enim praesent elementum 
                    facilisis leo. Laoreet non curabitur gravida arcu ac 
                    tortor. Massa tincidunt nunc pulvinar sapien et ligula 
                    ullamcorper. Ut faucibus pulvinar elementum integer. 
                    Viverra suspendisse potenti nullam ac tortor vitae purus. 
                    tum nibh tellus molestie nunc non blandit massa enim nec.
                </p>
                <p className="about-content">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Enim facilisis gravida neque convallis. 
                    Purus sit amet luctus venenatis lectus magna fringilla 
                    urna porttitor. Sapien pellentesque habitant morbi 
                    tristique senectus et. Morbi tempus iaculis urna id. 
                    Congue mauris rhoncus aenean vel elit scelerisque. Massa 
                    id neque aliquam vestibulum morbi blandit cursus risus 
                    at. Rhoncus dolor purus non enim praesent elementum 
                    facilisis leo. Laoreet non curabitur gravida arcu ac 
                    tortor. Massa tincidunt nunc pulvinar sapien et ligula 
                    ullamcorper. Ut faucibus pulvinar elementum integer. 
                    Viverra suspendisse potenti nullam ac tortor vitae purus. 
                    tum nibh tellus molestie nunc non blandit massa enim nec.
                </p>
                <p className="about-content">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Enim facilisis gravida neque convallis. 
                    Purus sit amet luctus venenatis lectus magna fringilla 
                    urna porttitor. Sapien pellentesque habitant morbi 
                    tristique senectus et. Morbi tempus iaculis urna id. 
                    Congue mauris rhoncus aenean vel elit scelerisque. Massa 
                    id neque aliquam vestibulum morbi blandit cursus risus 
                    at. Rhoncus dolor purus non enim praesent elementum 
                    facilisis leo. Laoreet non curabitur gravida arcu ac 
                    tortor. Massa tincidunt nunc pulvinar sapien et ligula 
                    ullamcorper. Ut faucibus pulvinar elementum integer. 
                    Viverra suspendisse potenti nullam ac tortor vitae purus. 
                    tum nibh tellus molestie nunc non blandit massa enim nec.
                </p>
            </div>
        </div>
    );
}

export default About;