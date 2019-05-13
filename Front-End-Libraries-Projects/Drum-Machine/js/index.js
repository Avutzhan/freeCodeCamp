var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var data = [
{ id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
{ id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
{ id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
{ id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
{ id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
{ id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
{ id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
{ id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' }];var

DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);function DrumPad() {var _ref;var _temp, _this, _ret;_classCallCheck(this, DrumPad);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call.apply(_ref, [this].concat(args))), _this), _this.








    handleKeyDown = function (e) {
      if (e.keyCode === _this.props.letter.charCodeAt()) {
        _this.audio.play();
        _this.audio.currentTime = 0;
        _this.props.handleDisplay(_this.props.id);
      }
    }, _this.

    handleClick = function () {
      _this.audio.play();
      _this.audio.currentTime = 0;
      _this.props.handleDisplay(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(DrumPad, [{ key: 'componentDidMount', value: function componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);window.focus();} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);} }, { key: 'render', value: function render()

    {var _this2 = this;
      return (
        React.createElement('div', {
            className: 'drum-pad',
            id: this.props.id,
            onClick: this.handleClick },

          React.createElement('h1', null, this.props.letter),
          React.createElement('audio', {
            ref: function ref(_ref2) {return _this2.audio = _ref2;},
            className: 'clip',
            src: this.props.src,
            id: this.props.letter })));



    } }]);return DrumPad;}(React.Component);var


App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this3.





    handleDisplay = function (display) {return _this3.setState({ display: display });};_this3.state = { display: 'Press any key' };return _this3;}_createClass(App, [{ key: 'render', value: function render()

    {var _this4 = this;
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', { id: 'display' }, this.state.display),
          React.createElement('div', { id: 'drum-pads' },
            data.map(function (i) {return (
                React.createElement(DrumPad, {
                  id: i.id,
                  letter: i.letter,
                  src: i.src,
                  handleDisplay: _this4.handleDisplay }));}))));





    } }]);return App;}(React.Component);



ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));