const Pill = ({ children, active, onClick }) => (
    <button onClick={onClick} style={{
        background: active ? "#0a7fa5" : "#fff",
        color: active ? "#fff" : "#4a6374",
        border: `1.5px solid ${active ? "#0a7fa5" : "#e2ecf0"}`,
        borderRadius: 40, padding: "8px 20px", cursor: "pointer",
        fontSize: "0.85rem", fontWeight: 500, transition: "all 0.2s"
    }}>{children}</button>
);

export default Pill;
