const Row=(props)=>{
    // console.log('children', props.children)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1>Title</h1>
        {props.children}
      </div>
    );
}

export default Row;