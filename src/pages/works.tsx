import React from 'react';
import MainLayout from './mainLayout';
import Image from 'next/image';
import Link from 'next/link';
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
            about: "モーションキャプチャ技術を用いた力触覚提示デバイスは，現実手動作の多様性と提示可能な力触覚の多様性とがトレードオフの関係にある．そこで，本研究ではユーザの現実手指を多少動かせる程度に半拘束した状態下での運動意図を取得・反映するインタフェースを提案する．具体的には，モーションキャプチャ技術にみられる1対1マッピングではなく，ユーザの現実手指の運動特性を入力としたアバタ手指制御手法を用いる．これにより，現実手指が定位置付近にとどめつつ，操作性や自己投射性を担保でき，トレードオフを払拭できると考えている．",
            reference:"▫️ 吉田大葵，田川和義，半拘束型掌力触覚提示デバイスの基礎的検討 -示指の多様な動きへの対応化，第29回日本バーチャルリアリティ学会論文集，3D2-07，Sep.2024",
            reference2:"▫️ 吉田大葵，田川和義，半拘束状態下における手の位置変化量に基づくアバタ制御，電気学会C部門知的情報研究会，テーマ「知・技の伝承のためのxR技術および一般」，PI-25-014，Mar.2025",
        }
    ];

    return (
        <MainLayout>
            <div style={{ marginTop: "40px", color: "white" }}>
            <div className="mx-auto w-75 textColor">
                <h1 className="text-decoration-underline text-warning fw-bold" style={{ marginLeft: "15px", marginBottom:"20px"}}>Works</h1>
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
                                <Link href="/abstract1"><p style={{ fontSize:'10px',marginRight: '20px' }}>{works.reference2}</p></Link>
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
