function catpart(){
    return 'catpart';
}
const RanGenerator = {
  'catpart': catpart(),
}
function onClickRandom() {
  var inputVal = document.getElementById("inpt").value;

  if (RanGenerator.hasOwnProperty(inputVal)) {
    console.log(RanGenerator[inputVal]);
  }
}