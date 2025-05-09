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
            record:"2.48.95 (全体3位)",
            about:"▫️ 2024桃山チャレンジ (2024.09.01)",
        },
        {
            title:"1500m",
            record:"4.20.16",
            about:"▫️ 第67回富山県陸上競技選手権大会 (2025.05.05)",
        },
        {
            title:"マラソン (42.195km)",
            record1:"6:04:37 (8357位/9526)",
            about1:"▫️ 富山マラソン2022 (2022.11.06)",
            record2:"3:22:54 (778位/9932)",
            about2:"▫️ 富山マラソン2023 (2023.11.03)", 
            record3:"3:20:44 (572位/10279)",
            about3:"▫️ 富山マラソン2024 (2024.11.03)",
        },
        {
            title:"ハーフマラソン",
            record:"1:19:57 (31位/989)",
            about:"▫️ 第19回みのかもハーフマラソン (2025.1.12)", 
        },
        {
            title:"リレーマラソン",
            record:"1:01:56 (1位/35)",
            about:"▫️ 第2回つるぎハーフリレーマラソン (2024.11.17)", 
            about2:"チーム：「俺たちのタータン」",
        }
        
    ];

    return (
        <MainLayout>
            <div style={{ marginTop: "40px", color: "white" }}>
                <div className="mx-auto w-75 textColor">
                <h1 className="text-decoration-underline text-warning fw-bold" style={{ marginLeft: "15px", marginBottom:"20px"}}>Track & Field</h1>
                    <ul style={{ lineHeight: "1.3" }}>
                        {runningsList.map((running, index) => (
                            <div key={index} style={{ fontSize: '18px' }}>
                                <h4 className="fw-bold">{running.title}</h4>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record}</p>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about1}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record1}</p>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about2}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record2}</p>
                                <p style={{ fontSize: '15px', marginRight: '20px' }}>{running.about3}</p>
                                <p style={{ marginLeft: '20px' }}>{running.record3}</p>
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
