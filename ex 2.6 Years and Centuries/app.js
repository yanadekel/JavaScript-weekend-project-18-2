// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)
///////////////////////////////////////////////////////////////////////////////////////////////////


let centary = (year) => {
  let cent =Math.ceil(year/100);
return cent;

}


console.log(centary(10));
console.log(centary(1));
console.log(centary(346));