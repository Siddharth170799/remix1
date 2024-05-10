import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import HomeStyles from '~/styles/home.css'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return ;
}


