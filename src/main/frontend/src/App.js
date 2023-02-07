import './App.css';
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";

const UserProfiles = () => {
    const [userProfiles, setUserProfiles] = useState([]);

    const fetchUserProfiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profile")
            .then((res) => {
                setUserProfiles(res.data);

            });
    }

    useEffect(() => {
            fetchUserProfiles();
        },
        [userProfiles]);

    return userProfiles.map((userProfile, index) => {
        return (
            <div key={index} className="container">
                {userProfile.userProfileId
                    ? <img className="container-image" alt="profile-img"
                           src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}/>
                    :
                    null}
                <br/>
                <h1>{userProfile.username}</h1>
                <p>{userProfile.userProfileId}</p>
                <div className="dropzone">
                    <Dropzone {...userProfile}/>
                </div>
                <br/>
            </div>
        )
    })
}

function Dropzone({userProfileId}) {
    const onDrop = useCallback(acceptedFiles => {
        // Select the first file
        const file = acceptedFiles[0];

        // Create a form data object to send the file to the server
        const formData = new FormData();
        // Add the file to the form data
        formData.append("file", file);

        axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            console.log("File uploaded successfully");
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <UserProfiles/>
        </div>
    );
}

export default App;
