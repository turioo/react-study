import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSong, removeSong } from './songSlice'

export function Song() {
    const count = useSelector((state) => state.addsong.value)
    const dispatch = useDispatch()

    const song = React.useRef()

    return (
        <div>
            <div>
                <input type="text" ref={song} />
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(addSong(song.current.value))}
                >
                    Add
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(removeSong())}
                >
                    remove
                </button>
                <div>
                    {count.map( el => <div>{el}</div>)}
                </div>
            </div>
        </div>
    )
}