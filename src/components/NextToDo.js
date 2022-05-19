import React from 'react';
import ToDoApp from './ToDoApp';

const DATA = [
    { id: "0", name: "Weekly Exercises", completed: true },
    { id: "1", name: "Student presentation", completed: true },
    { id: "2", name: "Prog Assignment", completed: false },
    { id: "3", name: "Shopping from lidl", completed: false },
    { id: "4", name: "Cook Salmon", completed: true },
    { id: "5", name: "Shopping from Prisma", completed: true },
    { id: "6", name: "Cook beef", completed: false },
    { id: "7", name: "Eat Salmon", completed: true },
    { id: "8", name: "Eat beef", completed: false }
  ];
  
function NextToDo() {
    return (
        <div>
            <h1>What is your next plan?</h1> 
            <ToDoApp tasks={DATA} />
        </div>
    )
}

export default NextToDo;
