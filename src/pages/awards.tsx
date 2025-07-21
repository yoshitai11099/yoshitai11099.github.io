import Link from 'next/link';

const awards: React.FC = () => {
    const awardsList = [
        "第2回つるぎハーフリレーマラソン優勝(2024.11.17)",
    ];
    const awardsLinks = [
        { href: 'https://www.ieice.org/hokuriku/2024/PDF/Student_Award_2024.pdf', label:"電子情報通信学会北陸支部 優秀学生賞(2025.2.17)"},
    ];

    // const linksList = [
    //     { href: 'https://www.instagram.com/taiki_446/', label: 'Instagram' },
    //     { href: 'https://www.tagawalab.org/', label: "Tagawa Lab"},
    //     { href: 'https://toyamarc.jimdoweb.com/', label: "富山ランニングクラブ"},
    // ];

    return (
        <div style={{ marginTop: "40px" }}>
            <div className="mx-auto w-75 textColor">
                <h1 className="text-decoration-underline text-info fw-bold" style={{ marginLeft: "15px"}}>Awards</h1>
                <ul style={{ marginLeft: "5px", marginRight: "5px",}}>
                    {awardsList.map((awards, index) => (
                        <li key={index} style={{ fontSize: "15px" }}>
                            {awards}
                        </li>
                    ))}
                </ul>
                <ul style={{ marginLeft: "5px", marginRight: "5px",}}>
                    {awardsLinks.map((links, index) => (
                        <li key={index} style={{ fontSize: "15px" }}>
                            <Link href={links.href} style={{color:'white'}}>
                                {links.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default awards;