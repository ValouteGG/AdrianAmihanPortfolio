import ROOMSYNC from '../assets/images/ROOMSYNC.png';
import LoopMind from '../assets/images/LoopMind.png';
import DOCKSIDE from '../assets/images/DOCKSIDE.png';
import LAPUK from '../assets/images/LAPUK.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/gr2ws/lapuk-app-frontend/releases/tag/v1.f3?fbclid=IwY2xjawTmT8NwZG9mA2V4dG4DYWVtAjExAHNydGMGYXBwX2lkATAAAR5rjZenBPNG4bAXAZfNY1pK5qbj9ru6DEidOZBGHCVsCp6TWOC9c2XvxoKSzg_aem_lYQ0DshE2Xu5S8F3Nm5MFg" target="_blank" rel="noreferrer"><img src={LAPUK} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gr2ws/lapuk-app-frontend/releases/tag/v1.f3?fbclid=IwY2xjawTmT8NwZG9mA2V4dG4DYWVtAjExAHNydGMGYXBwX2lkATAAAR5rjZenBPNG4bAXAZfNY1pK5qbj9ru6DEidOZBGHCVsCp6TWOC9c2XvxoKSzg_aem_lYQ0DshE2Xu5S8F3Nm5MFg" target="_blank" rel="noreferrer"><h2>LAPUK</h2></a>
                <p>LAPUK is a mobile application that leverages AI to provide locations to the users depending on their current location for landfills, garbage truck routes and recycling centers. This was made byb a team of 3.</p>
            </div>
            <div className="project">
                <a href="https://dockside-web-607e0983ea6b.herokuapp.com/?fbclid=IwY2xjawTmUlxwZG9mA2V4dG4DYWVtAjExAHNydGMGYXBwX2lkATAAAR7XAR7DQ7WxhggT8Zfm3OfadgWFswOfEZ-2u1UqMqZWwmnLgPY-OFFwKLTFjQ_aem_9_EkfKTjt3NR7HN7Wp0CPw" target="_blank" rel="noreferrer"><img src={DOCKSIDE} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gr2ws/dockside-web/deployments/dockside-web" target="_blank" rel="noreferrer"><h2>DockSide Website (Inactive)</h2></a>
                <p>This project involves the design and development of a hotel web page. The group is composed of 2-3 members. The web page must include at least three (3) core functionalities and two (2) types of users. Added github link to title.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ValouteGG/LooopMind/releases/tag/DemoRelease" target="_blank" rel="noreferrer"><img src={LoopMind} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ValouteGG/LooopMind/releases/tag/DemoRelease" target="_blank" rel="noreferrer"><h2>LoopMind</h2></a>
                <p>A Reward System Calendar used for Academic Purposes, soon to be integrated with calendar applications and has built in AI Progess Tracker.</p>
            </div>
            <div className="project">
                <a href="https://github.com/gr2ws/roomsync-app" target="_blank" rel="noreferrer"><img src={ROOMSYNC} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gr2ws/roomsync-app" target="_blank" rel="noreferrer"><h2>RoomSync</h2></a>
                <p>A React Native mobile application for rental property listings in Dumaguete City and nearby municipalities. This helps users find and manage rental properties efficiently. Finding safe, affordable, and convenient living spaces in Dumaguete City is challenging for students and employees relocating from other provinces or towns. Traditional word of mouth or basic listings on social media often lack updated information, honest reviews, or intelligent filtering.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;