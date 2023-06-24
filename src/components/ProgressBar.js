import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import {motion} from "framer-motion";

const ProgressBar = ({file, setFile}) => {
    const {progress, url} = useStorage(file);
    console.log(progress, url);

    useEffect(()=>{
        // sau khi tải ảnh lên xong (url không còn null) thì setFile(null) để ẩn đi file.name và component ProgressBar bên component FormUpload
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return(
        <div className="progress-parent my-2">
            <motion.div className="progress-child"
                initial={{width: 0}}
                animate={{width: progress + '%'}}
            >
            </motion.div>
        </div>
    )
}

export default ProgressBar;