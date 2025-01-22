import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // Redirect all requests from this domain to the new domain(es)
    if (request.headers.get('host') === 'e-redirector.vercel.app') {
        // divide the url into domain and path
        const url = new URL(request.url)
        const path = url.pathname

        // redirect to the new domain
        return NextResponse.redirect('https://www.everythingstartups.io/' + path, {
            status: 301
        })
    }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
}