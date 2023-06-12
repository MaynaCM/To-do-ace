function ProgressBar({ progress }){
    return(
        <div className="outerBar h-5/6 w-6/12 ">
            <div 
   className={`innerBar bg-cyan h-full`}
            style={{width: `${progress}%`}}
            >
            </div>
        </div>
    )
}

export default ProgressBar;