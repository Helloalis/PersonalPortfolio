import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState  } from 'react';
import Contact from "./components/Contact.js";
import passChe from "./images/passwordChecker.png";
import passCheOu from "./images/passwordCheckerOutput.png";
import ll from "./images/linkedList.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


function Intro(props) {
    return <div><h1>Introduction</h1> <p>Hello! My name is Rohan. I am currently in the Collabera training program to be a Java Developer</p></div>
}

function PasswordChecker() {
	return (
		<div class="row passwordChecker">
            <img src={passChe} class="col-4 rounded float-start" alt="This program evaluates password strengths" />
            <div class="col-4">
                <p>This program evaluates password strengths. It test whether passwords match. It uses 5 criteria: </p>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Length has to be greater than 6, and a strong one has to be longer than 10</li>
                    <li class="list-group-item list-group-item-dark">Has to contain at least one uppercase letter</li>
                    <li class="list-group-item list-group-item-dark">Has to contain at least one lower case letter</li>
                    <li class="list-group-item list-group-item-dark">Has to contain one number</li>
                    <li class="list-group-item list-group-item-dark" >Cannot have more than 2 of the same character in a row</li>
                </ul>
            </div>
            <img src={passCheOu} class="col-4 rounded float-end" alt="This program evaluates password strengths" />
		</div>
	)
}

function LinkedList() {
    return (
    <div class="row linkedList">
            <img class="col-4" src={ll} alt="The linked list interface" />
            <div class="col">
                <p> This was an assignment for college. We were asked to is to write a generic double singly-linked list class with an iterator, and a generic sorted double singly-linked list class with an iterator that inherits from your generic double singly-linked list class.</p>
            </div>
    </div>
    )
}

function Home() {
    return <h3>Click a link to see one of the projects</h3>
}

function bookTracker() {
    return (
        
    )
}

function Layout(){
    return (
        <div class="portfolio">
            <h2>Portfolio</h2>
            <p>Heres my portfolio</p>
            <nav>
                <ul>
                    <li><Link class="App-Link" to="/">Home</Link></li>
                    <li><Link class="App-Link" to="/linkedList">LinkedList</Link></li>
                    <li><Link class="App-Link" to="/passwordChecker">Password Checker</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
};

function App() {

    const [style, setStyle] = useState("App-def");

    const changeStyle = () => {
        console.log("you just clicked");

        setStyle("App-alt");
    };
return (
    <div class={style + " row"}>
        <header>
            <div class="row App-header-content-def" min-height="8.5vh"> </div> 
            <nav class="row navbar navbar-expand-sm App-header-bar-def">
                <div class="container-fluid">
                    <ul class="navbar-nav" id="navBare">
                        <li class="nav-item"><a href="#intro" class="nav-link App-link">Introduction</a></li>
                        <li class="nav-item"><a href="#portfolio" class="nav-link App-link">Portfolio</a></li>
                        {/*<li class="nav-item"><a href="#about" class="nav-link App-link">About me</a></li> */}
                        <li class="nav-item"><a href="#contact" class="nav-link App-link">Contact me</a></li>
                        <li class="nav-item"><a href="#navBares" class="nav-link App-link" onClick={changeStyle}>Toggle Color scheme</a></li>
                    </ul>
                </div>
            </nav>
        </header>


        
        <div className="App-main-def">
            <br />
            <div id="intro"><Intro /></div><br />

            <div id="portfolio">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="linkedList" element={<LinkedList />} />
                            <Route path="passwordChecker" element={<PasswordChecker />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

                
            </div><br />

            <div id="contact">
                <p>Email me at <a href="mailto:rohanrtkurup@gmail.com" className="App-link">rohanrtkurup@gmail.com</a></p>
                <p>Or, use this form:</p>
                <Contact />
            </div>


        </div>

        <footer className="App-footer-def">
            <hr className="footerDivider" />
            
        </footer>

    </div>
  );
}

export default App;
