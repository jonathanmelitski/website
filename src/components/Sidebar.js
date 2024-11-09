import headshot from "../assets/headshot.jpeg";
import ContactCard from "./ContactCard";
import MyCommits from "./MyCommits";

function Sidebar() {
    return (
        <div className="min-w-52
        max-w-96
        bg-black/70
        grid grid-cols-1">
            <div className="p-8">
                <img src={headshot} alt="headshot"
                className="aspect-square
                object-cover
                object-top
                rounded-full
                border-4
                border-white
                drop-shadow-sm
                backdrop-blur-md"/>
                <ContactCard/>
            </div>

            <div className="p-8 place-self-end">
                <MyCommits/>
            </div>
            
            
        </div>
        
    )
}

export default Sidebar;