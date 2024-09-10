

["hello" , "world" , "how" , "are" , "you"]  


{todos.map ((todo , index) => (<Render key={index} todos={todo} />))} 



function Render ({todos}) {


    return (
        <>
        
        <h1> {todos.title}</h1>
       
        
        
        </>
    );
}

{todos.map((todo,index)=>(<><h1> {todo.title}</h1> <h3> {todo.description}</h3></>))}  