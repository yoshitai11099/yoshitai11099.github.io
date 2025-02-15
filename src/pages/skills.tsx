const skills: React.FC = () => {
    const skillsList = [
        "Unity(3D、VR)",
        "C#",
        "C++(OpenGL、PHANToM)",
        "Python",
        "JavaScript(React.js)",
        "TypeScript(Next.js)",
        "HTML",
        "CSS",
        "Micro Computer (Arduino)",
        "モデリング (Blender、FlashPrint)",
        "3Dプリント",
    ];

    return (
        <div style={{ marginTop: "40px"}}>
            <div className="boxColor card headerColor w-75 mx-auto textColor opacity border-primary rounded">
                <h1 style={{ textDecoration: 'underline', marginBottom: "20px", marginLeft:"15px", color:"white"}}>Skills</h1>
                <ul style={{ marginLeft: "5px", marginRight: "5px", lineHeight: "1.5" }}>
                    {skillsList.map((skills, index) => (
                        <li key={index} style={{ fontSize: "18px" }}>
                            {skills}
                        </li>
                    ))}
                </ul>
                <p style={{marginLeft:"15px"}}>※ 本ポートフォリオはNext.jsを用いて作成しています。</p>
            </div>
        </div>
    );
}

export default skills;