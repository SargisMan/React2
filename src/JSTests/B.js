const B=(props)=>{
    console.log(`props`, props);
    return (
      <div className="B">
        <h1>B Component</h1>
        <div>{props.children}</div>
      </div>
    )
}

export default B;