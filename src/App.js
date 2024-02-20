import React, { useRef, useState } from "react";
import "./App.css";


let data =["","","","","","","","",""];
const App =()=>{
  let [count , setcount]= useState(0);
  const [lock ,setlock]=useState(false);
  const inputref = useRef();
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);
  let theboxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


  const Addhandler = (e,num) =>{
    if(lock === true){
      return 0;

    }
    else{
      if(count%2 === 0){
        e.target.innerHTML="❌";
        data[num]="❌";
        setcount(++count);

      }else{
        e.target.innerHTML="🅾️";
        data[num]="🅾️";
        setcount(++count);

      }
       
    }
    const chickwon =() =>{
      if(data[0]=== data[1] && data[1]===data[2] && data[2]!==""){
        won(data[0]);

      }
      if(data[3]=== data[4] && data[4]===data[5] && data[5]!==""){
        won(data[3]);

      }
      if(data[6]=== data[7] && data[7]===data[8] && data[8]!==""){
        won(data[6]);

      }
      if(data[0]=== data[3] && data[3]===data[6] && data[6]!==""){
        won(data[0]);

      }
      if(data[1]=== data[4] && data[4]===data[7] && data[7]!==""){
        won(data[1]);

      }
      if(data[2]=== data[5] && data[5]===data[8] && data[8]!==""){
        won(data[2]);

      }
      if(data[0]=== data[4] && data[4]===data[8] && data[8]!==""){
        won(data[0]);

      }
      if(data[2]=== data[4] && data[4]===data[6] && data[6]!==""){
        won(data[2]);

      }
    }
    chickwon();

  }
  const won = (winner)=>{
    setlock(true);
    inputref.current.innerHTML =`Congratulation Winner:${winner}`;
  }
  const deleteitem =()=>{
    inputref.current.innerHTML=`Tic Tac Toe Game in <span>React</span>`;
    data =["","","","","","","","",""];

    theboxes.map((el)=>{
      return(
        el.current.innerHTML="" 

         )
    })
    setlock(false);
 
   
  }

  return (
    <div className="container">
     
        <h1 className="title" ref={inputref}>Tic Tac Toe Game in <span>React</span></h1>
        <div className="squares">

          <div>
            <div className="boxes" ref={box1} onClick={(e)=>Addhandler(e,0)}></div>
            <div  className="boxes" ref={box2} onClick={(e)=>Addhandler(e,1)}></div>
            <div  className="boxes" ref={box3} onClick={(e)=>Addhandler(e,2)}></div>
          </div>
          <div>
            <div className="boxes" ref={box4} onClick={(e)=>Addhandler(e,3)}></div>
            <div  className="boxes" ref={box5} onClick={(e)=>Addhandler(e,4)}></div>
            <div  className="boxes" ref={box6} onClick={(e)=>Addhandler(e,5)}></div>
          </div>
          <div>
            <div className="boxes" ref={box7} onClick={(e)=>Addhandler(e,6)}></div>
            <div  className="boxes" ref={box8} onClick={(e)=>Addhandler(e,7)}></div>
            <div  className="boxes" ref={box9} onClick={(e)=>Addhandler(e,8)}></div>
          </div>

        </div>
        <button className="reset" onClick={()=>deleteitem()}>Reset</button>




 




    </div>
  )

}
export default App;










































// import React, { useRef, useState } from "react";
// import "./App.css";

// let dataitems = ["","","","","","","","",""];

// const App = () =>{
  
//   let [count, setcount]=useState(0);
//   const [lock, setlock]=useState(false);
//   const inputref= useRef();
//   let box1 = useRef(null);
//   let box2 = useRef(null);
//   let box3 =useRef(null);
//   let box4 = useRef(null);
//   let box5 = useRef(null);
//   let box6 = useRef(null);
//   let box7 =useRef(null);
//   let box8 = useRef(null);
//   let box9 = useRef(null);
//  let thebox=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

//   const clickhandler = (e,num)=>{
//     if(lock){
//       return 0;
//     }
//     ////
//     else{
//       if(count%2 === 0){
//         e.target.innerHTML = "x";
//         dataitems[num]="x";
//         setcount(++count);
//       }
//       else{
//         e.target.innerHTML = "o";
//         dataitems[num]="o";
//         setcount(++count);

//       }
//     }
//     ////
//     if(dataitems[0] === dataitems[1] && dataitems[1]===dataitems[2] && dataitems[2]!==""){
// won(dataitems[0]);
//     }else if(dataitems[3] === dataitems[4] && dataitems[4]===dataitems[5] && dataitems[4]!==""){
//       won(dataitems[4]);
//     }
//     else if(dataitems[6] === dataitems[7] && dataitems[7]===dataitems[8] && dataitems[8]!==""){
//       won(dataitems[6]);
//     }
//     else if(dataitems[0] === dataitems[3] && dataitems[3]===dataitems[6] && dataitems[6]!==""){
//       won(dataitems[0]);
//     }
//     else if(dataitems[1] === dataitems[4] && dataitems[4]===dataitems[7] && dataitems[7]!==""){
//       won(dataitems[4]);
//     }
//     else if(dataitems[2] === dataitems[5] && dataitems[5]===dataitems[8] && dataitems[8]!==""){
//       won(dataitems[5]);
//     }
//     else if(dataitems[2] === dataitems[4] && dataitems[4]===dataitems[6] && dataitems[6]!==""){
//       won(dataitems[4]);
//     }
//     else if(dataitems[0] === dataitems[4] && dataitems[4]===dataitems[8] && dataitems[8]!==""){
//       won(dataitems[8]);
//     }
    

//     }
//     ///


//     const won =(winner)=>{
//       setlock(true);
//       inputref.current.innerHTML =`Congratulation winner ${winner} `

//     }

//     const resethandler = ()=>{
//       setlock(false);
     
//        dataitems = ["","","","","","","","",""];
//       thebox.map((el) =>{
//         return(
//           el.current.innerHTML = ""

//         )
         
//       })
      
//      }
    


    
//   return (
//     <div className="container">
//      <h2 className="title" ref={inputref}>Tic Tac Toe Game in <span>React</span> </h2>
//       <div className="squares">
      
//         <div>
//         <div className="row1" ref={box1} onClick={(e)=>clickhandler(e,0)}></div>
//         <div className="row1" ref={box2}  onClick={(e)=>clickhandler(e,1)}></div>
//         <div className="row1" ref={box3} onClick={(e)=>clickhandler(e,2)}></div>

//         </div>
//        <div>
//        <div className="row1" ref={box4} onClick={(e)=>clickhandler(e,3)}></div>
//         <div className="row1" ref={box5} onClick={(e)=>clickhandler(e,4)}></div>
//         <div className="row1" ref={box6} onClick={(e)=>clickhandler(e,5)}></div>

//        </div>
//        <div>
//        <div className="row1" ref={box7} onClick={(e)=>clickhandler(e,6)}></div>
//         <div className="row1" ref={box8} onClick={(e)=>clickhandler(e,7)}></div>
//         <div className="row1" ref={box9} onClick={(e)=>clickhandler(e,8)}></div>

//        </div>
       

       
//       </div>
//       <button onClick={()=>resethandler()}>Reset</button>





//     </div>
//   )
// }
  



// export default App;




























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
