
export function Profile(props){

    return(<>
    <p><strong>My name: </strong> {props.name}</p>
    <p><strong>Profession:</strong> {props.job}</p>
    <p><strong>Address: </strong> {props.city}, {props.country}</p>
    <p>{props.children}</p>

    </>)
}