import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";


// The code const font = Urbanist({ subsets: ["latin"] }); is a JavaScript statement that imports the
// Urbanist font from the @next/font/google package and assigns it to a variable named font. The subsets
// option specifies that only the Latin subset of the font should be loaded. This can improve performance
// by reducing the file size of the font.


const font = Urbanist({ subsets: ["latin"] });

// Imagine you have a store, and you want to create a description card for it. 
//  This code is like writing that description card. The code says:

// "This is a store."
// "The store sells things online."
// The code uses special words to tell the computer what to do. 
// It's like giving instructions to a robot friend. The code tells the robot to remember two things:

// The name of the store is "Store".
// The store sells things online.
// The robot will use this information to help people find the store and understand what it sells.

// export: This keyword is used to export the following declaration (in this case, an object) so that it
// can be imported in other files.
// const metadata:: This line declares a constant variable named metadata. Constants cannot be reassigned
// once they are defined.
// Metadata:: This indicates the type of the variable metadata. It's using TypeScript syntax to explicitly 
// specify that metadata should adhere to the Metadata type.
// =: Assigning a value to the metadata variable.
// {}: This curly braces pair is used to define an object literal, which contains key-value pairs.
// title: "Store", and description: "E-commerce store",: These are key-value pairs inside the object.
//  The metadata object has two properties: title with the value "Store" and description with the value
//  "E-commerce store".

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store",
}

// export default function RootLayout:
// This line exports a default function named RootLayout. It is the main component that defines the layout structure for your application.
// ({ children }: { children: React.ReactNode }):
// This is a destructuring assignment of the children prop from the function's argument. It is a TypeScript syntax specifying that children is a property of type React.ReactNode.
// {} denotes an object, and within it, children: React.ReactNode specifies the shape of the expected object.
// <html lang="en">...</html>:
// This represents the HTML structure of the document with the language set to English ("en").
// This is a JSX syntax used in React to describe the structure of the UI.
// <body className={font.className}>:
// Sets the className of the body element to the class provided by the font variable. This class likely represents a font style applied globally.
// <ModalProvider /> and <ToastProvider />:
// These are React components being used to provide context or functionality to the components rendered inside RootLayout.
// Context providers, like ModalProvider and ToastProvider, often manage state or provide services throughout the component tree.
// <Navbar />, {children}, and <Footer />:
// These are components that make up the main structure of the page.
// Navbar represents the navigation bar, {children} is a placeholder for the dynamic content of each page, and Footer represents the footer section.
// return ...;:
// The return statement contains the JSX structure representing the layout of your application. It includes the HTML structure, body with applied font style, context providers, and the main components (Navbar, dynamic content, and Footer).

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
