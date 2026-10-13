import React from 'react'
import './App.css'

function App() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <img
          className="profile-img"
          src="https://i.pravatar.cc/150?img=47"
          alt="Neha Reddy"
        />
      </div>

      <div className="card_body">
        <h1 className="name">Neha Reddy</h1>
        <p className="role">Frontend Developer</p>

        <div className="stars">
          <i
            className="fa-solid fa-star"
            style={{ color: "rgb(136, 106, 222)" }}
          ></i>
          <i className="fa-solid fa-star" style={{ color: "rgb(136, 106, 222)" }}></i>
          <i className="fa-solid fa-star" style={{ color: "rgb(136, 106, 222)" }}></i>
          <i className="fa-solid fa-star" style={{ color: "rgb(136, 106, 222)" }}></i>
          <i className="fa-regular fa-star" style={{ color: "rgb(136, 106, 222)" }}></i>
        </div>

        <div className="buttons">
          <button className="btn">About Me</button>
          <button className="btn">Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default App