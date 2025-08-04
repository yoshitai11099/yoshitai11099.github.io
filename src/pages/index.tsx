// pages/index.tsx

import MainLayout from '../pages/mainLayout';
import Skills from '../pages/skills';
import TrackField from './records';
import Contact from '../pages/contact';
import Image from 'next/image';
import Zin from '/public/images/zin.png';
import  Awards from '../pages/awards';

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
                <p style={{marginTop:'20px'}}>▫️ 富山県立大学大学院工学研究科電子・情報工学専攻 修士1年<br />▫️ 陸上部<br />▫️ 富山ランニングクラブ(Aチーム・俺たちのタータン)</p>
                <p className = "small" style={{ marginLeft: "10px", marginRight: "10px" }}>研究領域は，VR/Haptics/HCI(Human Computer Interaction)です．コーディング自体ではなく，様々なアイデアをプログラミング等で実現する（カタチにする）ことに興味があります．研究活動以外では陸上競技をしており，800m，1500mを専門としています．加えて，マラソンにも注力しています．</p>
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
            <Awards />
          </div>
          <div className="textColor">
            <Contact />
          </div>
        </div>
      </div>
      <div className="textColor text-center mx-auto"><small>最終更新日：2025/8/4</small></div>
      <div className="textColor text-center mx-auto"><small>© 2025 TAIKI YOSHIDA All Rights Reserved.</small></div>
      
    </MainLayout>
  );
}

export default Home;
