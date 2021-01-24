import {useEffect,useState,useRef} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"
import './App.css';

function App() {
  
  const [fullScreen,setFullScreen]=useState(false);
  const ref=useRef({});
  function openFullScreen(e){
       
    setFullScreen(true);
    const screen=document.getElementById("fullScreen1")
  
     screen.src=e.target.src

  }

  

  return (
    <div className="App">
      {<div className={fullScreen?"fullScreen":"fullScreenOff"}> 
      <span onClick={()=>setFullScreen(false)} className={"cross"}> <AiOutlineCloseCircle/></span> 
         <img  ref={ref} id={"fullScreen1"} src="" />
        </div>}
      <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://www.w3schools.com/w3css/img_lights.jpg"}></img>
       </div> 
       <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLecBCpMMLXmjlAvzkB6RFl5LNF6mN4kHoA&usqp=CAU"}></img>
       </div> 
       <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu0Ma2lCstL0tCe1E5EFsAwcV5WKB3kNeTA&usqp=CAU"}></img>
       </div> 
       <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270"}></img>
       </div> 
       <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="}></img>
       </div> 
       <div className={"option"}  onClick={(e)=>openFullScreen(e)} >
        <img src={"https://2.bp.blogspot.com/-B2AIu6n6kTE/XJkQCZVyogI/AAAAAAAAC74/hQbH-HbF0KsLBjAgCdzFguG6aK56KxmGACLcBGAs/s1600/nature%2Bwallpaper%2B4.jpg"}></img>
       </div> 

    </div>
  );
}

export default App;
