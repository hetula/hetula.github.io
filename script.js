'use strict';

const initializePage = () => {
    const loadPageContent = pageName => {
        const pageRequest = new XMLHttpRequest();
        pageRequest.onreadystatechange = () => {
            if (pageRequest.readyState !== 4) {
                return;
            }
            document.getElementById("container").innerHTML = pageRequest.status === 200 ?
                pageRequest.responseText : "<br>" + pageRequest.status + " " + pageRequest.statusText;
        };

        pageRequest.open("GET", "pages/" + pageName + ".html", true);
        pageRequest.send();
    };

    const createNavigationItem = (name) => {
        const spanElement = document.createElement('span');
        const htmlPageName = name.toLowerCase().replace(" ", "_");

        spanElement.appendChild(document.createTextNode(name));
        spanElement.setAttribute("class", "nav-item");
        spanElement.setAttribute("id", htmlPageName);
        spanElement.addEventListener('click', () => {
            loadPageContent(htmlPageName);
        });

        document.getElementById("navigation").appendChild(spanElement);
    };

    const navigation = document.getElementById("navigation");
    while (navigation.firstChild) navigation.removeChild(navigation.firstChild);

    ["Home", "Homefy", "Viola", "Learning C", "Misc"].forEach(navi => createNavigationItem(navi));
    loadPageContent("home");
};
