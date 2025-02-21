// pages/index.tsx

import MainLayout from '../pages/mainLayout';
import Skills from '../pages/skills';
import TrackField from './records';
import Contact from '../pages/contact';
import Abstract1 from '../pages/abstract1';
import Image from 'next/image';
import Zin from '/public/images/zin.png';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
        {/* <div className="boxColor card headerColor mx-auto w-75 textColor opacity border-primary rounded"> */}
        <div className="mx-auto w-75 textColor">
          <h1 className="text-decoration-underline text-info fw-bold" style={{ marginLeft: "15px"}}>About me</h1>
          <div className="row g-0 font">
            <div className="col-md-6">
              <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <h4>吉田大葵(Yoshida Taiki)</h4>
                <p style={{marginTop:'20px'}}>▫️ 富山県立大学 B4（田川研究室）<br />▫️ 陸上部<br />▫️ 富山ランニングクラブ(Aチーム・俺たちのタータン)</p>
                <p className = "small" style={{ marginLeft: "10px", marginRight: "10px" }}>陸上（主に中距離）とマラソンをしています。マラソンは現在、サブ3を目指しています。研究分野は、VR（Virtual Reality）と力触覚（Haptics）です。</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Image src={Zin} alt="" width={150} />
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>※このアイコンが好きです</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto font" style={{ marginBottom: "40px"}}>
          <div className="textColor">
            <Skills />
          </div>
          <div className="textColor">
            <TrackField />
          </div>
          <div className="textColor">
            <Contact />
          </div>
          <div className="textColor">
            <Abstract1 />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
