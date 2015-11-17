window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
React = require('react/addons')
ReactDOM = require('react-dom')
reactRouter = require('react-router')
Header = require('./header')
CodeEditor = require('./CodeEditor')

{Router, Route, IndexRoute} = reactRouter

Home = React.createClass
  render: ->
    <div className="column">
      <div classNakme="ui segment">
        <h1 className="ui header">
          <div className="sub header">
            Moi
            <CodeEditor />
          </div>
        </h1>
      </div>
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <h4 className="ui black header">Creative teaching with MuSiika </h4>
        Musiika is a tool that combines music education with development of
        pupil's eskills.
      
      </div>
    </div>

Main = React.createClass
  render: ->
    <div>
      <Header/>
      <div className="ui page grid">
        { @props.children }
      </div>
    </div>

routes =
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>

$ ->
  ReactDOM.render(<Router>{routes}</Router>, document.body)
