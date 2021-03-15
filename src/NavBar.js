import React from 'react'

export default function NavBar() {
    return (
        <nav class="navbar fixed-top navbar-light bg-light navbar-expand-sm p-1">
            <div class="container-fluid">
                <ul class="navbar-nav"><a href="#" class="navbar-brand">Aryaman Dhingra</a></ul>
            </div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active px">
                    <a href="#about" class="nav-link text-nowrap">About Me</a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                    <a href="#skills" id="skills" class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Socials</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Resume</a>
                </li>
            </ul>
        </nav>
    )
}