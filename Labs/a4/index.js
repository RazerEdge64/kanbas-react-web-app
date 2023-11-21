import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <Add a={1} b={2}/>
            <br/>

            <ClickEvent/>
            <br/>

            <PassingDataOnEvent/>
            <br/>

            <PassingFunctions theFunction={sayHello}/>
            <br/>

            <EventObject/>
            <br/>

            <Counter/>
            <br/>

            <BooleanStateVariables/>
            <br/>

            <StringStateVariables/>
            <br/>

            <DateStateVariable/>
            <br/>

            <ObjectStateVariable/>
            <br/>

            <ArrayStateVariable/>
            <br/>

            <ParentStateComponent/>
            <br/>

            <ReduxExamples/>
            <br/>
            <TodoList/>

        </div>
    );
}

export default Assignment4;