import React, {useState, useEffect} from 'react'
import '../style_sheets/ApiCallerPopUp.css'
import EndPointMenu from './EndPointMenu'

const ApiCallerPopUp = (props) => {

    // const [placeHolder, setPlaceHolder] = useState("word searched")
    const [wordSearch, setWordSearch] = useState("")
    const [wordMeaning, setWordMeaning] = useState("")
    const [endpointMenu, setEndPointMenu] = useState(false)
    const [apiEndPoint, setApiEndPoint] = useState('All Syntaxes')

    const getRequest = {
        method: 'GET',
        headers: {
            "Content-Type": "applciation/json"
        }
    }

    const submitButton = () => {
        const formattedEndPoint = apiEndPoint.replace(/\s+/g, '-').toLowerCase()
        console.log(formattedEndPoint)
        console.log(wordSearch)
        fetch(`https://etymology-api.herokuapp.com/${formattedEndPoint}/${wordSearch}`, getRequest)
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(meaning => {
            if(meaning[0]) {
                setWordMeaning(meaning[0].meaning)
                return
            }
            setWordMeaning("word not found")
        })
    }

    useEffect (() => {
        
        const menu = document.querySelector('.end-point-menu-container')
        const arrowDown = document.querySelector('.svg-arrow-down-container')

        if(!endpointMenu) return(arrowDown.style.transform = "rotate(0deg)")
        if(endpointMenu) return([arrowDown.style.transform = "rotate(180deg)", menu.style.transform = 'translate(0, 58%)'])

    }, [endpointMenu])

    return(
        <div className='popUp-shadow-container'>
            <div className='popUp-form'>
                <div className='exit-btn-container'>
                    <button className='exit-btn' onClick={() => props.modal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="20px" height="20px"><path fill="#E04F5F" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"/><path fill="#FFF" d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"/></svg>
                    </button>
                </div>
                <label className='query-container'>
                    <input type="text" className='query-input' placeholder='word searched' onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => {e.target.placeholder="word searched"}} onChange={e => setWordSearch(e.target.value)}/>
                    {/* <button className='api-end-point-menu' onClick={() => (setEndPointMenu(!endpointMenu))}> {apiEndPoint} {endpointMenu&&<EndPointMenu apiEndPoint = {apiEndPoint} setEndPoint={setEndPoint}/>} <div className='svg-arrow-down-container'> <img src="http://localhost:3000/arrow-down.svg" alt="arrow-down"/> </div></button> */}
                    <div className='api-end-point-menu'> 
                        <button className='api-btn' onClick={() => (setEndPointMenu(!endpointMenu))}>
                            {apiEndPoint} 
                            <div className='svg-arrow-down-container'> 
                                <img src="http://localhost:3000/arrow-down.svg" alt="arrow-down"/> 
                            </div> 
                        </button>
                        {endpointMenu&&<EndPointMenu setEndPoint={setApiEndPoint}/>} 
                    </div>
                    <button className='query-btn' onClick={submitButton}>
                        <svg fill="#26e07f" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z"/></svg>
                    </button>
                </label>
                <div className='meaning-container'>{wordMeaning}</div>
            </div>
        </div>
    )
}

export default ApiCallerPopUp