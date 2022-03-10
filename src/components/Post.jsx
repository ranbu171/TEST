import { useNavigate, useParams } from "react-router-dom";


export default function Post () {
    const { post} = useParams();
    const back = useNavigate()
    return (
        <section>
            <div className="post">
                <p>{post.split('-').join(' ')}</p>
            </div>
            <button onClick={()=>back(-1)}>back</button>
        </section>
    )
}