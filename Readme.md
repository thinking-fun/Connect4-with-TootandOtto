<h1>Connect4-with-TootandOtto</h1>

This application includes the computerized versions of the games "Connect4" and "Toot & Otto". The application is developed using the MEAN stack.

<h4>The MEAN Stack:</h4>
    <b>M</b>ongoDB (the database)	
    <b>E</b>xpress.js (the middleware)	
    <b>A</b>ngular.js (the client side magic)	
    <b>N</b>ode.js (the server)

<h2>The detailed steps to execute the applications on Mac OS / Windows / Linux systems are as follows:</h2>

<h4>Step 1: Install the MEAN stack</h4>

<h5>MEAN stack on Windows</h5>

   <b> To Install NodeJS on Windows:</b> 
        a. Download the Windows installer from the https://nodejs.org/en/download/ web site.
        b. Run the installer (the .msi file you downloaded in the previous step.)
        c. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
        d. Restart your computer. You won’t be able to run Node.js until you restart your computer.
        
   <b> To test the NodeJS installation:</b>
       open the Windows Command Prompt, Powershell or a similar command line tool, and type 
       node -v
       
   <b> To see if NPM is installed:</b> type 
       npm -v

   <b> To Install MongoDB on Windows:</b> 
   
      a. Download the MongoDB installer file from the downloads section of the MongoDB website.

Find the dowloaded .msi file in the Windows Explorer. Double click the file and follow the prompts to install Mongo. Note: unless you specify a custom directory Mongo is most likely installed in the C:\mongodb directory**. However, based on settings on your machine Mongo may be installed other places. For example, C:\Program Files\MongoDB\Server\3.2. Additionally, you may find MongoDB in the add/remove programs menu.

Create the directory where MongoDB will store it’s files. From the command prompt run md \data\db. This is the default location. However, other locations can be specified using the --dbpath parameter. See the Mongo docs for more information.

Start the mongodb daemon by running C:\mongodb\bin\mongod.exe in the Command Prompt. Or by running, C:\path\to\mongodb\bin\mongod.exe

Connect to MongoDB using th
   

<h5>MEAN stack on MacOS:</h5>

   a. Open the Terminal
   b. Enter node -v (If you have Node on your system, it will show the version) 
   c. Update to the latest version using 
        $ npm i -g npm





