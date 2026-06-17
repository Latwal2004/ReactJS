function JsxAsProps({children,color="green"}){
    return (
        <div style ={{border:"5px solid ", color:color,margin:"10px", borderRadius:"10px"}}>
            <div style={{textAlign:"center",padding:"10px"}}>
                <h1>PASSING JSX AS PROPS (Childrens)</h1>
                 <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default JsxAsProps;