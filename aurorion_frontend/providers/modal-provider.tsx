"use client";

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => { // Declares a functional component named ModalProvider.

  // Initializes a state variable isMounted using the useState hook. 
  // It's used to track whether the component is mounted or not.
  const [isMounted, setIsMounted] = useState(false); 

  // Uses the useEffect hook to set isMounted to true once the component is mounted.
  useEffect(() => { 
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }
  return ( // If the component is mounted, it returns the PreviewModal component wrapped in a fragment (<>...</>).
    <>
    <PreviewModal />
    </>
   );
}
 
export default ModalProvider;


// "use client";:
// import PreviewModal from "@/components/preview-modal";:
// Imports the PreviewModal component from the "@/components/preview-modal" module. The @ symbol is often used as an alias for a directory in project setups.
// import { useEffect, useState } from "react";:
// Imports the useEffect and useState hooks from the "react" library. These hooks are commonly used for managing side effects and state in React functional components.
// const ModalProvider = () => { ... }:
// Declares a functional component named ModalProvider.
// const [isMounted, setIsMounted] = useState(false);:
// Initializes a state variable isMounted using the useState hook. It's used to track whether the component is mounted or not.
// useEffect(() => { setIsMounted(true); }, []):
// Uses the useEffect hook to set isMounted to true once the component is mounted.
// The [] dependency array indicates that this effect should run only once when the component mounts.
// if (!isMounted) { return null; }:
// Checks if the component is not yet mounted. If not, the component returns null, essentially preventing the rendering of the rest of the component.
// return (<><PreviewModal /></>;:
// If the component is mounted, it returns the PreviewModal component wrapped in a fragment (<>...</>).
// export default ModalProvider;:
// Exports the ModalProvider component as the default export, making it available for use in other parts of your application.
// In summary, the ModalProvider component is responsible for rendering the PreviewModal component, but it delays rendering until the component is mounted to avoid unnecessary operations during the initial render.