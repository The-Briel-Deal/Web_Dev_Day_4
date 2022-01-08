var unordered_list = document.querySelector("ul");
for (index = 0; index < 1000000; index++) {
    console.log(index);
    water = document.createTextNode(index);
    node = document.createElement("li");
    node.appendChild(water);
    unordered_list.appendChild(node);
}



// water = document.createTextNode("water");
// node = document.createElement("li");
// node.appendChild(water);
// unordered_list.appendChild(node);