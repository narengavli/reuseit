import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './new.css';
export default function App() {
//   var footer = document.querySelector("#footer");

// window.onscroll = function() {
//   if (window.scrollY >= footer.offsetHeight) {
//     footer.classList.add("sticky");
//   } else {
//     footer.classList.remove("sticky");
//   }
// };
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left' id='footer'>
      <div className='text-center p-3' style={{ backgroundColor: '#14213d', textAlign:'center',margin:'auto',color:'white', padding:'15px',overflow:'auto', bottom:'0', position:'relative', width:'100%', left:'0', right:'0'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}<span>&nbsp;All rights are reserved.</span> 
             </div>
    </MDBFooter>
  );
}