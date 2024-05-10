import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import styles from './styles/main.css'
import Navbar from '~/components/Navbar'
import Hello from "./components/Hello";

// import Fetch from "./components/Fetch";
import styles from '~/styles/home.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./components/ToDoList";



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
  {/* <Navbar/> */}
  <Outlet />
  {/* <Hello/> */}
  {/* <Notes/> */}
  {/* <Fetch/> */}
  <ToDoList/>
 
  
  </>)

}

