import headshot from "../assets/headshot.jpeg"

function Sidebar() {
    return (
        <div className="min-w-52 max-w-96">
            <img src={headshot} alt="headshot" className="aspect-square object-cover"/>
            
        </div>
        
    )
}

export default Sidebar;