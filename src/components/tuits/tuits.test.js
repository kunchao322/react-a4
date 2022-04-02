import Tuits from "./index";
import tuitsData from "./tuits-data.json"
import {act, create} from "react-test-renderer";
import {HashRouter} from "react-router-dom";

test('tuits render', () => {
    let tuits
    act(() => {
        tuits = create(
            <HashRouter>
                <Tuits
                    tuits={tuitsData}
                    refreshTuits={() => {}}
                />
            </HashRouter>
        )
    })
    let root = tuits.root;
    const tuitItems = root.findAllByProps({className: 'the-tuit'})
    expect(tuitItems.length).toBe(tuitsData.length);
    console.log('tuitItems');
    console.log(tuitItems);

    // const tuitList = root.findAllByProps({className: 'list-group'})
    const tuitItem0 = tuitItems[0].findAllByProps({className: 'ttr-tuit'})
    console.log('tuitItem0');
    console.log(tuitItem0);

})
