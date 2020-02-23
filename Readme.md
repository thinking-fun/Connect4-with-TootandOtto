<h1>Connect4-with-TootandOtto</h1>

This application includes the computerized versions of the games "Connect4" and "Toot & Otto". The application is developed using the MEAN stack.

<h4>The MEAN Stack:</h4>
&nbsp;&nbsp;<b>M</b>ongoDB (the database)<br>
&nbsp;&nbsp;<b>E</b>xpress.js (the middleware)<br>
&nbsp;&nbsp;<b>A</b>ngular.js (the client side magic)<br>
&nbsp;&nbsp;<b>N</b>ode.js (the server)<br><br>

The detailed instructions on set-up and execution of the project is discussed below. <br><br>

<h2>Getting Started: Step 1: Install the MEAN stack</h2>

<h3>A. Install NodeJS and MongoDB on Windows</h3><br>

   <h5> Installing NodeJS:</h5>
&nbsp;&nbsp;&nbsp;&nbsp;i. Download the Windows installer from the https://nodejs.org/en/download/ web site.<br>
&nbsp;&nbsp;&nbsp;&nbsp;ii. Run the installer (the .msi file you downloaded in the previous step.)<br>
&nbsp;&nbsp;&nbsp;&nbsp;iii. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).<br>
&nbsp;&nbsp;&nbsp;&nbsp;iv. Restart your computer. You won’t be able to run Node.js until you restart your computer.<br>
        
   <h5> Testing the NodeJS installation:</h5>
&nbsp;&nbsp;&nbsp;&nbsp; Open the Windows Command Prompt, Powershell or a similar command line tool, and type 
        
       node -v
       
   <h5> Testing NPM installation:</h5> type 
       
       npm -v

   <h5> To Install MongoDB on Windows:</h5> 
&nbsp;&nbsp;&nbsp;&nbsp;i. Download the MongoDB installer file from the downloads section of the MongoDB website.<br>
&nbsp;&nbsp;&nbsp;&nbsp;ii. Find the dowloaded .msi file in the Windows Explorer. Double click the file and follow the prompts to install Mongo.<br>
&nbsp;&nbsp;&nbsp;&nbsp;iii. Start the mongodb daemon by running C:\mongodb\bin\mongod.exe in the Command Prompt.<br>

<h3>B. Install NodeJS and MongoDB on MacOS:</h3> <br>

<h5> Installing NodeJS: </h5>

   i. Open the Terminal and enter: 
   
    $ node -v 
   (If you have Node on your system, it will show the version) 
   
   ii. Update to the latest version using 
    
    $ npm i -g npm
    
   iii. Assuming that you do not have Node already installed, proceed with one of the following methods:<br>
&nbsp;&nbsp;&nbsp;&nbsp;- The Installer at: https://nodejs.org/ <br>
&nbsp;&nbsp;&nbsp;&nbsp;- The Homebrew way <br> 

   i. First, you need to install Homebrew and this can be done by running the following command on Termnal:
            
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  
  ii. Once Homebrew installation completes, all you have to do is run the following command to install Node:
        
        brew install node
  iii. And you’re done. Just to be sure, to verify that the things are in order, in your Terminal run:
  
        node -v

<h5> To Install and Run MongoDB with Homebrew </h5>

   i. Open the Terminal app and type 
        
        brew update.
   ii. After updating Homebrew brew 
        
        install mongodb
   iii. Start the Mongo server by typing: 
   
        mongod
 
 <h3> C. Install Express and AngularJS </h5>
 
 To Install them on both Windows and MacOS type:
 
    $ npm install express --save
    
    $ sudo npm i -g @angular/cli
    
 <h4>Step 2: Install Dependencies</h4> 
 
 i. Clone Github repository by typing
 
    $ git clone https://github.com/thinking-fun/Connect4-with-TootandOtto.git
    
 ii. Open Terminal and move to the project root directory <br>
 iii. To install the project dependencies mentioned in the Package.json file, type:
 
    $ npm install
    
 <h4>Step 3: Execute Project</h4>
 
 i. Open Terminal and move to the project root directory <br>
 ii. In the Terminal window type:
 
    $ npm start
    
 npm start by default will run the application on port 3000. To view the application window, open browser and type:
 
    http://localhost:3000/
    
 Happy Coding!
 
 





