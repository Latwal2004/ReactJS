import React from 'react'

const ReUseUser = ({data}) => {
return (
  <div
    style={{
      width: "320px",
      background: "#fff",
      borderRadius: "15px",
      padding: "20px",
      margin: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      borderTop: "5px solid #22c55e",
      borderBottom: "5px solid #22c55e",
    }}
  >
    <h2 style={{ color: "#22c55e", marginBottom: "15px" }}>
      👤 {data.name}
    </h2>

    <p><strong>ID:</strong> {data.id}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Contact:</strong> {data.contact}</p>
  </div>
);
}

export default ReUseUser