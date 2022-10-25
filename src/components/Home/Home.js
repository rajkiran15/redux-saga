import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {GET_POSTS} from "../../api/posts/actions";

const Home = ({postData,getPosts}) => {
    useEffect(()=>{
        getPosts();
    },[]);
    return (
       <div className="container">
             <h2>home pge</h2>
             {
                postData.map((d,k) => (
                    <div key={k}>
                         <h3>{d.title}</h3>
                    </div>
                ))
             }
       </div>
    )
}

const mapStateToProps=(state)=>({
    postData:state.posts.posts
})

const mapDispatchToProps=(dispatch)=>({
    getPosts: () => dispatch(GET_POSTS())
});

export default (connect(mapStateToProps,mapDispatchToProps)(Home));