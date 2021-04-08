// console.log(document.body.childNodes);
// console.log(document.body.lastChild)

// console.log(document.querySelector('#current').parentElement.parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.body.firstElementChild)

for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue
    }
    console.log(node);
}