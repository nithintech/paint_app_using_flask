function mouseoverPass(obj) {
  var obj = document.getElementById('password');
  var robj = document.getElementById('rptpassword');
  obj.type = "text";
if(robj){
  robj.type="text";}
}
function mouseoutPass(obj) {
  var obj = document.getElementById('password');
  var robj = document.getElementById('rptpassword');
  obj.type = "password";
if(robj){
  robj.type="password";}
}
