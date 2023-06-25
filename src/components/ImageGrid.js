import deleteDoc from "../hooks/deleteDoc";
import useFirestore from "../hooks/useFirestore";
import { motion }  from 'framer-motion';
import {MdDeleteForever} from 'react-icons/md';

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');

    return(
        <div className="row">
            {docs && docs.map((doc) => {
                return(
                    <motion.div className="col-6 col-sm-4 col-md-3 border border-light-subtle img-grid" key={doc.id}
                    layout
                    >
                        <motion.img src={doc.url} style={{width: "100%"}}
                            onClick={()=>setSelectedImg(doc.url)}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5}}
                        />
                        <button class="btn btn-danger btn-delete" onClick={()=>deleteDoc(doc.id)}
                        ><MdDeleteForever size={20}/></button>
                    </motion.div>
                )
            })}
        </div>

        
    )
    
}
export default ImageGrid;