import React from 'react';
import MainLayout from './mainLayout';

const Running: React.FC = () => {
    const runningsList = [
        {
            title:"800m",
            record:"2.05.79",
            about:"▫️ 第75回富山県民体育大会（2022/07.16〜07.17)"
        },
        {
            title:"1000m",
            record:"2.43.36",
            about:"▫️ 2025桃山チャレンジ (2025.05.11)",
        },
        {
            title:"1500m",
            record:"4.20.16",
            about:"▫️ 第67回富山県陸上競技選手権大会 (2025.05.05)",
        },
        {
            title:"マラソン (42.195km)",
            record:"3:04:57 (164位/4765)",
            about:"▫️ 第42回カーター記念黒部名水マラソン (2025.05.25)",
        },
        {
            title:"ハーフマラソン",
            record:"1:19:57 (31位/989)",
            about:"▫️ 第19回みのかもハーフマラソン (2025.1.12)", 
        },
        {
            title:"リレーマラソン",
            record:"1:01:56 (1位/35)",
            about:"▫️ 第2回つるぎハーフリレーマラソン（チーム：俺たちのタータン） (2024.11.17)", 
            record2:"2:16:45 (4位/400)",
            about2:"▫️ いっちゃん！リレーマラソン2025（チーム：俺たちのタータン） (2025.06.01)", 
        }
        
    ];

    return (
        <MainLayout>
            <div style={{ marginTop: "40px", color: "white" }}>
                <div className="mx-auto w-75 textColor">
                <h1 className="text-decoration-underline text-warning fw-bold" style={{ marginLeft: "15px", marginBottom:"20px"}}>Track & Field</h1>
                    <ul style={{ lineHeight: "1.3" }}>
                        <p>※ 大学入学以降かつ主要な記録のみ掲載しています．</p>
                        {runningsList.map((running, index) => (
                            <div key={index} style={{ fontSize: '18px' }}>
                                <h4 className="fw-bold">{running.title}</h4>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record}</p>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about2}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record2}</p>
                                <hr style={{ marginRight: '20px' }} />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Running;
