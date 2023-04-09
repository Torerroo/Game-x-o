/* eslint-disable react/no-array-index-key */
import { Square } from '../Square/Square'
import './Board.css'

export function Board({ squares, handleClick }) {
  return (
    <div className="board">
      {
        squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />))
      }
    </div>
  )
}
