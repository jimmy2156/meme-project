import React, { useState } from 'react';
import data2 from "../data";
import data3 from '../data2';



function Form() {
    let [img, setimg] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'https://i.imgflip.com/f6xkp.jpg'
    })
    const [allMemeImages, setallMemeImages] = useState(data2)
   function getData() {
    let randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url1 = allMemeImages[randomNumber].url
    setimg(prevState => ({
       ...prevState, randomImg: url1
    }))
}
let [card2, setcard2] = useState({
    firstName: "jimmy",
    lastName: "singh",
    email: "gaganjot25@gmail.com",
    isValid: true
})
const newMail = card2.isValid ? card2.email = "gaganjot25@gmail.com" : card2.email = "gaganjot2156"
function settinEmail() {
    setcard2(prevState => ({
        ...prevState, isValid: newMail
    }))
}
let [user1, setuser] = useState("ram")
function userName() {
    return(
        setuser(prevState => "jimmy")
    )
}
let 



    return (
        <div className="form">
            <div className="input">
            <input type="text" className="input1" placeholder="Top text" />
            <input type="text" className="input2" placeholder="Bottom text"/>
            
            </div>
            <button className="button" onClick={getData}><h2>Get a new meme image 🖼</h2></button>
            <img src={img.randomImg} className="img1" alt="meme image" />
        
            
         </div>
    )
}


export default Form