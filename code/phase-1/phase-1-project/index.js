const signin = document.getElementById ('signin');
function signincondition (){
    alert('be sure your institution have an account !'); 
}
signin.addEventListener ('click', signincondition);
const home = document.getElementById ('home-class');
const studentSubsmit = document.getElementById('now-student');

function goToHomepage (){
    console.log (home)
        }
const studentPass = document.getElementsByName('Registration Number');
function accepted () {
  if (studentPass = [1,2,3]|| [2,2,1] ||[4,5,6]){goToHomepage } else {
    'This Registration Number does not refer to registerd institution !';
}}

studentPass.addEventListener ('input', '');
studentSubsmit.addEventListener('click',goToHomepage);