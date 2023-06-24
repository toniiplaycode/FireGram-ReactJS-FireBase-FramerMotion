import useFirestore from "../hooks/useFirestore";
import { motion }  from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');

    return(
        <div className="row">
            {docs && docs.map((doc) => {
                return(
                    <motion.div className="col-6 col-sm-4 col-md-3 border border-light-subtle img-grid" key={doc.id} onClick={()=>setSelectedImg(doc.url)}
                    layout
                    >
                        <motion.img src={doc.url} style={{width: "100%"}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5}}
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ImageGrid;