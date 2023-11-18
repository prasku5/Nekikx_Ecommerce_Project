import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => { 
  const res = await fetch(`${URL}/${id}`); // await is a keyword in JavaScript that is used to pause the 
  // execution of an asynchronous function until a promise has been resolved.
  // A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

  return res.json();
};

export default getBillboard;

// Importing the Billboard type:

// This code is importing a definition of what a Billboard is from a file called @/types.
// This file likely contains information about the properties of a billboard, such as its title, 
// description, and image URL.

// Defining the URL for billboard data:

// This code is defining a variable called URL and assigning it a specific web address.
// This web address points to the endpoint for retrieving billboard data. 
//The process.env.NEXT_PUBLIC_API_URL environment variable is likely set to the actual URL of the API endpoint.

// Defining the getBillboard function:

// This function is responsible for fetching billboard data from the API endpoint 
// and returning a promise that resolves to a Billboard object. The id parameter is a string that 
// represents the ID of the billboard to fetch. The function constructs the URL for the billboard data
// using the URL variable and the id parameter, and then fetches the data using the fetch() function. 
//The res.json() method parses the JSON response from the API and returns a promise that resolves to the parsed JSON object.

// Exporting the getBillboard function:

// This code is making the getBillboard function available to other parts of the code. 
//This means that other parts of the code can call the getBillboard function to fetch billboard data.

// In summary, this code is defining a function that can be used to fetch billboard data from an API endpoint.
// The function takes an id parameter that represents the ID of the billboard to fetch, and it returns a promise
// that resolves to a Billboard object.

// ================================================================================================================


// The Promise<Billboard> type annotation is used to specify the type of value that the getBillboard function will return. In this case, the function will return a promise that resolves to a Billboard object. The Promise<Billboard> type annotation is important for several reasons:

// It makes the code more self-documenting. By explicitly specifying the type of value that the function will return,
// it is easier for other developers to understand what the function does and what type of value to expect.

// It helps to catch type errors. The type checker will be able to catch type errors early in the development process,
// which can save time and effort.

// It makes the code more predictable. By using a type annotation, it is clearer to other developers what the function
// will return, which can make the code easier to use and maintain.

// In this particular case, the Billboard interface is used to define the structure of a billboard object. 
//This interface ensures that all billboard objects have the same properties and that those properties have the
// same types. This can help to prevent errors and make the code more maintainable.

// Using an interface for the Billboard object has several advantages:

// It promotes code reuse. By using an interface, it is possible to implement the Billboard interface in
// multiple different ways. This can make it easier to reuse code across different projects.

// It improves code readability. By defining the structure of a billboard object in an interface,
// it makes the code easier to read and understand.

// It makes the code more maintainable. By using an interface, it is easier to make changes to the structure of 
// a billboard object without breaking existing code.

// Overall, the use of the Promise<Billboard> type annotation and the Billboard interface helps to make the code 
// more self-documenting, easier to understand, and easier to maintain.

// ================================================================================================================

// await is a keyword in JavaScript that is used to pause the execution of an asynchronous function until a promise 
// has been resolved. A promise is an object that represents the eventual completion (or failure) of an asynchronous
// operation.

// fetch is a JavaScript function that is used to make HTTP requests. It returns a promise that resolves to a Response
// object, which contains the response data from the server.

// The combination of await and fetch can be used to make asynchronous HTTP requests in a more concise and readable 
// way. For example, the following code fetches a JSON object from a server and then logs it to the console:

// ================================================================================================================

// The export default getBillboard; statement makes the getBillboard function available to other modules that import
// this module. This means that other modules can call the getBillboard function to fetch billboard data.

// Here is a breakdown of the statement:

// export: This keyword tells the JavaScript engine that the getBillboard function should be exported from this module.
// default: This keyword tells the JavaScript engine that the getBillboard function should be the default export for 
// this module. This means that other modules can import the getBillboard function without having to explicitly name it.
// getBillboard: This is the name of the function that is being exported.

// ;: This semicolon terminates the statement.
// The scope of the getBillboard function is global to the module that imports it. 
// This means that the function can be called from anywhere within that module.

// ================================================================================================================

// The async keyword in JavaScript is used to mark a function as asynchronous. This means that the function can 
// contain asynchronous operations, such as making HTTP requests or waiting for user input.

// Asynchronous functions are used to prevent the browser from becoming unresponsive 
// while waiting for asynchronous operations to complete.

// Here are some of the benefits of using the async keyword:

// Improved performance: Asynchronous functions can improve the performance of web applications by allowing the 
// browser to continue rendering the page while waiting for asynchronous operations to complete.

// Better user experience: Asynchronous functions can help to create a more responsive user experience by preventing
//  the browser from freezing while waiting for asynchronous operations to complete.

// Easier-to-read code: Asynchronous functions can make code more readable by making it clear which functions contain
//  asynchronous operations.

// ================================================================================================================