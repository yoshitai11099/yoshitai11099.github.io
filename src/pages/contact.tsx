import Link from 'next/link';

const contact: React.FC = () => {
    const skillsList = [
        "u120049@st.pu-toyama.ac.jp",
        "yoshida@tagawalab.org",
    ];

    const linksList = [
        { href: 'https://www.instagram.com/taiki_446/', label: 'Instagram' },
        { href: 'https://www.tagawalab.org/', label: "Tagawa Lab"},
        { href: 'https://toyamarc.jimdoweb.com/', label: "富山ランニングクラブ"},
    ];

    return (
        <div style={{ marginTop: "40px" }}>
            <div className="boxColor card headerColor w-75 mx-auto textColor opacity border-primary rounded">
                <h1 style={{ textDecoration: 'underline', marginBottom: "20px", marginLeft: "15px" }}>Contact</h1>
                <ul style={{ marginLeft: "5px", marginRight: "5px", lineHeight: "2.0" }}>
                    {skillsList.map((skills, index) => (
                        <li key={index} style={{ fontSize: "15px" }}>
                            {skills}
                        </li>
                    ))}
                </ul>
                <h1 style={{ textDecoration: 'underline', marginBottom: "20px", marginLeft: "15px" }}>Links</h1>
                <ul style={{ marginLeft: "5px", marginRight: "5px", lineHeight: "2.0" }}>
                    {linksList.map((links, index) => (
                        <li key={index} style={{ fontSize: "18px" }}>
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

export default contact;