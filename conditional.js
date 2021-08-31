const temprature = 20;
if(temprature<5){
  console.log("postpone the plan for running... its way too cold");
}else if(temprature<12 && temprature>5){
  console.log('we can go for run..but wear sarf and jacket');
}else if(temprature>12 && temprature<30){
  console.log('this is the best time to workout outside');
}else{
  console.log('this is too hot for outside run...dring plenty of fluids..');
}
console.log('This is your today\'s forcast to workout based on weather');