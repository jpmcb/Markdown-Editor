'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'header' },
      React.createElement(
        'h1',
        null,
        'Markdown Editor & Reference'
      )
    );
  };

  return Header;
}(React.Component);

var Clear = function (_React$Component2) {
  _inherits(Clear, _React$Component2);

  function Clear() {
    _classCallCheck(this, Clear);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Clear.prototype.render = function render() {
    return React.createElement(
      'button',
      { id: 'clearButton', onClick: this.props.click },
      'CLEAR'
    );
  };

  return Clear;
}(React.Component);

var MarkdownText = function (_React$Component3) {
  _inherits(MarkdownText, _React$Component3);

  function MarkdownText(props) {
    _classCallCheck(this, MarkdownText);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.state = {};

    return _this3;
  }

  MarkdownText.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'markdown' },
      React.createElement('span', { dangerouslySetInnerHTML: this.props.input })
    );
  };

  return MarkdownText;
}(React.Component);

var CheatSheet = function (_React$Component4) {
  _inherits(CheatSheet, _React$Component4);

  function CheatSheet() {
    _classCallCheck(this, CheatSheet);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  CheatSheet.prototype.render = function render() {
    return React.createElement(
      'div',
      { id: 'cheatSheet' },
      React.createElement(
        'p',
        null,
        React.createElement(
          'b',
          null,
          'A basic Markdown Guide'
        ),
        React.createElement('br', null),
        '# Large Heading',
        React.createElement('br', null),
        '## Smaller heading',
        React.createElement('br', null),
        '### The more, the smaller it goes',
        React.createElement('br', null),
        '*asterisks* or _underscores_ will create italics',
        React.createElement('br', null),
        'two **asterisks** or __underscores__ will bold',
        React.createElement('br', null),
        '+ creates a bulleted list',
        React.createElement('br', null),
        '1. creates a numbered list',
        React.createElement('br', null),
        '[A link to google](https://www.google.com)',
        React.createElement('br', null),
        '![Image alt text](https://www.google.com/jpg)',
        React.createElement('br', null)
      )
    );
  };

  return CheatSheet;
}(React.Component);

var UserInput = function (_React$Component5) {
  _inherits(UserInput, _React$Component5);

  function UserInput(props) {
    _classCallCheck(this, UserInput);

    var _this5 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

    _this5.state = {
      value: '### Type your Markdown here\n by [jpmcb](https://github.com/jpmcb)'
    };

    _this5.updateValue = _this5.updateValue.bind(_this5);
    _this5.markedHTML = _this5.markedHTML.bind(_this5);
    _this5.clearTextArea = _this5.clearTextArea.bind(_this5);
    return _this5;
  }

  UserInput.prototype.updateValue = function updateValue(event) {
    this.setState({
      value: event.target.value,
      __html: marked(event.target.value)
    });
    console.log(this.state.value);
  };

  UserInput.prototype.markedHTML = function markedHTML() {
    return { __html: marked(this.state.value) };
  };

  UserInput.prototype.clearTextArea = function clearTextArea() {
    this.setState({ value: '' });
  };

  UserInput.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(Clear, { click: this.clearTextArea }),
      React.createElement('textarea', { id: 'editor',
        rows: '15',
        type: 'text',
        col: '100',
        ref: 'textField',
        value: this.state.value,
        onChange: this.updateValue }),
      React.createElement(MarkdownText, { input: this.markedHTML() }),
      React.createElement(CheatSheet, null)
    );
  };

  return UserInput;
}(React.Component);

ReactDOM.render(React.createElement(UserInput, null), document.getElementById('root'));