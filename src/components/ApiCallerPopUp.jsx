import React, {useState} from 'react'
import '../style_sheets/ApiCallerPopUp.css'

const ApiCallerPopUp = (props) => {

    const [placeHolder, setPlaceHolder] = useState("word searched")
    const [wordSearch, setWordSearch] = useState("")
    const [wordMeaning, setWordMeaning] = useState("")

    const getRequest = {
        method: 'GET',
        headers: {
            "Content-Type": "text/plain"
        }
    }

    const submitButton = () => {
        console.log(wordSearch)
        fetch(`http://localhost:5504/word-meaning/?word=${wordSearch}`, getRequest)
        .catch(err => console.log(err))
        .then(res => res.text())
        .then(meaning => setWordMeaning(meaning))
    }

    return(
        <div className='popUp-shadow-container'>
            <div className='popUp-form'>
                {/* <div className='end-point'>End Point: <a href="https://etymology-meaning.p.rapidapi.com/verb-search/bar">https://etymology-meaning.p.rapidapi.com/verb-search/bar</a></div> */}
                <label className='input-label'>
                    {/* <div className='word-search-container'>word searched</div> */}
                    <input type="text" className='input-form' placeholder='word searched' onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => {e.target.placeholder="word searched"}} onChange={e => setWordSearch(e.target.value)}/>
                </label>
                <label className='input-label'>
                    <div className='word-search-container'> etymological meaning: </div>
                </label>
                    <div className='meaning-container'>{wordMeaning}</div>
                <div className='btns-container'>
                    <button className='btn' onClick={() => props.modal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="20px" height="20px"><path fill="#E04F5F" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"/><path fill="#FFF" d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"/></svg>
                    </button>
                    <button className='btn' onClick={submitButton}>
                        <svg fill="#26e07f" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px">    <path d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApiCallerPopUp