import Image from "next/image";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="foot-container">
                <div>
                    <Image src={"/foot-logo.png"} alt="logo" width={145} height={94} className="foot-logo"/>
                </div>
                <div className="flex content-center">
                    <div className="content">
                        <h1>Informaiton</h1>
                        <p>Main</p>
                        <p>Gallery</p>
                        <p>Projects</p>
                        <p>Certifications</p>
                        <p>Contacts</p>
                    </div>
                    <div className="content2">
                        <h1>Contacts</h1>
                        <div className="connect-us">
                            <div className=" w-3 h-4"><Image src={"/location.png"} alt="location" width={11} height={16}/></div>
                            <p>1234 Sample Street <br/> Austin Texas 78704</p>
                        </div>
                        <div className="connect-us">
                            <div className=" w-4 h-4"><Image src={"/contact.png"} alt="location" width={16.01} height={16}/></div>
                            <p>512.333.2222</p>
                        </div>
                        <div className="connect-us">
                            <div className=" w-4 h-3"><Image src={"/gmail.png"} alt="location" width={16} height={11}/></div>
                            <p>sampleemail@gmail.com</p>
                        </div>
                    </div>

                    <div className="content2">
                        <h1>Social Media</h1>
                        <div className="sm-links">
                            <div className="links">
                            <a>
                            <Image src={"/facebook.png"} alt="facebook" width={10} height={19}/>
                            </a>
                            </div>
                            <div className="links">
                            <a>
                            <Image src={"/twiter.png"} alt="twiter" width={21.01} height={16}/>
                            </a>
                            </div>
                            <div className="links">
                            <a>
                            <Image src={"/in.png"} alt="linkedin" width={19.98} height={18.02}/>
                            </a>
                            </div>
                            <div className="links">
                            <a>
                            <Image src={"/pinterest.png"} alt="pinterest" width={14} height={18}/>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                <p>&copy; 2024 All Rights Reserved</p>
            </div>
        </footer>
        
    );
}