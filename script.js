//I wrote this app in codepen and exported it to upload to github
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
//javascript calculator
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue1: 0 };

    this.screenUpdate = this.screenUpdate.bind(this);
  }
  screenUpdate(a) {
    let r = '';
    let arr = [];
    let op = [];
    let temp = this.state.screenValue1.toString();
    if (a == "=") {
      console.log(temp);
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] != '/' && temp[j] != 'x' && temp[j] != '-' && temp[j] != '+') {
          r = `${r}${temp[j]}`;
        } else
        {
          op.push(temp[j]);
          arr.push(r);
          r = '';
        }
      }
      console.log(arr);
      arr.push(r);
      if (arr[0] === '' && op[0] == '-') {
        arr[1] = `${op[0]}${arr[1]}`;
        op.shift();
        arr.shift();
      }
      if (arr[0] === '') {
        arr[0] = 0;
      }
      console.log(arr);
      r = '';
      for (let x1 = 0; x1 < arr.length; x1++) {
        arr[x1] = parseFloat(arr[x1]);
      }
      console.log(arr);
      console.log(op);
      for (let x3 = 0; x3 < arr.length; x3++) {
        if (isNaN(arr[x3])) {
          arr[x3 + 1] = -arr[x3 + 1];
          arr.splice(x3, 1);
          op.splice(x3, 1);
        }
      }
      if (op.length == 0) {
        return;
      }
      for (let b = 0; b < op.length; b++) {
        if (op[b] == '/') {r = arr[0] / arr[1];arr.shift();arr[0] = r;}
        if (op[b] == 'x') {r = arr[0] * arr[1];arr.shift();arr[0] = r;}
        if (op[b] == '-') {r = arr[0] - arr[1];arr.shift();arr[0] = r;}
        if (op[b] == '+') {r = arr[0] + arr[1];arr.shift();arr[0] = r;}
        console.log(r);
      }
      console.log(r);
      if (this.state.screenValue1[0] == 0) {
        console.log('doin something funny');
      }
      r = r.toString();
      while (r.length > 15) {
        r = r.slice(0, -1);
      }
      this.setState({
        screenValue1: r });

      return;
    }
    if (a == 'clear') {
      this.setState({
        screenValue1: 0 });

      return;
    }
    if (this.state.screenValue1.length === 15 || this.state.screenValue1 == 'Digit Limit Met!') {
      this.setState(state => ({
        screenValue1: 'Digit Limit Met!' }));

      return;
    }
    if (a == '/' || a == 'x' || a == '-' || a == '+') {
      let x = this.state.screenValue1[this.state.screenValue1.length - 1];
      if (a == '-' && x == '/' || a == '-' && x == 'x' || a == '-' && x == '+') {
        x = this.state.screenValue1;
        this.setState({
          screenValue1: `${x}${a}` });

        return;
      }
      if (x == '/' || x == 'x' || x == '-' || x == '+') {
        x = this.state.screenValue1;
        while (x[x.length - 1] == '/' || x[x.length - 1] == 'x' || x[x.length - 1] == '-' || x[x.length - 1] == '+') {
          x = x.slice(0, -1);
        }
        this.setState({
          screenValue1: x });

      }
    }
    if (a == 0 && this.state.screenValue1 === 0) {
      this.setState({
        screenValue1: 0 });

    } else
    {
      if (this.state.screenValue1 === 0 && a != '.') {
        this.setState({
          screenValue1: a });

        return;
      }
      if (a == '.' && temp.includes(".") == false) {
        this.setState(state => ({
          screenValue1: `${state.screenValue1}${a}` }));

        return;
      } else
      if (a == '.') {
        let index = temp.length;
        for (let h = index; h > 0; h--) {
          switch (temp[h]) {
            case '.':return;
            case '/':this.setState(state => ({
                screenValue1: `${state.screenValue1}${a}` }));

              return;
            case 'x':this.setState(state => ({
                screenValue1: `${state.screenValue1}${a}` }));

              return;
            case '-':this.setState(state => ({
                screenValue1: `${state.screenValue1}${a}` }));

              return;
            case '+':this.setState(state => ({
                screenValue1: `${state.screenValue1}${a}` }));

              return;}

        }
        return;
      }
      if (a != '.') {
        this.setState(state => ({
          screenValue1: `${state.screenValue1}${a}` }));

      }
    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "calc-background" }, /*#__PURE__*/

      React.createElement("div", { id: "calc-screen" }, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.screenValue1)), /*#__PURE__*/

      React.createElement("div", { id: "calc-buttons" }, /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('clear'), className: "btn lg-buttons grey-buttons", id: "clear" }, /*#__PURE__*/React.createElement("p", null, "AC")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('/'), className: "btn sm-buttons grey-buttons margin-left", id: "divide" }, /*#__PURE__*/React.createElement("p", null, "/")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('x'), className: "btn sm-buttons orange-buttons margin-left", id: "multiply" }, /*#__PURE__*/React.createElement("p", null, "x")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(7), className: "btn sm-buttons grey-buttons margin-top", id: "seven" }, /*#__PURE__*/React.createElement("p", null, "7")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(8), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "eight" }, /*#__PURE__*/React.createElement("p", null, "8")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(9), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "nine" }, /*#__PURE__*/React.createElement("p", null, "9")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('-'), className: "btn sm-buttons orange-buttons margin-left margin-top", id: "subtract" }, /*#__PURE__*/React.createElement("p", null, "-")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(4), className: "btn sm-buttons grey-buttons margin-top", id: "four" }, /*#__PURE__*/React.createElement("p", null, "4")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(5), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "five" }, /*#__PURE__*/React.createElement("p", null, "5")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(6), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "six" }, /*#__PURE__*/React.createElement("p", null, "6")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('+'), className: "btn sm-buttons orange-buttons margin-left margin-top", id: "add" }, /*#__PURE__*/React.createElement("p", null, "+")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(1), className: "btn sm-buttons grey-buttons margin-top", id: "one" }, /*#__PURE__*/React.createElement("p", null, "1")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(2), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "two" }, /*#__PURE__*/React.createElement("p", null, "2")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(3), className: "btn sm-buttons grey-buttons margin-left margin-top", id: "three" }, /*#__PURE__*/React.createElement("p", null, "3")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('='), className: "btn lg-button-vert orange-buttons margin-left margin-top", id: "equals" }, /*#__PURE__*/React.createElement("p", null, "=")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate(0), className: "btn lg-buttons grey-buttons", id: "zero" }, /*#__PURE__*/React.createElement("p", null, "0")), /*#__PURE__*/
      React.createElement("div", { onClick: () => this.screenUpdate('.'), className: "btn sm-buttons grey-buttons margin-left", id: "decimal" }, /*#__PURE__*/React.createElement("p", null, "."))))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.querySelector('#calculator'));
