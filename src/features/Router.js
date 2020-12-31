import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './form/index';
import MainPage from './MainPage';
import Detail from './form/detail';

ListUser.propTypes = {
    
};

function ListUser() {
    const match = useRouteMatch(); 
    return (
    <Switch>
    <Route exact path={match.url} component={MainPage}/>
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:userid`} component={AddEditPage} />
      <Route path={`${match.url}/detail/:userid`} component={Detail} />
    </Switch>
    );
}

export default ListUser;
