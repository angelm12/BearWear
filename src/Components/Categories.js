import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from 'react';
import { auth, storage } from "../firebase-config"
import { onAuthStateChanged} from "firebase/auth";


function Categories(props){
    
    const [image, setImage] = useState(null);
    const [imageList, setImageList] = useState([]);

    const [user, setUser] = useState(null);

	onAuthStateChanged(auth, (currentUser) => {
	setUser(currentUser);
    
})  
    useEffect(() => {
        retrieve();
    }, [user]);

    function setFile(e) {
        setImage(e.target.files[0]);
    }

    function upload() {
        const storageRef = ref(storage, `${user.uid}/${props.name}/${Date.now() + ''}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            retrieve()
        });
    }

    function retrieve() {
        if (user == null) {
            return;
        }
        const listRef = ref(storage, `${user.uid}/${props.name}`)
        listAll([]);
        listAll(listRef).then((res) => {

            res.items.forEach((itemRef) => {
                const path = itemRef._location.path_;
                const urlRef = ref(storage, path);
                getDownloadURL(urlRef).then((url) => {
                setImageList(oldFiles => [...oldFiles, url])            
            });
                
            });
        }).catch((error) => {
            console.log(error)
        });
    }

    // function deleteFromFirebase(url) {
    //     let pictureRef = ref(storage, url);
    //     deleteObject(pictureRef).then(() => { // deletes from firebase
    //     // FIX ME - delete from your local url Delete
    
    // }).catch((error) => {
    //     console.log(error);
    //     });
    // };
        


    return (
    <div className= " flex flex-col justify-center items-center mt-12">
        <input type="file" onChange ={setFile} />
        <div className="box-decoration-slice bg-gradient-to-r from-green-600 to-blue-500 text-white px-2 rounded-lg  shadow-inner">
        <button onClick={upload}> Upload </button> 
        </div >
        <div className="flex flex-col">
        {
            imageList.map(url => (
            (
                <div className="flex flex-col h-60 w-60 ">
                    <img src = {url} />
                </div>
            )
            ))
        }
        </div>
    </div>
    )
}

export default Categories