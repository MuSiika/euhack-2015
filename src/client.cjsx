window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
React = require('react/addons')
ReactDOM = require('react-dom')
reactRouter = require('react-router')
Header = require('./header')
CodeEditor = require('./CodeEditor')
Documentation = require('./Documentation')
Master = require('./Master')
AboutPage = require('./About')

{Router, Route, IndexRoute} = reactRouter

Home = React.createClass
  render: ->
    <div className="ui vertically horizontally padded divided grid">
      <div className="two column row">
        <div className="column">
          <CodeEditor />
        </div>
        <div className="column">
          <Documentation />
        </div>
      </div>
    </div>

Teacher = React.createClass
  render: ->
    <div className="column">
      <Master />
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <AboutPage />
      </div>
    </div>

Main = React.createClass
  render: ->
    <div>
      <Header/>
      <div id="mainpage" className="ui page grid">
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
