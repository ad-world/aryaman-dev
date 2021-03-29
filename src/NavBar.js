import React from 'react'
import Pdf from './Aryaman_Dhingra_Resume.pdf';

export default function NavBar() {
    return (
        <nav class="navbar fixed-top navbar-light bg-light navbar-expand-sm p-1 d-none d-sm-flex">
            <div class="container-fluid">
                <ul class="navbar-nav"><a href="#header" className="navbar-brand">Aryaman Dhingra</a></ul>
            </div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#about" className="nav-link text-nowrap">About Me</a>
                </li>
                <li class="nav-item">
                    <a href="#skills" className="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#socials" className="nav-link disabled">Socials</a>
                </li>
                <li class="nav-item">
                    <a href={Pdf} target="_blank" rel="noreferrer" className="nav-link">Resume</a>
                </li>
            </ul>
        </nav>
    )
}