# algorithms
This is a place where I will share the algorithms that I have found useful. I hope these help you with your problem solving as well.

## Arrays Folder
This folder holds some various algorithms working specifically with arrays and indexes.

### Functions

<!-- <details>
    <summary markdown="span">Click to see functions</summary> -->

   - filter array function that does not use the built-in .filter() method
   - get a select number of random elements within an array
   - map array function that does not use the built-in .map() method
   - reverse array function that does not use the built-in .reverse() method

<!-- </details> -->

---

## Booleans Folder
This folder holds some various algorithms working specifically with booleans.

### Functions

<!-- <details>
    <summary markdown="span">Click to see functions</summary> -->

   - example of minimalist if statement
   - toggle between true and false
   - terinary example

<!-- </details> -->

---

## Computer Science Folder
This folder holds some various computer science concepts. Some are small applications and others are just algorithms.

<!-- <details>
    <summary markdown="span">Click to see details</summary> -->

### graph.js
This code is my version of a graphing algorithm. 
<details>
    <summary markdown="span">Click to expand graph.js file details</summary>

#### ***The code challenge***
   To recreate an acyclic, directed graph of small non-negative unique integers. In this case, a directed graph is a data structure where a node is represented by a unique integer and each node has zero or more child nodes. In addition, the nodes were not allowed to directly or indirectly point to itself.

   The challenge had the following stipulations:
   - Do not use an existing graph library
   - Write a function that creates a node in a graph
   - Write a function that inserts a node as a child of another node
   - These functions should not allow cycles to be created. That is, a node may not directly or indirectly point to itself.
   - Write a function to print out a graph.

#### ***Directions***
   To run this file, clone the repo and navigate to the root folder, "algorithms". Then, just type ```node graph.js``` in the terminal of the root folder. Each time the file is run, a random graph will be output to the terminal.

#### ***My approach***
   The first thing I had to do was to think about the individual nodes and the graph tree that they would form. I used a random number generator function **(getRandomInt)** to determine the number of nodes for the graph **(numVertices)**. It was important to prevent nodes from being repeated throughout the function so I iterated over the number of nodes using (i + 1) to form two array variables, one for the individual nodes **(vertices)** and one to be used to track node usage **(avlVertices)**. Using the **vertices** array, I pushed each node into the **graphObj** object variable.

   Now that my nodes were created, I could begin to create the relationships between the nodes and track which nodes had been picked as parent nodes. I used the **getRandomInt** function again to pick a random node from the **avlVertices** array; this node became the **baseNode** and is removed from the **avlVertices** array. With a **baseNode** selected, I could now determine how many child nodes **(edgeNode)** would be assigned using the **getRandomInt** function once again and assign each **edgeNode** to the **baseNode** array inside the **graphObj** object. By using the **usedEdges** variable as a container to hold each **edgeNode** between each iteration, I was able to determine if a duplicate **edgeNode** was selected and pass over that particular node duplication. This kept my object from having an array like "9":[3,3,6,7] where the 3 was duplicated but only exists once.

   The final step was to graph the **graphObj** object variable in a readable way to form the graph tree. This was accomplished using the **Object.entries(graphObj)** method to iterate over the **graphObj** object and print one key value pair per line onto the terminal console.

</details>

### text2speech.js
   This is an algorith that uses the built-in windows methods to convert text to speech

<!-- </details> -->

---

## Dates Folder
This folder holds some various algorithms working specifically with dates.

### Functions

<!-- <details>
    <summary markdown="span">Click to see functions</summary> -->

   - date format function for MySQL DATETIME format

<!-- </details> -->

---

## Mathematics Folder
This folder holds some various algorithms working specifically with mathematical operations.

### Functions

<!-- <details>
    <summary markdown="span">Click to see functions</summary> -->

   - algorithms for basic maths operations
   - count occurrences of vowels in a string
   - algorithms for factorializing numbers
   - version of the Fizz Bizz algorithm challenge
   - algorithms working with odd and even numbers

<!-- </details> -->

---

## Methods Folder
This folder holds algorithms using various methods with multiple examples.

### Functions

<!-- <details>
    <summary markdown="span">Click to expand Methods Folder details</summary> -->

   - .filter() method
   - .includes() method
   - .indexOf() method
   - .map() method
   - .reduce() method
   - .splice() method

<!-- </details> -->

---

## Numbers Folder
This folder holds some various algorithms working specifically with numbers.

### Functions

<!-- <details>
    <summary markdown="span">Click to expand Numbers Folder details</summary> -->

   - sum of integers from 1 to argument parameter (specified number)
   - algorithms to log numbers in a range
   - generate an array of unique random numbers

<!-- </details> -->

---

## Operators Folder
This folder holds some various examples of how to use logical operators

### Functions

   - OR operator

---

## Strings Folder
This folder holds some various algorithms working specifically with strings.

### Functions

<!-- <details>
    <summary markdown="span">Click to expand Strings Folder details</summary> -->

   - algorithm that returns an acronym for a given string
   - algorithm to capitalize each word in a string
   - algorithm to return the first non-repeating character in a given string
   - algorithm to return longest word in a given string
   - algorithm that removes vowels from a string
   - algorithms that determines if a parameter is a palindrome (the same backwards and forwards)
   - algorithm that determines if a string is a pangram (string contains every letter of the alphabet)
   - various algorithms to remove spaces from strings
   - algorithm to reverse the words in a string
   - determine if a string is a substring
   - algorithm that takes a string and swaps the case of each letter
   - count occurrences of vowels in a string

<!-- </details> -->
