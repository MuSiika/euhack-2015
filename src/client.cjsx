window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
React = require('react/addons')
ReactDOM = require('react-dom')
reactRouter = require('react-router')

Header = require('./header')

CodeEditor = require('./CodeEditor')
Master = require('./Master')

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

Teacher = React.createClass
  render: ->
    <div className="column">
      <div classNakme="ui segment">
        <h1 className="ui header">
          <div className="sub header">
            <Master />
          </div>
        </h1>
      </div>
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <h4 className="ui black header">This is the about page.</h4>
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
    <Route path="master" component={Teacher}/>
  </Route>

$ ->
  ReactDOM.render(<Router>{routes}</Router>, document.body)
