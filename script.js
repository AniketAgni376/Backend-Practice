const fs = require('node:fs');
//Asynchronous APIs

// write File ✅
// read File ✅
// append File ✅
// unlinkFile "delete File" ✅
// rename File ✅
// folder creation ✅ ; this is all we can do with the help of fs module.
// Delete Folder ✅


// 1-fs.writeFile

fs.writeFile("abcd.txt", "Welcome Aniket :)", function(err)  {
if(err) console.log(err);
else console.log("file created");
})

// 2-fs.readFile

fs.readFile("abcd.txt","utf8", function(err, data){
    if(err) console.log(err);
    else console.log(data);
})


// 3-appendFile
fs.appendFile("abcd.txt"," Hope you are doing good in Coding Journey", function(err){
    if (err) console.log(err);
    else console.log("Hope you are doing good in Coding Journey")  
});

// 4-renameFile

fs.rename("abcd.txt","hey.txt", function(err){
  if (err) console.log(err);
  else console.log("File Renamed Successfully")
})

// 5-unlinkFile or delete file

fs.unlink("hey.txt", function(err){
    if (err) console.log(err);
    else console.log("File Deleted Successfully")
 })

// 6-Adding Folder

 fs.mkdir("lele",function(err){
    if (err) console.log(err);
    else console.log("Folder Created")
 })

// 7-reading Folder

 fs.readdir("lele", {withFileTypes:true}, function(err, Files){
    if (err) console.log(err);
     else console.log(Files)
})

// 8- Folder delete using recurssion

fs.rm("lele", {recursive:true} ,function(err){
   if(err) console.log(err);
   else console.log("Folder Deleted")
 })



 //Synchronous APIs


//  1- fs.writeFileSync
 fs.writeFileSync("xyz.txt", "I am reaching my Goals")

//2- fs.readFileSync
let data =  fs.readFileSync("xyz.txt", "utf8");
 console.log("read");