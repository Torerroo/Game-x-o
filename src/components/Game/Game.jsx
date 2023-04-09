/* eslint-disable consistent-return */
import { useState } from 'react'
import { calculateWinner } from '../../helper'
import { Board } from '../Board/Board'
import './Game.css'

export function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [move, setMove] = useState(0)
  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return null
    boardCopy[index] = xIsNext ? 'X' : '0'
    setMove((prev) => prev + 1)
    setBoard(boardCopy)
    setXIsNext((prev) => !prev)
  }
  const gameInfo = () => {
    if (winner) {
      return `Победитель ${winner}`
    }
    if (move === 9) {
      return 'Ничья'
    }
    return `Сейчас ходит ${(xIsNext ? 'X' : '0')}`
  }

  return (
    <div className="wrapper">
      <button
        type="button"
        className="start__btn"
        onClick={() => {
          setXIsNext(true)
          setMove(0)
          setBoard(Array(9).fill(null))
        }}
      >
        Очистить поле
      </button>
      <Board squares={board} handleClick={handleClick} />
      <p className="game__info">
        {gameInfo()}
      </p>
    </div>
  )
}
