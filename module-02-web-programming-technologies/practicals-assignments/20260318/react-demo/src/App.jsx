// Commands to create a react project:
// 1. Check if node and npm is installed using command: node -v && npm -v
// 2. If node is not installed then download and install node.js first from the website: https://nodejs.org/en/download
// 3. Choose your desired location (directory)
// 4. Open terminal there and execute the commands in terminal to create react-project: npx create-react-app <project_name>
// 5. It will take some time to install and setup reactjs project. So, be patient.
// 6. Open the terminal in <project_name> directory.
// 7. To run the project, execute the command: npm start

// ------- OR -------
// 1. If you are cloning the repo then open the termial in "react-demo" directory.
// 2. Execute the command to install the node_modules directory: npm install
// 3. To run the project, execute the command: npm run dev 
import SayHello from './components/Hello';
import Addition from './components/Addition';

import IsPalindome from './components/IsPlaindrome';

import Data from './components/Data';

function App() {
  return (
    <>
      <SayHello name={"Himanshu Maurya"} />
      <Addition num1={13} num2={18} />

      {/* ------- Program 2 ------- */}
      <h1>Program 2</h1>
      <IsPalindome />
      <br />
      <br />

      {/* ------- Program 3 ------- */}
      <h1>Program 3</h1>
      <Data />
    </>
  )
}

export default App
