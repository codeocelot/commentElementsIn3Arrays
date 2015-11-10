module.exports = function(){
  // assumptions
  // each array contains no duplicates
  var sharedElements = [];
  var workingSet = {};
  var arrs = Object.keys(arguments).map(key=>{return arguments[+key]});
  arrs.forEach(function(a){
    a.forEach(function(el){
      if(!workingSet[el])
        workingSet[el] = 1;
      else workingSet[el]++;
    });
  });

  Object.keys(workingSet).forEach(function(k){
    if(workingSet[k] === 3)
      sharedElements.push(+k);
  })
  return sharedElements;
}
