const FormSelect = ({ label, options, ...props }) => (
    <div>
        <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#6b8999", display: "block", marginBottom: 6 }}>{label}</label>
        <select {...props} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e2ecf0", borderRadius: 10, fontSize: "0.9rem", color: "#1e3a4a", outline: "none", background: "#fff", fontFamily: "inherit" }}>
            {options.map(o => <option key={o}>{o}</option>)}
        </select>
    </div>
);

export default FormSelect;
