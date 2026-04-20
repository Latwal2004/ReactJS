function customRender(reactElement, container){
    const domElement  = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement);

    for(const prop in reactElement.props){
        if(prop === "children") continue;
        document.setAttribute(prop, reactElement.props[prop]);
        container.appendChild(domElement)
    }
}

const reactElement = {
    type:'a',
    props:{
        href:'https://www.bing.com/search?filters=ufn%3a%22Google+Search%22+sid%3a%220edabf9c-4239-7a77-3fd7-c2709549473e%22&asbe=AS&qs=MB&pq=google&sk=CSYN1UAS7LS2AS8MT1&sc=25-6&pglt=395&q=google+search&cvid=39e7a925c3ab4f598f500a1a75d50a16&gs_lcrp=EgRlZGdlKgYIBBAuGEAyCQgAEEUYQRj5BzIGCAEQRRg7MgYIAhAuGEAyBggDEAAYQDIGCAQQLhhAMgYIBRAuGEAyBggGEEUYQTIGCAcQRRg8MgYICBBFGEHSAQkxMjQxM2owajeoAgCwAgA&FORM=ANNTA1&ucpdpc=UCPD&PC=SCOODB',
        target:'_blank'
    },
    children : 'click me to visit google'
}

const mainContainer =  document.getElementById('#root');

customRender(reactElement, mainContainer)