import React from "react";
import { createUseStyles } from "react-jss";
import Layout from "./page/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerSidebar from "./views/customer/CustomerSidebar";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import Create from './views/create/index';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
});

const useStyles = createUseStyles({
  app: {
    height: "100%"
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className={classes.app}>
        <Switch>
          <Route exact path="/" render={() => <Layout />} />
          <Route path="/customer" render={() => <Layout sideBar={<CustomerSidebar />} />} />
          <Route path="/create" render={() => <Layout main={<Create />} />} />
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
};

export default App;
