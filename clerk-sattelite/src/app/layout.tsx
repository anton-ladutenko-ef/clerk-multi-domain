import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body>
            {/*<header>*/}
            {/*  <SignedOut>*/}
            {/*    <SignInButton />*/}
            {/*  </SignedOut>*/}
            {/*  <SignedIn>*/}
            {/*    <UserButton />*/}
            {/*  </SignedIn>*/}
            {/*</header>*/}
            <main>{children}</main>
          </body>
        </html>
      </ClerkProvider>
  );
}
