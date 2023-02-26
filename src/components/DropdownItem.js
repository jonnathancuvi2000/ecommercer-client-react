import '../style/Anoucenment.css'


export default function DropdownItem(props) {
    return (
        <li className="dropdawonItem" onClick={props.click}>
            <div className='items'>
                <img src={props.img} />
                <a >{props.text}</a>
            </div>
        </li >
    )
}