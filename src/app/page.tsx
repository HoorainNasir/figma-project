import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="parentContainer">
        <div className="textContainer">
          <p>PROJECT</p>
          <p id="bold-text">Lorum</p>

          <div id="frame">
            <Image src={"/Frame9.png"} alt="frame" width={52.95} height={53} />
            <Image src={"/Frame8.png"} alt="frame" width={52.95} height={53} />
          </div>
          <div className="view1">
            <Image
              src={"/slide-numbers.png"}
              alt="slide numbber"
              width={141.88}
              height={52}
            />
          </div>
        </div>

        <div className="imgContainer">
          <Image
            src={"/rectangle6.png"}
            alt="project-showcase"
            width={770}
            height={829}
          />
          <button className="view1">
          <Image
            src={"/Frame10.png"}
            alt="view project"
            width={221.81}
            height={71}
          />
          </button>
        </div>
      </div>
      <div className="parentContainer">
        <div className="childContainer">

          <div className="aboutContainer">
            <Image src={"/img8.png"} alt="about" width={270} height={265} className="about-con-image w-12 h-10"/>
            <Image src={"/img10.png"} alt="about" width={270} height={140} className="about-con-image w-12 h-10"/>
          </div>

          <div className="aboutContainer2">
            <Image src={"/img9.png"} alt="about" width={270} height={345} className="about-con-image2 w-96 h-16 mt-2"/>
          </div>

          <div className="about-text">
            <h1 className="light-text">About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>

        <div className="mission">
            <h1 className="light-text">Main Focus/Mission Statement</h1>

            <div className="mission-goal">
              <div className="goalset">
                <h1 className="black-text">1</h1>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
              </div>
              <div className="goalset">
                <h1 className="black-text">2</h1>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
              </div>
            </div>

        </div>

        <div className="projects">
          <h1 className="light-text">Our Projects</h1>

          <div className="pt-8 flex content-center">
            <button id="sample-preview">
              <div className="shadow">
              <p>Sample</p>
              <p>Project</p>
              <Image src={"/group12.png"} width={129} height={24} alt="view more"/>
              </div>
            </button>

            <div className="image">
              <Image src={"/image15.png"} alt="project" width={570} height={255} className="sample-preview"/>
            </div>
          </div>
          <div className="flex content-center">
          <Image src={"/image16.png"} alt="project" width={270} height={255} className="sample2"/>
          <Image src={"/image17.png"} alt="project" width={470} height={255} className="sample3"/>
          <Image src={"/image18.png"} alt="project" width={370} height={255} className="sample2"/>
          </div>

          <div className="pt-4">
            <button id="viewbtn">
            <Image src={"/view-more.png"} width={222} height={71} alt="view more"/>
            </button>
          </div>
        </div>

        <div className="contact">
        <h1 className="light-text">Contact Us</h1>
          <div className="mt-8 flex">
            <form >
              <div className="form">
              <label>
                <input type="text" value={'Name'} name="name" maxLength={30} size={30} />
              </label>
              </div>
              
              <div className="form">
              <label>
                <input type="text" value={"Phone Number"} name="phone-number"  maxLength={30} size={30}/>
              </label>
              </div>

              <div className="form">
              <label>
                <input type="email" value={"E-mail"} name="email" maxLength={30} size={30} />
              </label>
              </div>

              <div className="form">
              <label>
                <input type="text" value={"Interest in"} name="interest" maxLength={50} size={30}/>
              </label>
              </div>

              <div className="form ">
                <label>
                <textarea value={"Message"} name="message" rows={4} cols={32}></textarea>
                </label>
              </div>
            </form>

            <div className="ml-8">
              <Image src={"/image12.png"} alt="contact-us" width={749} height={369}/>
            </div>
          </div>
          <div className="mail-btn">
          <button>
          <Image src={"/email.png"} width={222} height={71} alt="send email"/>
          </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
