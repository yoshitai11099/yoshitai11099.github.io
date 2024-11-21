import React from 'react';
import MainLayout from './mainLayout';
import Image from 'next/image';
import { useState } from 'react';

const Works: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const worksList = [
        {
            title: "富山方便クイズ",
            technical: "▫️ Processing、p5.js",
            image: "/images/toyamaQuiz.png",
            about: "　富山を知ってもらう目的で作成した富山方便に関するクイズアプリ。この意味を持つ方便はどれかを答える「３択クイズ」「入力型クイズ」、２人の会話で自然な流れになるように空欄の枠に入るセリフを答える「会話型クイズ」があり、合計で115問搭載。"
        },
        {
            title: "マルチカラーボトル",
            technical: "▫️ ESP32、Arduino IDE、センサ（傾き、回転角度、温度）",
            about: "　マイコンとセンサを扱えるようになることを目的とした、ボトル内に螺旋状に設置されたLEDを回転角度センサにて光らせるイルミネーション風の作品。デバイス本体を傾けたり、外界温度によってLEDの光色が変化する。"
        },
        {
            title: "アスレチック型ゲーム",
            technical: "▫️ Unity3D",
            about: "　ゲーム開発に興味を持ち、Unityで初めて作成したアスレチックゲーム。この取り組みからゲームの基本となる「画面遷移」「キー入力」「アイテム管理」「クリア、ミス判定」などの実装方法を学んだ。"
        },
        {
            title: "半拘束型力触覚提示デバイス",
            technical: "▫️ Unity3D、Arduino UNO、Arduino IDE、フォトリフレクタ、HMD",
            image: "/images/study.png",
            about: "　卒業研究テーマ。リアル手指をわずかにしか動かせない状態（半拘束状態）を作りだし、その状態下での手指のわずかな動きからユーザの運動意図を読み取り、アバター手指を操作する手法を用いる力触覚提示デバイスの実現を目指す。本手法を用いることで、リアル手への複数箇所への力触覚提示が容易となり、デバイスの低価格化や遠隔での技術伝達の効率化などが図れる。",
            reference:"▫️ 吉田大葵，田川和義，半拘束型掌力触覚提示デバイスの基礎的検討 -示指の多様な動きへの対応化，第29回日本バーチャルリアリティ学会論文集，3D2-07，2024",
        }
    ];

    return (
        <MainLayout>
            <div style={{ marginTop: "40px", color: "white" }}>
                <div className="boxColor card headerColor w-75 mx-auto textColor opacity">
                    <h1 style={{ textDecoration: 'underline', marginBottom: "20px" }}>Works</h1>
                    <ul style={{ lineHeight: "1.5" }}>
                        {worksList.map((works, index) => (
                            <div key={index} style={{ fontSize: '15px' }}>
                                <h4 className="fw-bold">{works.title}</h4>
                                <p style={{ marginRight: '20px' }}>{works.technical}</p>
                                {works.image && (
                                    <div>
                                        <div
                                            style={{
                                                marginBottom: '15px',
                                                marginRight: '15px',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => {
                                                setSelectedImage(works.image); 
                                                setSelectedIndex(index); 
                                                setModalOpen(true); 
                                            }}
                                        >
                                            <Image
                                                src={works.image}
                                                alt=""
                                                width={200}
                                                height={100}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        {isModalOpen && selectedImage && selectedIndex === index && (
                                            <div
                                                style={{
                                                    position: 'fixed',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100vw',
                                                    height: '100vh',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    zIndex: 1000,
                                                }}
                                                onClick={() => setModalOpen(false)} 
                                            >
                                                <img
                                                    src={selectedImage}
                                                    alt=""
                                                    style={{
                                                        objectFit: 'contain',
                                                        width: '80vw', 
                                                        height: '80vh',
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                                <p style={{ marginRight: '20px' }}>{works.about}</p>
                                <p style={{ fontSize:'10px',marginRight: '20px' }}>{works.reference}</p>
                                <hr style={{ marginRight: '20px' }} />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Works;
