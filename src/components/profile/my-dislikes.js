import Tuits from "../tuits";
import * as service from "../../services/dislikes-service";
import {useEffect, useState} from "react";

const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuits] = useState([]);
    // const findTuitsIDislike = () =>
    //     service.findAllTuitsDislikedByUser("me")
    //         .then((tuits) => setDislikedTuits(tuits));
    const findTuitsIDislike = () => {
        const tuitsLiked =  service.findAllTuitsDislikedByUser("me");
        console.log(tuitsLiked);

    }

    useEffect(findTuitsIDislike, []);
    
    return(
        <div>
            <Tuits tuits={dislikedTuits} refreshTuits={findTuitsIDislike}/>
        </div>
    );
};
export default MyDislikes;