import Image from "next/image";

export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar-elements">
            <Image src={"/logo.png"} alt="logo" width={70} height={43.71}/>
                <li className="navbar-main" id="main">MAIN</li>
                <li>GALLERY</li>
                <li>PROJECTS</li>
                <li>CERTIFICATIONS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}