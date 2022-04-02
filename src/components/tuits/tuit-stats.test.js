import {act, create} from 'react-test-renderer';
import TuitStats from "./tuit-stats";

test('stats render correctly', () => {
    let stats = {
        likes: 123,
        replies: 234,
        retuits: 345
    }

    const likeTuit = () => {
        act(() => {
            stats.likes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    likeTuit={() => {}}
                />)
        })
    }

    let tuitStats
        act(() => {
            tuitStats = create(
                <TuitStats
                    likeTuit={likeTuit}
                    tuit={{stats: stats}}/>
            );
        })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const likesCounter =   root.findByProps({className: 'ttr-stats-likes'})
    // eslint-disable-next-line testing-library/await-async-query
    const retuitsCounter = root.findByProps({className: 'ttr-stats-retuits'})
    // eslint-disable-next-line testing-library/await-async-query
    const repliesCounter = root.findByProps({className: 'ttr-stats-replies'})
    // eslint-disable-next-line testing-library/await-async-query
    const likeTuitButton = root.findByProps(
        {className: 'ttr-like-tuit-click'})

    let likesText = likesCounter.children[0];
    const repliesText = repliesCounter.children[0];
    const retuitsText = retuitsCounter.children[0];
    expect(likesText).toBe('123');
    expect(repliesText).toBe('234');
    expect(retuitsText).toBe('345');

    act( () => { likeTuitButton.props.onClick()})
    likesText = likesCounter.children[0];
    expect(likesText).toBe('124');
});

test('click like button add 1 count', () => {
    let stats = {
        likes: 123,
        replies: 234,
        retuits: 345
    }

    const likeTuit = () => {
        act(() => {
            stats.likes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    likeTuit={() => {}}
                />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                likeTuit={likeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const likesCounter =   root.findByProps({className: 'ttr-stats-likes'})
    // eslint-disable-next-line testing-library/await-async-query
    const likeTuitButton = root.findByProps(
        {className: 'ttr-like-tuit-click'})
    let likesText = likesCounter.children[0];

    expect(likesText).toBe('123');

    act( () => { likeTuitButton.props.onClick()})
    likesText = likesCounter.children[0];
    expect(likesText).toBe('124');
});

test('click dislike button reduce 1 count', () => {
    let stats = {
        dislikes: 123
    }

    const dislikeTuit = () => {
        act(() => {
            stats.dislikes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    likeTuit={() => {}}
                />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                dislikeTuit={dislikeTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const dislikesCounter =   root.findByProps({className: 'ttr-stats-dislikes'})
    // eslint-disable-next-line testing-library/await-async-query
    const likeTuitButton = root.findByProps(
        {className: 'ttr-dislike-tuit-click'})
    let dislikesText = dislikesCounter.children[0];

    expect(dislikesText).toBe('123');

    act( () => { likeTuitButton.props.onClick()})
    dislikesText = dislikesCounter.children[0];
    expect(dislikesText).toBe('124');
});
