To run the functionals tests on the App, there are some steps to be followed.

   STEP 1 : INSTALLING CYPRESS
      
     System requirements:
        Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

    macOS 10.9 and above (64-bit only)
    Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
    Windows 7 and above

   installing via npm
    
    $ cd /your/project/path

    $ npm install cypress --save-dev

    This will install Cypress locally as a dev dependency for your project.

   installing via yarn

     $ cd /your/project/path

     $ yarn add cypress --dev

 STEP 2 : OPENING CYPRESS

     If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin. so run this one

   $ ./node_modules/.bin/cypress open
         or with the shortcut

   $ (npm bin)/cypress open

     
   Cypress Failed to Start?

     you might probably have problem with your dependencies. Then make sure your system has dependencies installed and re-run cypress after
   
        apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

 STEP 3 : RUN TESTS

    Now that the cypress terminal is open, you can click on files related to the "List App"(homepage.js and sample.js) and let the functionals tests run


