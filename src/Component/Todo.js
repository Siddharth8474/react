import React,{useState} from 'react'
// import Todoitem from './Todoitem';
// import Item from 'antd/es/list/Item';
// import { Row,Col } from 'antd'

const Todo = () => {

  const [state,setState]=useState([]);
  const [input,setInput]=useState("");
  const [Edit,setEdit]=useState(null)

const Handlevalue=(event)=>{
 setInput(event.target.value);
}

const addvalue=()=>{
  // setState(value=>{return[...value,input]});
  setState([...state,input]);
} 

/**
 * Deletes an element from the state array at the specified index.
 * @param {number} index - The index of the element to be deleted.
 */
const dlt = (index) => {
  let list = state.slice(0, index);
  let list1 = state.slice(index + 1);
  // let spd = [...list,...list1];
  setState(list, list1);
}

 const getedit=(index)=>{

  if (Edit === index) {
    // Save the edited value
    const updatedState = state.map((item, i) => (i === index ? input : item));
    setState(updatedState);
    setEdit(null);
    setInput("");
  } else {
    // Enter edit mode
    setEdit(index);
    setInput(state[index]);
  }
  };
  // SetEdit(index);
  // setInput(state[index]);
  //  console.log(index);
 


// console.log(input)

// console.log(state);
  return (
    <div>
      <div>
        {/* <Row>
      <Col span={8} offset={8}><input placeholder="Add data" onChange={Handlevalue} /></Col>
    </Row>

    <Row style={{marginTop:"20px"}}>
    <Col span={8} offset={8}><button type="primary" onClick={addvalue}>Todo</button></Col>
    </Row> */}

<input type="text" className="form-control" placeholder="Username" value={input} aria-label="Username" aria-describedby="addon-wrapping" onChange={Handlevalue} />
</div>
<button type="button" className="btn btn-primary" onClick={addvalue}>Add Todo</button>
     <ul>
      {
        state.map((ele,index)=>{
           return ( <li key={index} >{ele}<button type="button" className="btn btn-primary" onClick={()=>dlt(index)}>delete</button>
           <button type="button" className="btn btn-primary" onClick={()=>getedit(index)}>
           {Edit === index ? "Save" : "Edit"}
           </button>
           </li>
          )

        })
      }
     </ul>
     
   
    </div>

   
  )
}

export default Todo;