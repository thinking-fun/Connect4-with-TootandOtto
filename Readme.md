<h1>Connect4-with-TootandOtto</h1>

This application includes the computerized versions of the games "Connect4" and "Toot & Otto". The application is developed using the MEAN stack.

<h4>The MEAN Stack:</h4>
&nbsp;&nbsp;<b>M</b>ongoDB (the database)<br>
&nbsp;&nbsp;<b>E</b>xpress.js (the middleware)<br>
&nbsp;&nbsp;<b>A</b>ngular.js (the client side magic)<br>
&nbsp;&nbsp;<b>N</b>ode.js (the server)<br>

<h2>Getting Started:</h2>

<h4>Step 1: Install the MEAN stack</h4>

<h5>Install NodeJS and MongoDB on Windows</h5>

   <b> To Install NodeJS on Windows:</b> <br>
&nbsp;&nbsp;a. Download the Windows installer from the https://nodejs.org/en/download/ web site.<br>
&nbsp;&nbsp;b. Run the installer (the .msi file you downloaded in the previous step.)<br>
&nbsp;&nbsp;c. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).<br>
&nbsp;&nbsp;d. Restart your computer. You won’t be able to run Node.js until you restart your computer.<br>
        
   <b> To test the NodeJS installation:</b>
&nbsp;&nbsp; open the Windows Command Prompt, Powershell or a similar command line tool, and type 
        
       node -v
       
   <b> To see if NPM is installed:</b> type 
       
       npm -v

   <b> To Install MongoDB on Windows:</b> 
&nbsp;&nbsp;a. Download the MongoDB installer file from the downloads section of the MongoDB website.<br>
&nbsp;&nbsp;b. Find the dowloaded .msi file in the Windows Explorer. Double click the file and follow the prompts to install Mongo.<br>
&nbsp;&nbsp;c. Start the mongodb daemon by running C:\mongodb\bin\mongod.exe in the Command Prompt. Or by running, C:\path\to\mongodb\bin\mongod.exe<br>

<h5>Install NodeJS and MongoDB on MacOS:</h5>

<b> To Install NodeJS: </b>

   a. Open the Terminal
   b. Enter: 
   
    $ node -v 
   (If you have Node on your system, it will show the version) 
   
   c. Update to the latest version using 
    
    $ npm i -g npm
    
   d. Assuming that you do not have Node already installed, proceed with one of the following methods:
        - The Installer at: https://nodejs.org/
        - The Homebrew way
  First, you need to install Homebrew and this can be done by running the following command on Termnal:
            
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  
  Once Homebrew installation completes, all you have to do is run the following command to install Node:
        
        brew install node
  And you’re done. Just to be sure, to verify that the things are in order, in your Terminal run:
  
        node -v

<b> To Install and Run MongoDB with Homebrew </b>

   a. Open the Terminal app and type 
        
        brew update.
   b. After updating Homebrew brew 
        
        install mongodb
   c. Start the Mongo server by typing: 
   
        mongod
 
 <h5> Install Express and AngularJS </h5>
 
 To Install them on both Windows and MacOS type:
 
    $ npm install express --save
    
    $ sudo npm i -g @angular/cli
    
 <h4>Step 2: Install Dependencies</h4> 
 
 a. Clone Github repository by typing
 
    $ git clone https://github.com/thinking-fun/Connect4-with-TootandOtto.git
    
 b. Open Terminal and move to the project root directory
 c. To install the project dependencies mentioned in the Package.json file, type:
 
    $ npm install
    
 <h4>Step 3: Execute Project</h4>
 
 a. Open Terminal and move to the project root directory
 b. In the Terminal window type:
 
    $ npm start
    
 npm start by default will run the application on port 3000. To view the application window, open browser and type:
 
    http://localhost:3000/
    
 Happy Coding!
 
 





