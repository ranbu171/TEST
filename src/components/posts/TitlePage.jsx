
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from './../../state.context';
import './TitlePage.css';

export default function TitlePage ({ base }) {

    const { setBase } = useContext(StateContext);

    async function fetchData() {
      const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`);
          const result = await response.json();
          setBase(result);
    }
    useEffect(()=>{
        if(!base.length){
            fetchData();
        }
    }, []);
    
    
    return (
        <section>
            <div className='title'>
                {base.map((post) => {
                    return(
                        <Link key={post.split(' ')[0]} className='postTitle' to={`/${post.split(' ').join('-')}`}>
                            <h4>{post.split('.')[0]}</h4>
                        </Link>
                    )
                })}
            </div>
            <button onClick={()=> fetchData()}>next</button>
        </section>

    )
}