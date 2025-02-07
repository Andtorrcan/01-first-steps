import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Princing',
    description: 'Princing Desc',
    keywords: ["price","dollar"]
 };

export default function PrincingPage(){
    return (
            <span className="text-7xl">Pricing page</span>
    )
}