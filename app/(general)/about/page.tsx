import type { Metadata } from "next";

export const metadata: Metadata = {
   title: 'SEO Title',
   description: 'SEO Desc',
   keywords: ["chicken","test"]
};

export default function AboutPage() {
   return (
         <span className="text-7xl">About page</span>
   )
}