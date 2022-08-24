export default function dateFommatter (date){
return new Date(date).toISOString().slice(0,10);
}