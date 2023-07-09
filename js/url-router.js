document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
});

const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home",
        description: "This is the home page",
    },
    "/about": {
        template: "/templates/about.html",
        title: "About Us",
        description: "This is the about page",
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
    "/o_piecach_wedzalniczych": {
        template: "/templates/piece.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
    "/menua": {
        template: "/templates/user-menu.html",
        title: "Menua",
        description: "This is the contact page",
    }
};

const urlRoute = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href); //"Dupa"
    locationHandler();
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.pathname;
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
    //.setAttribute("content", route.description);
};