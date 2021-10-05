export default function Card ({img,imgAlt,text, active}){
    return(
        <div className={`card ${active ? 'active' : ''}` }>
            <img src={img} alt={imgAlt} />
            <p>{text}</p>
        </div>
    )
}