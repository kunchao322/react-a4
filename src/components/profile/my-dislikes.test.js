import Tuits from "../tuits/index";
import dislikedTuits from "../tuits/tuits-data.json"
import {act, create} from "react-test-renderer";
import {HashRouter} from "react-router-dom";

test('tuits render', () => {

    let tuits
    act(() => {
        tuits = create(
            <HashRouter>
                <Tuits
                    tuits={dislikedTuits}
                    refreshTuits={() => {}}
                />
            </HashRouter>
        )
    })
    const root = tuits.root;
    const tuitItems = root.findAllByProps({className: 'the-tuit'})
    expect(tuitItems.length).toBe(dislikedTuits.length);

    const tuitList = root.findAllByProps({className: 'list-group'})
    // tuitItems[0].findAllByProps({className: 'ttr-tuit'})
    console.log(tuitList)

})
