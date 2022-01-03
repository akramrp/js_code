console.log(Object.getOwnPropertyNames(Math));
// (43) ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2']



/*
REPL = read eval print loop  //use in cli
> node
> .editor
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file




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


========node.js full course for beginner
run commend "node" for node console 



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
    8. npm rm {package name}       // for normal dependencies
    8. npm rm {package name} -D    // for normal devDependencies

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

    for oldcim project:
        // install node in CentOS
        npm install express --save
        npm install formidable
    
=============================================================================================================
======================================== crud app configration end   ========================================
=============================================================================================================


========================== ================ ejs (embadding js)
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it


mongoose support the following type schema:
    Number
    String
    Date
    Buffer
    Boolean
    Mixed
    Array
    Map
    ObjectId
    Decimal128

*/


/*
https://medium.com/@siddarthasiddu96/user-login-and-registration-with-nodejs-using-express-bycrpt-and-mysql-529c872db5a0
*/