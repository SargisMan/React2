export default function Card ({img,imgAlt,text, active}){
    return(
        <div className={`card ${active ? 'active' : ''}` }>
            <img src={img} alt={imgAlt} className="img"/>
            <p>{text}</p>
        </div>
    )
}