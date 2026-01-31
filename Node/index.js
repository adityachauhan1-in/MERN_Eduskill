import _ from "lodash";
import http from "http"
import chalk from "chalk";
const hostname = '127.0.0.1' 
const port = 3000;
const server = http.createServer((req,res) => {
    res.statusCode = 200;// OK 
   
    res.end("Hello from Node.js  Server HIII ")
})
 server.listen(port, hostname, () => {   console.log(`Server running at http://${hostname}:${port}/`); });
 server.listen(port, hostname, () => {   console.log(`Server running at http://${hostname}:${port}/about`); });
 console.log(chalk.yellow("kyo hila dala na "))
 //  FOR ADD FROM THE (LOADASH LIBRARY )
const numbers = [1, 2, 3, 4, 51 , 89 ];
  const sum = _.sum(numbers);  
  console.log(chalk.bold(`The sum of the numbers is: ${sum}`));
