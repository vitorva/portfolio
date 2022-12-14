<template>
    <h1>Journeys</h1>
    <div class="project">
        <p>Journeys is a web application made for trip creation using points of interest around Switzerland. </p>

        <p>It was a team project made in school.</p>

        <p class="technos"><a>MapLibre · &nbspReact · &nbspMaterial UI · &nbspSpring Boot · &nbspMaven · &nbspNeo4j
                · &nbspGCP · &nbspCI / CD</a></p>

        <div>
            <a class="link" href="https://gitlab.com/pdg-journeys/journeys"><img alt="Vue logo" class="logo"
                    src="@/assets/gitlab.svg" width="25" height="25" /></a>
            <a class="link" href="http://46.101.222.19"><img alt="Vue logo" class="logo" src="@/assets/links.svg"
                    width="25" height="25" /></a>
        </div>
    </div>


</template>

<style>
.link {
    margin-left: 10px;
    margin-right: 10px;
}

.logo:hover {
    filter: invert(65%) sepia(32%) saturate(0%) hue-rotate(253deg) brightness(97%) contrast(89%);
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