# How to add a new page
1. Log in to the Sandbox UI
   1. Open the [sandbox UI](https://rump-sandbox.web.app/) and select "login"
   1. Enter your phone number for 2FA
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/a0b92181-09d9-4c9f-8905-ba196558e668)

   1. Enter the code received to your phone number
   1. You should now be logged in.
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/f536da28-1bc8-45ad-9ff0-c7cf045adcaf)

1. Create page in UI

   1. Navigate to the [Pages page](https://rump-sandbox.web.app/pages) and select "New Page"
      
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/e920c411-0d0d-4dde-9724-3b68bbaf732b)
   
   1. Type in the name of your page, as one word (e.g. my-new-page) and click "create"
    
   1. You should see your page in the pages list
  
    ![image](https://github.com/rump-food-software/sandbox/assets/1266147/03288a00-061b-439e-85b7-c0c539fa99b8)

1. Create React Component for Page
   
   1. Open the pages folder in your local environment. [view on github](https://github.com/rump-food-software/sandbox/tree/main/src/pages)
  
   1. Create a new file with the desired name of your component. Must be one word, PascalCase, must have .jsx extension
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/dd1ccdbe-b85a-4482-bb90-213fc681b9f4)

   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/cd233161-6886-4205-a729-d06dc592ce5c)

   1. Edit file to include react Component (example below)
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/dd47b441-a05c-4ebc-be4d-ae60248212ed) 

1. Configure Route

   1. Open the Router.jsx file in your local environment
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/c3cd3238-d17c-4fe9-a9b2-cc3423acfcb6)

   1. Add a <Route> to the innermost <Route> collection, at the end of the other "pages" routes, including your new component as the "element". Note: the text after "/pages/" must match the page name in the UI.
      
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/409d4db3-c6fe-4a24-b8c0-8343c75986ca)

   1. Once this is done, the React app should be able to route to your new component

1. Confirm success

   1. Start the app useing the "start" script in package.json
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/a67502af-82ca-4236-9893-0245bdc10bb2)

   1. Navigate to the pages list (/pages), and select your page from the list
  
      ![image](https://github.com/rump-food-software/sandbox/assets/1266147/3e45640a-99d0-4cff-8c95-90f2dde2c2c0)

   1. Confirm that the page is displaying your component's content
  
   ![image](https://github.com/rump-food-software/sandbox/assets/1266147/d50afd9c-ae35-4a3d-a580-5cf6a253bf33)

1. Questions/FAQ

   1. If you have questions, feel free to message Eric or add them as [issues](https://github.com/rump-food-software/sandbox/issues)
  
   1. If you find any issues and resolve them, please add them to this document
  
1. Thanks!

Thanks to all the people of rump for making this worthwhile
