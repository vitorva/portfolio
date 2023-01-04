<template>
    <h1>Journeys</h1>
    <div class="project">
        <p>An web application made for trip creation using points of interest around Switzerland. </p>

        <p>This project was developed in a team of 5 students as a semester project (PDG) at HEIG-VD. &nbspIt received a rating of <b>5.6 / 6</b>.</p>

        <p class="technos"><a>MapLibre · &nbspReact · &nbspMaterial UI · &nbspSpring Boot · &nbspMaven · &nbspNeo4j
                · &nbspGCP · &nbspCI / CD</a></p>

        <a target="_blank" href="https://gitlab.com/pdg-journeys/journeys" class="link">
            <div class="btn">
                <img alt="Vue logo" class="logo-project" src="@/assets/gitlab.svg" width="20" height="20" />
                <span>View repository</span>
            </div>
        </a>

        <a target="_blank" href="http://www.myjourneys.xyz" class="link">
            <div class="btn">
                <img alt="Vue logo" class="logo-project" src="@/assets/links.svg" width="20" height="20" />
                <span>View Website</span>
            </div>
        </a>

    </div>
</template>

<style>
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    color: inherit;
}

.btn {
    display: flex;
    align-items: center;
    /* Align vertical */
    vertical-align: middle;
    color: #696969;
    background-color: #f0f0f0;
    border: solid 1px;
    font-size: small;
    max-width: 150px;
    padding: 5px
}

.logo-project {
    margin-right: 20px;
    margin-right: 5px;
}

.link {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
}

.btn:hover {
    filter: invert(30%) sepia(50%) saturate(0%) hue-rotate(253deg) brightness(97%) contrast(89%);
}


.project {
    padding-top: 2px;
    padding-bottom: 10px;
    padding-left: 10px;
    /*border-left: solid #d9d9d9b2;*/
    background-color: #3b4252;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    color: #d8dee9;
    border-radius: 10px;
    transition: opacity 500ms;
}

.technos {
    font-style: italic;
    color: #d9d9d9b2;
}
</style>