// pages/index.tsx

import MainLayout from '../pages/mainLayout';
import Skills from '../pages/skills';
import TrackField from './records';
import Contact from '../pages/contact';
import Image from 'next/image';
import Zin from '/public/images/zin.png';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="boxColor card headerColor w-75 mx-auto textColor opacity border-warning rounded" >
          <h1 className="text-decoration-underline" style={{ marginLeft: "15px" }}>About me</h1>
          <div className="row g-0 font">
            <div className="col-md-6">
              <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <h4 className="fw-bold">吉田大葵(Yoshida Taiki)</h4>
                <p>▫️ 富山県立大学 B4（田川研究室）<br />▫️ 陸上部<br />▫️ 富山ランニングクラブ(Aチーム・俺たちのタータン)</p>
                <p style={{ marginLeft: "10px", marginRight: "10px" }}>情報系の学部に所属しており、VR(Virtual Reality)と触覚(Haptics)の研究をしています。研究以外ではマラソンに力を入れており、現在はサブ3(3時間切り)を目指しています。趣味はゲームで、「スマブラ」と「ぷよぷよテトリス」をしています。</p>
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
        <div className="row g-0 font" style={{ marginBottom: "40px"}}>
          <div className="col-md-4 textColor">
            <Skills />
          </div>
          <div className="col-md-4 textColor">
            <TrackField />
          </div>
          <div className="col-md-4 textColor">
            <Contact />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
