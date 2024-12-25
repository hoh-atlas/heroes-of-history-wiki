"use client";

import Link from "next/link";
import { useEffect } from "react";

const ErrorPage = () => {

    return ( 
        <div>
            <h2>404</h2>
            <p>Page not found</p>
            <p><Link href="/" className="text-link">Main Page</Link></p>
        </div>
     );
}
 
export default ErrorPage;