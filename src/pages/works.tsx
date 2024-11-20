import React from 'react';
import MainLayout from './mainLayout';

const Works: React.FC = () => {
    const worksList = [
        {
            title:"富山方便クイズ",
            reference:"▫️ Processing, p5.js",
            image1:"",
            image2:"",
            about:"　富山を知ってもらう目的で作成した富山方便に関するクイズアプリ．この意味を持つ方便はどれかを答える「３択クイズ」「入力式クイズ」，２人の会話で自然な流れになるように空欄の枠に入るセリフを答える「会話型クイズ」があり，合計で115問搭載．"
        },
        {
            title:"マルチカラーボトル",
            reference:"▫️ ESP32, Arduino IDE, センサ（傾き，回転角度，温度）",
            about:"　マイコンとセンサを扱えるようになることを目的とした，ボトル内に螺旋状に設置されたLEDを回転角度センサにて光らせるイルミネーション風の作品．デバイス本体を傾けたり，外界温度によってLEDの光色が変化する．"
        },
        {
            title:"アスレチック型ゲーム",
            reference:"▫️ Unity3D",
            about:"　ゲーム開発に興味を持ち，Unityで初めて作成したアスレチックゲーム．この取り組みからゲームの基本となる「画面遷移」「キー入力」「アイテム管理」「クリア，ミス判定」などの実装方法を学んだ．"
        },
        {
            title:"半拘束型力触覚提示デバイス",
            reference:"▫️ Unity3D, Arduino UNO, Arduino IDE, フォトリフレクタ, HMD",
            about:"　卒業研究テーマ．リアル手指をわずかにしか動けない状態（半拘束状態）を作りだし，その環境下での手指のわずかな動きからユーザの運動意図を読み取り，アバター手指を操作する手法を用いる．これにより，リアル手への複数箇所への力触覚提示が容易となり，遠隔での技術伝達の効率化などが図れる．"
        }
    ];

    return (
        <MainLayout>
            <div style={{ marginTop: "40px", color:"white"}}>
                <div className="boxColor card headerColor w-75 mx-auto textColor opacity">
                    <h1 style={{ textDecoration: 'underline', marginBottom: "20px" }}>Works</h1>
                    <ul style={{lineHeight: "1.5" }}>
                        {worksList.map((works, index) => (
                            <div key={index} style={{ fontSize: "15px" }}>
                                <h4 className="fw-bold">{works.title}</h4>
                                <p style={{marginRight:"20px"}}>{works.reference}</p>
                                <p style={{marginRight:"20px"}}>{works.about}</p>
                                <hr style={{marginRight:"20px"}}></hr>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Works;
