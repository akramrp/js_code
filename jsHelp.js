console.log(Object.getOwnPropertyNames(Math));
// (43) ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2']



/*


vs extensions:
    1. material theme
    2. material icons theme
    3. Prettier -> format on save(ON)
    4. bracket pair colorizer or rainbow bracket
    5. rainbow csv
    6. auto rename tag
    7. REST client
    8. css peek
    9. html css support
    10. live sess compiler
    11. live server
    12. emmet (for auto all basic html structure)
vs code formetText ---> shift+alt+f


=============================================================================================================
======================================== crud app configration start ========================================
=============================================================================================================

check node version:
    node -v
    npm -v

install react from terminal:
    a. npm -g create-react-app
    b. create-react-app -version
    c. create-react-app --version
    d. create-react-app <projectName>

after inatall react app with projectName:
    1. npm start
    2. npm run build
    3. npm test
    4. npm run eject
    5. npm fund
    6. npm audit
    7. npm audit fix

===========  crudapp configration 
    for frontend:
        npx create-react-app crudapp
        npm i @material-ui/core
            create all page (component) --
        npm i json-server  |  yarn add json-server    // for get db.json file
        npm i concurrently
        add these line of in scripts block in package.json filr:
            "json-server": "json-server --watch src/Database/db.json --host 127.0.0.1 --port 3001",
            "dev": "concurrently \"npm start\" \"npm run json-server\"",
        npm run dev     // for run react,server concurrently
        npm i axios


        variant="contained"
        variant="outlined"
        variant="text"

    for backend:
        install node
        node --version
        npm init
        npm i express | yarn add express
            "type": "module",           // in package.json file
        node index.js
            "start": 'node index.js'    // add line in dependencies
        npm start                       // we run server after added above line in package.json
        yarn add nodemon
            "start": 'nodemon index.js' // after install nodemon
        npm start
        rs      // for restart server..
        yarn add mongoose
        yarn add mongoose-auto-increment
        yarn add cors
        yarn add body-parser
    
=============================================================================================================
======================================== crud app configration end   ========================================
=============================================================================================================

*/