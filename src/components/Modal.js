import {motion} from "framer-motion";

const Modal = ({selectedImg, setSelectedImg}) => {
    const handleCloseModal = (e) => {
        if(e.target.classList.contains('Modal')){
            setSelectedImg(null);
        }
    }

    return(
        <motion.div className="Modal" onClick={handleCloseModal}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selectedImg}
            initial={{y: "-100vh"}}
            animate={{y: 0}}
            />
        </motion.div>
    )
}

export default Modal;