import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function CardImageSection({icon, texto}){
    return(
        <div className='cardImageSection'>
         <FontAwesomeIcon icon={icon} className='icon'/>
         <p className='text-info' >{texto}</p>
        </div>
    )
}

export default CardImageSection