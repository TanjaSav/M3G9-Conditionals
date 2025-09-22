# TypeScript People Data Project

##   Project Description

This project is a simple TypeScript exercise that demonstrates how to define structured data using appropriate types and perform logical operations using control flow statements. It focuses on working with an array of `Person` objects and answering specific questions using `if` statements, `switch`, and ternary operators.


##  Objectives

- Define a `Person` type with appropriate data types
- Create an array of people using that type
- Use `if` statements to answer logical questions
- Practice using `switch` and ternary operators
- Rendering all output directly to the web page using the DOM: each message is added as a new `<p>` element inside the `#person-container`.

## Project Structure
```

├── index.html          // Main HTML entry point  
├── main.ts             // TypeScript logic  
├── main.js             // Compiled JavaScript output  
├── tsconfig.json       // TypeScript configuration  
├── package.json        // Project metadata and dependencies  
├── package-lock.json   // Locked versions of installed packages  
├── node_modules/       // Installed libraries  
└── README.md           // Project documentation
```

## How to Run
1. Initialize the project:
```
 npm init -y
```
 
2. Install TypeScript:
```
 npm install typescript --save-dev
```
3. Create TypeScript configuration file:
```
 npx tsc --init
```
4.	Generates a `tsconfig.json` file to configure the TypeScript compiler. Example configuration:
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
5. Create a new `main.ts` file and write your logic inside.
```
 main.ts
```
6. Сompile `main.ts` to generate `main.js` file:
```
 npx tsc main.ts
```
7. Compile TypeScript to JavaScript:
```
 npx tsc
```
8. Create a new `index.html` file and link the compiled script:
```
index.html
```
```
<script src="main.js" type="module"></script>
```
9. Open `index.html` in your browser using Live Server to see the output results

##  Output Link

This is the link to the output results:
https://tanjasav.github.io/M3G9-Conditionals/
