

for ( var i= 5; i < 120; i+=10)
{
    console.log(i);
}



for ( var i= 4096; i >= 1; i /= 2)
{
    console.log(i);
}



var presidents =["George Washington", 
	"John Adams", 
	"Thomas Jefferson", 
	"James Madison",
	"James Monroe",
	"John Quincy Adams",
	"Andrew Jackson",
	"Martin Van Buren",
    "William Henry Harrison",
	"John Tyler",
	"James Knox Polk",
	"Zachary Taylor",
	"Millard Fillmore",
	"Franklin Pierce",
	"James Buchanan",
	"Abraham Lincoln",
	"Andrew Johnson",
	"Ulysses Simpson Grant",
	"Rutherford Birchard Hayes",
	"James Abram Garfield",
	"Chester Alan Arthur",
	"Grover Cleveland",
    "Benjamin Harrison",
	"Grover Cleveland",
	"William McKinley",
	"Theodore Roosevelt",
	"William Howard Taft",
	"Woodrow Wilson",
	"Warren Gamaliel Harding",
	"Calvin Coolidge",
	"Herbert Clark Hoover",
	"Franklin Delano Roosevelt",
	"Harry S. Truman",
	"Dwight David Eisenhower",
	"John Fitzgerald Kennedy",
	"Lyndon Baines Johnson",
	"Richard Milhous Nixon",
	"Gerald Rudolph Ford",
	"Jimmy Carter",
	"Ronald Wilson Reagan",
	"George Herbert Walker Bush",
	"Bill Clinton",
	"George Walker Bush",
	"Barack Hussein Obama II"];
for ( var i= 0; i < presidents.length; i++)
{
    var name= presidents[i];
    console.log("President # " + i + " was " + name);
}

var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}


//This one will print out the key names which are the ant names.
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
 for (var key in antSpecies)
{
   console.log(key); 
}
// or you could:
//console.log(antSpecies[key]);

// this will print out the value of the keys which are empty, will comeback as just objects
























