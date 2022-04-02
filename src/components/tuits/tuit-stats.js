import React from "react";
import {useState, useEffect} from "react";
import * as likeService from "../../services/likes-service";
import * as dislikeService from "../../services/dislikes-service";

const TuitStats = ({tuit, likeTuit, dislikeTuit}) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const userAlreadyLikedTuit = async () =>{
        const objectLike = await likeService.userAlreadyLikedTuit('me', tuit._id);
        const objectDisLike = await  dislikeService.userAlreadyDislikedTuit('me', tuit._id);
        if(objectLike){
            setLike(true);
        }else{
            setLike(false);
        }
        if(objectDisLike){
            setDislike(true);
        }else{
            setDislike(false);
        }
    }
    useEffect( ()=>{
        userAlreadyLikedTuit()}, [tuit]);

    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          <span  className="ttr-stats-replies">{tuit.stats && tuit.stats.replies}</span>
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
            <span className="ttr-stats-retuits">
          {tuit.stats && tuit.stats.retuits}</span>
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)} className='ttr-like-tuit-click'>
              {
                 like &&
                  <i className="fas fa-thumbs-up me-1" style={{color: 'red'}}></i>
              }
              {
                  !like &&
                  <i className="far fa-thumbs-up me-1"></i>
              }
              <span className="ttr-stats-likes">
                  {tuit.stats && tuit.stats.likes}</span>
          </span>
        </div>
        <div className="col">
          <span onClick={() => dislikeTuit(tuit)} className='ttr-dislike-tuit-click'>
              {
                  dislike &&
                  <i className="fas fa-thumbs-down me-1" style={{color: 'red'}}></i>
              }
              {
                  !dislike &&
                  <i className="far fa-thumbs-down me-1"></i>
              }
              <span className="ttr-stats-dislikes">
                  {tuit.stats && tuit.stats.dislikes}</span>
          </span>
          </div>
          <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;