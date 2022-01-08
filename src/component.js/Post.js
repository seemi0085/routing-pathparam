

import {  useLocation } from 'react-router-dom'

const Post = (props) => {
    const { id } = props.match.params;
    // const {id} = useParams();
    const location = useLocation();
    console.log(location)
    console.log(props);
    return (
        <>
            <h1>hello {id} </h1>
            <p>my current location is{location.pathname}</p>
            {location.pathname === `/post/mobile` ? (
                <button onClick={() => alert(`you are awesome`)}>click me</button>
            ) : null}
        </>
    )
}
export default Post;