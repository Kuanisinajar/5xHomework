import React, { useState } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');

const ContactModal = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    function closeModal(){
        setIsOpen(false);
      }

    return ( 
        <Modal isOpen={isOpen}>
            <div className="modal_closeArea">
                <button onClick={closeModal}>
                    <div className="closeIcon"></div>
                </button>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 modal_section">
                        <h1>已成功送出表單！</h1>
                    </div>
                    <div className="col-12 col-md-6 modal_section">
                        <h1>名字</h1>
                        <p>劉凱婷</p>
                    </div>
                    <div className="col-12 col-md-6 modal_section">
                        <h1>信箱</h1>
                        <p>ting@goomaol.com</p>
                    </div>
                    <div className="col-12 col-md-6 modal_section">
                        <h1>電話</h1>
                        <p>0912123123</p>
                    </div>
                    <div className="col-12 col-md-6 modal_section">
                        <h1>主題</h1>
                        <p>project</p>
                    </div>
                    <div className="col-12 modal_section">
                        <h1>訊息</h1>
                        <p>lore</p>
                    </div>
                </div>
            </div>
        </Modal>
     );
}
 
export default ContactModal;