const trackfield: React.FC = () => {
    const recordsList = [
        "600m : (1.28.80)",
        "800m : 2.05.79 (2.02.42)",
        "1000m : 2.48.95",
        "1500m : 4.24.96 (4.14.14)",
        "3000m : (9.51.00)",
        "42.195km : 3:20:44",
    ];

    return (
        <div style={{ marginTop: "40px"}}>
            <div className="boxColor card headerColor w-75 mx-auto textColor opacity border-warning rounded">
                <h1 style={{ textDecoration: 'underline', marginBottom: "20px", marginLeft:"15px"}}>Records</h1>
                <ul style={{ marginLeft: "5px", marginRight: "5px", lineHeight: "2.0" }}>
                    {recordsList.map((records, index) => (
                        <li key={index} style={{ fontSize: "18px" }}>
                            {records}
                        </li>
                    ))}
                </ul>
                <p style={{marginLeft:"15px"}}>(): 高校記録</p>
            </div>
        </div>
    );
}

export default trackfield;