import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="navbar-footer btn-modal relative px-7 py-4 bg-purple rounded-lg leading-none flex items-center">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}

/*export default function Post(props) {
    return (
        // <div class="relative group">
        //     <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        //     <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="relative px-7 py-4 bg-purple rounded-lg leading-none flex items-center">
        //         <span class="flex items-center space-x-5">
        //             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        // </svg> 
        //             <span class="navbar-footer flex">{props.date}</span>
        //         </span>

        //     </button>


        // </div>
        
        
        



    )
} */