
import './App.css';
import {useState,useEffect} from "react";
import Square from './components/Sqaure';
import {Patterns} from "./components/Patterns";
function App() {
  const [board,setBoard]=useState(["","","","","","","","",""]);
  const [player,setPlayer]=useState("O");
  const [result,setResult]=useState({winner:"none",state:"none"});

  useEffect(()=>{
  checkWin();
  checkIfTie();
  if(player=="X"){
    setPlayer("O");
  }else{
    setPlayer("X");
  }
  },[board])
  useEffect(()=>{
    if(result.state!=="none"){
  alert(`Game Finished, Winning Player: ${result.winner}`)
      restartGame();
    }
  },[result]);

  const checkIfTie=()=>{
    let filled=true;
    board.forEach((square)=>{
    if(square==""){
      filled=false;
    }
    });
    if(filled){
      setResult({winner:"No One",state:"Tie"});
    }
  };
  const restartGame=()=>{
    setBoard(["","","","","","","","",""]);
    setPlayer("O");
  };
  const checkWin=()=>{
    Patterns.forEach((currPattern)=>{
      const firstPlayer=board[currPattern[0]];
      if (firstPlayer=="") return;
      let foundWinningPatter=true;
      currPattern.forEach((idx)=>{
        if(board[idx]!=firstPlayer){
          foundWinningPatter=false;
        }
      });
      if(foundWinningPatter){
        setResult({winner:player,state:"Won!"})
      }
    });
  };





  const chooseSqaure=(square)=>{
      setBoard(
        board.map((val,idx)=>{
        if(idx==square && val==""){
          return player;
        }
        return val;
      })
      );
      
  };
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSqaure={()=>{chooseSqaure(0);}}/>
          <Square val={board[1]} chooseSqaure={()=>{chooseSqaure(1);}}/>
          <Square val={board[2]} chooseSqaure={()=>{chooseSqaure(2);}}/>
        </div>
        <div className="row">
        <Square val={board[3]} chooseSqaure={()=>{chooseSqaure(3);}}/>
          <Square val={board[4]} chooseSqaure={()=>{chooseSqaure(4);}}/>
          <Square val={board[5]} chooseSqaure={()=>{chooseSqaure(5);}}/>
        </div>
        <div className="row">
        <Square val={board[6]} chooseSqaure={()=>{chooseSqaure(6);}}/>
          <Square val={board[7]} chooseSqaure={()=>{chooseSqaure(7);}}/>
          <Square val={board[8]} chooseSqaure={()=>{chooseSqaure(8);}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
