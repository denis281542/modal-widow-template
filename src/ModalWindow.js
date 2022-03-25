import { useState } from "react"

export const ModalWindow = (props) => {
    const [open, setOpen] = useState(false)

    var modalClass = 'modal';

    if(open) modalClass += ' modal--active'

    const closeModal = () => {
        setOpen(false)
    }


    return(<>
        <button
            onClick={() => {
                setOpen(true)
            }}
        >{props.btnOpen}</button>

        <div
            onClick={() => {
                setOpen(false)
            }} 
            className={modalClass}
        >          
            <div 
                className="modal__window" 
                onClick={e => e.stopPropagation()}
            >
                <button 
                    className="modal__btn-close"
                    onClick={() => closeModal()}
                >{props.closeIcon}</button>

                <div className="modal__inner">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <footer className="modal__buttons">
                        <button onClick={() => closeModal()}>{props.buttonCancel}</button>
                        <button onClick={() => console.log('submit')}>{props.buttonSubmit}</button>
                    </footer>
                </div>
                
            </div>
        </div>
    </>
    )
}