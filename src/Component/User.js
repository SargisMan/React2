function User ({name,surname,age}){
    console.log(`props`, props)
    return (
      <div>
        <p>Name:{name}</p>
        <p>Surename:{surname}</p>
        <p>Age:{age}</p>
      </div>
    );
}

export default User;