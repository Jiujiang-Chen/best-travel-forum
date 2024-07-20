//编写你刚刚用到的Postcard组件
var Postcard = function (_React$Component) {
    _inherits(Postcard, _React$Component);
    _createClass(Postcard, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.onClick(this.props.name, this.props.value);
        }
    }]);
    return Postcard;
 }(React.Component);

module.exports = Postcard;