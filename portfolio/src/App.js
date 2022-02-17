import './App.css';
import React, { Component } from 'react';

function Intro(props) {
    return <div><h1>Introduction</h1> <p>Hello! My name is Rohan Kurup. I am currently in the Collabera Jump training program to be a Java Developer</p></div>
}


function App() {
return (
    <div class="row App">
        <header>
            <div class="row App-header-content" min-height="8.5vh"> </div> 
            <nav class="row navbar navbar-expand-sm App-header-bar">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#intro" class="nav-link App-link">Introduction</a>
                        </li>
                        <li class="nav-item">
                            <a href="#portfolio" class="nav-link App-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link App-link">About me</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link App-link">Contact me</a>
                         </li>
                    </ul>
                </div>

            </nav>
        </header>
        <br/>
        <div className="App-main">
            <div id="intro"><Intro /></div>
        </div>
        <footer className="App-footer">
            <hr className="footerDivider" />
            <p>Email me at <a href="mailto:rohanrtkurup@gmail.com" className="App-link">rohanrtkurup@gmail.com</a></p>
        </footer>

    </div>
  );
}

export default App;
