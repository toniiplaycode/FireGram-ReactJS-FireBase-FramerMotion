import { projectFirestore } from "../firebase/config"


const deleteDoc = (id) => {
    const check = window.confirm("Are you sure delete this piture ?");
    if(check) {
        projectFirestore.collection('images').doc(id).delete();
    }
}

export default deleteDoc;
