import type { Metadata } from "next";

export const metadata: Metadata = {
   title: 'About us',
   description: 'SEO Desc',
   keywords: ["chicken","test"]
};

export default function AboutPage() {
   return (
         <span className="text-7xl">About page</span>
   )
}