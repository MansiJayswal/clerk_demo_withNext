import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', 
    '/',                   
    '/(api|trpc)(.*)'        
  ],
  publicRoutes: ['/', '/sign-up', '/sign-in'],
};















// import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// export default withClerkMiddleware(async (req) => {
//   const { userId } = getAuth(req);

//   if (!userId) {
//     const signInUrl = new URL('/sign-in', req.url);
//     signInUrl.searchParams.set('redirect_url', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// });

// export const config = { matcher: ['/dashboard', '/other-protected-routes'] };
