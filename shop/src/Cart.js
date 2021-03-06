import {React , memo , useEffect} from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((a, i) => {
          return (
            <tr key={i}>
              <td> {a.id} </td>
              <td>{a.name}</td>
              <td>{a.qty}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량증가", 데이터: a.id });
                  }}
                >
                  {" "}
                  +{" "}
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: "수량감소", 데이터: a.id });
                  }}
                >
                  {" "}
                  -{" "}
                </button>{" "}
              </td>
            </tr>
          );
        })}
      </Table>
      {props.alert열렸니 ? (
        <div className="my-alert2">
          <p> 지금 구매하시면 20% 할인 </p>
          <button
            onClick={() => {
              props.dispatch({ type: "alert닫을래" });
            }}
          >
            {" "}
            닫기{" "}
          </button>
        </div>
      ) : null}
      <Parent 이름="존박" 나이="20"/>
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={ props.존박 } />
      <Child2 나이={ props.20 }/>
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log("render1");
  });
  return <div>1111</div>;
}

let Child2  = memo(function() {
  useEffect( () => {
    console.log("render2");
  });
})
function state2props(state) {
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

export default connect(state2props)(Cart);
