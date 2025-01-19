import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    // Redirect all requests from this domain to the new domain(es)
    if (request.headers.get('host') === 'e-redirector.vercel.app') {
        return NextResponse.redirect('https://entrepreneurshipstudio.com' + request.url, {
            status: 301
        })
    }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
}