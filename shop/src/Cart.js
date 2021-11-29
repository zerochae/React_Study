import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart() {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>
    </div>
  );
}

function state2props(){
  return
    {state : state}

}

export default connect(state2props)(Cart);
