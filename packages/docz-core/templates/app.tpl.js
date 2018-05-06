import React from 'react'
import { hot } from 'react-hot-loader'
import { Theme } from '<%- theme %>'
import { Docs } from './docs'

const _wrappers = [<% if (wrappers) {%><%- wrappers %><%}%>]

const recursiveWrappers = ([Wrapper, ...rest], props) => (
  <Wrapper {...props}>
    {rest.length ? recursiveWrappers(rest, props) : props.children}
  </Wrapper>
)

const Wrapper = props =>
  _wrappers.length ? recursiveWrappers(_wrappers, props) : props.children

const App = () => (
  <Wrapper>
    <Docs imports={[<% imports.forEach((imp, index) => { %>import('<%- imp %>'),<% }) %>]}>
      {(docs) => <Theme docs={docs} />}
    </Docs>
  </Wrapper>
)

export default hot(module)(App)