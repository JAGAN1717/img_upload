import react, { useState } from 'react'
import './upload.css'
import axios from 'axios';
import swal from 'sweetalert';


const Upload = () =>{

    const [img,setimg]=useState([]);
    const handlechange = (resposnse)=>{
        setimg(resposnse.target.files[0])
    }
    console.log(img.name)

    const submit = () =>{
        const formdata = new FormData();
        formdata.append('file',img)
        console.log("formdata",formdata)
        axios.post('http://localhost:8080/img/upload',formdata,
        {headers:{'Content-Type':"multipart/form-data"}}).then(data=>{
            console.log('res',data);
            swal({
                title: "image succussfully added!",
                text: "",
                icon: "success",
                button: "OK",
              });

        }).catch(err=>{
            console.log('err',err.message)
        })
    }
    return(
        <>
        <center>
            <div className='upload'>
                <input type='file' className='form-control' name='upload_file' onChange={handlechange}/>
                <button type='button' className='btn' onClick={submit} >Submit</button>
            </div>
            </center>
        
        </>
    )
}

export default Upload