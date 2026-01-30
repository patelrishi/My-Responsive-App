'use client'

import "./globals.css";
import { Menu } from "./Menu/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My-Responsive-App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/f167577203.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Menu />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" defer ></script>
      </body>
    </html>
  );
}
