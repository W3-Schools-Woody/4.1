
const http = require ("http");
const url = require ("url");


// -=-=  endpoint array -=-=-=-=
const products = [
    'Milk',
    'Eggs',
    'Cheese',
    'Pork',
    'Shrimp',
    'Chicken'
]

// -=-=-=- building server object -=-=-=-
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url === "/profile")
        response.write("Profile Page!");
    else if (request.url === "/products")
        response.write("Product Page!");
    else if (request.url === "/cart")
        response.write("Cart!");
    else if (request.url === "register")
        response.write("Register!");
    else if (request.url === "/login")
        response.write("Login Page!");
}


    let urlString = url.parse(request.url, true),
    response.write(JSON.stringify(urlString.query));

// -=-=-=- parameters for available products  -=-=-=-=-
    if (urlString.pathname === "/products") {
        for(let product of products){
            if (product.toLowerCase() === urlString.query.search.toLowerCase()) {
                response.write(`Product ${urlString.query.search} found`)
                response.end();
            return
        }
}

// -=-=-=- if product is not recognized/available -=-=-=-
    response.write(`Product ${urlstring.query.search} not found`)
}


response.end();
) .listen(8080);