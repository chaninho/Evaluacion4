import React from "react";

const Header = () => {
    return <>       
    <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000">PRODUCTOS TECNOLOGÍA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="http://localhost:3000">Features</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</>
}

export default Header