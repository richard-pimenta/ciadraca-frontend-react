import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap"
import { storage, fbStorage } from "../../../Initialize/Firebase"
import firebase from 'firebase'


// import { Container } from './styles';

export function NewPhotos({ curentAlbum }) {

  const [files, setFiles] = useState([])

  function fileChange(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      console.log("fileIndex", i)
      const newFile = e.target.files[i]
      setFiles((prevState) => [...prevState, newFile])
    }
  }
  async function uploadPhoto() {
    files.map(async (file) => {
      const refStorage = fbStorage.ref()
      const refFile = refStorage.child(file ? file.name : false)
      console.log("refFile:", refFile)
      await refFile.put(file)
      storage.collection('ciadraca').doc(curentAlbum).update({
        img: firebase.firestore.FieldValue.arrayUnion({
          name: file.name,
          original: await refFile.getDownloadURL(),
          thumbnail: await refFile.getDownloadURL()
        })
      })

    })

  }

  return <div>
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Control type="file" multiple onChange={fileChange} />
    </Form.Group>
    <Button variant="outline-warning" onClick={uploadPhoto}>Adicionar Foto</Button>
  </div>;
}


// export const renegadosPhotos = [
//   {
//     original:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-logo.jpeg?alt=media&token=559d1566-d7e4-40af-80f4-f18fa120d12a",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-logo.jpeg?alt=media&token=559d1566-d7e4-40af-80f4-f18fa120d12a",
//     height: "",
//   },
//   {
//     original:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-apresentacao-atores.jpeg?alt=media&token=4678e260-d64a-4646-85d8-007c10dcf600",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-apresentacao-atores.jpeg?alt=media&token=4678e260-d64a-4646-85d8-007c10dcf600",
//     height: 3,
//   },
//   {
//     original:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-apresentacao.jpeg?alt=media&token=9794d18b-2fad-4d17-bcbe-d4de179fd313",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-apresentacao.jpeg?alt=media&token=9794d18b-2fad-4d17-bcbe-d4de179fd313",
//     height: "",
//   },
//   {
//     original:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-flyer.jpeg?alt=media&token=8fab3872-0a67-407e-a798-7a82d01796f5",
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-flyer.jpeg?alt=media&token=8fab3872-0a67-407e-a798-7a82d01796f5",
//     height: "",
//   },
// ];
