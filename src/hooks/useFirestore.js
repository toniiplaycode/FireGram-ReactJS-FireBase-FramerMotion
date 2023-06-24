import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    //  Biến docs sẽ chứa các tài liệu (documents) được lấy từ Firestore.

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                const documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
        return () => unsub();
        // this is a cleanup function that react will run when a component using the hook unmounts
    }, [collection])

    return { docs };
}

export default useFirestore;

// giải thích code từ nguyên file này (https://chat.openai.com/c/d42cb848-7047-4c0d-ab74-4f7dd5d4ba48)