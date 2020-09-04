// Get a random integer between two values
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Console.log to start printout in console
console.log("==========================================================================================");
console.log(`The following graph has:`);
console.log(``);

// Define a random number of vertices for the graph
const numVertices = getRandomInt(4, 20);
console.log(`${numVertices} individual Nodes (vertices)`);

// Array of all nodes
let vertices = [];
// Array of available nodes to manipulate to prevent duplication of nodes
let avlVertices = [];
// Object to hold the graph relationships (relationship between the basenode and edgenodes)
let graphObj = {};

// Iterate over the numVertices to create the individual nodes
for (var i = 0; i < numVertices; i++) {
    vertices.push(i + 1);
    avlVertices.push(i + 1);
}

// Iterate over the vertices to create the keys for the objects with empty array values
for (var i = 0; i < vertices.length; i++) {
    graphObj[vertices[i]] = [];
}
console.log(``);
console.log(`This is the initial graph object showing the creation of the individual nodes`);
console.log(`${JSON.stringify(graphObj)}`);
console.log(``);
console.log(`The program will select a random number of iterations to select an individual node then create and assign random child nodes`);

// Generate the relationships between the baseNode and the edgeNodes
for (let i = 0; i < getRandomInt(1, numVertices); i++) {
    // Pick a random node from the available nodes array
    let baseNode = avlVertices[getRandomInt(0, avlVertices.length)];
    console.log(``);
    console.log(`Iteration #${i+1} selected Node #${baseNode} as a parent node`);

    // Remove the baseNode from the available nodes array
    for (let i = 0; i < avlVertices.length; i++) {
        if (avlVertices[i] === baseNode) {
            avlVertices.splice(i, 1);
        }
    }

    // Define a random number of edges for a baseNode (the number of relationships to create)
    const numEdges = getRandomInt(0, getRandomInt(0, avlVertices.length));
    console.log(`Node #${baseNode} will have ${numEdges} random child nodes`);

    // Define a holding array for edgeNodes that have been used
    let usedEdges = [];

    // Assign the edges to the node
    for (let i = 0; i < numEdges; i++) {
        // Pick a random node from the available node array
        let edgeNode = avlVertices[getRandomInt(0, avlVertices.length)];
        console.log(`Child node iteration #${i+1} selected Node #${edgeNode}`);

        // Check to see if child node already exists
        if (!usedEdges.includes(edgeNode)) {
            // Add the relationship to the graph object
            graphObj[baseNode].push(edgeNode);
            // Sort the edgeNodes array in ascending order
            graphObj[baseNode].sort((a,b) => a - b );
            // Add the edgeNode to the usedEdges array to prevent duplicates
            usedEdges.push(edgeNode);
        } else {
            console.log(`Node #${edgeNode} will not be added on iteration #${i+1} as it is a duplication`)
        }
    }
}

console.log(``);
console.log(`Final Object: ${JSON.stringify(graphObj)}`);
console.log(``);
console.log("==========================================================================================");
console.log(``);
console.log("Generated Final Graph Below:");

// Print the graph to the console
for (const [key, value] of Object.entries(graphObj)) {
    console.log(`${key} => ${value}`);
}
