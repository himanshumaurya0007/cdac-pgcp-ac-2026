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
import Data from './components/Data';

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ipsum illo, sit fuga eaque non porro labore molestias repudiandae adipisci id quam aperiam explicabo blanditiis quod molestiae earum itaque sequi reiciendis! Obcaecati totam nesciunt, necessitatibus veniam accusantium inventore eos rerum dignissimos hic assumenda eius dolores, commodi aspernatur maxime unde voluptatem illum enim quis accusamus molestias! Reprehenderit, vero laborum enim dolorum iste possimus qui error et repudiandae animi excepturi distinctio ratione recusandae quisquam quos eveniet dignissimos, asperiores quas esse ipsum blanditiis praesentium ducimus adipisci sapiente. Ut earum, rem nisi maiores, minima vero, cum ullam eaque modi dolore amet autem dolorum natus?</p>

      <SayHello name={"Himanshu Maurya"} />
      <Addition num1={13} num2={18} />
      <Data />
    </>
  )
}

export default App
