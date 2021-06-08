import "./styles/all.scss";
//import 'bootstrap/dist/css/bootstrap.min.css';


// import 'bootstrap/js/dist/alert';
 import 'bootstrap/js/dist/base-component'
 import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
  import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
 import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
 import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
 import 'bootstrap/js/dist/tooltip';

//  import axios from 'axios';

//  axios.get('/VsWeb/api/GetLstDicCinema').then(res=>{
//   console.log(res);
// })

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
