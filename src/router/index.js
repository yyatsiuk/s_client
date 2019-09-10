import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "../components/about/About";
import Register from "../components/register/RegisterContainer";
import Login from "../components/login/LoginContainer";
import Logout from "../components/logout";
import EmailConfirmed from "../components/email-confirmation-success";
import EmailConfirmedError from "../components/email-confirmation-error";
import EmailConfirnation from "../components/email-confirmation";
import PasswordRestore from "../components/password-restore";
import PasswordRestoreSuccess from "../components/password-restore-success";
import PasswordRestoreError from "../components/password-restore-error";
import PasswordRestoreHandler from "../components/password-reset-hangler";
import GroupList from "../components/gropsList";
import Profile from "../components/Profile";
import Conversations from "../components/chat/pages/conversations";
import Chat from "../components/chat/pages/chat";
import Home from "../components/home/homeContainer";
import Page404 from "../components/page-404";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/auth" component={Register} />
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/logout" component={Logout}/>
                    <Route
                        exact
                        path="/auth/email/confirmed"
                        component={EmailConfirmed}
                    />
                    <Route
                        exact
                        path="/auth/email/conformation-error"
                        component={EmailConfirmedError}
                    />
                    <Route
                        exact
                        path="/auth/email/confirmed/:token"
                        component={EmailConfirnation}
                    />
                    <Route
                        exact
                        path="/auth/password-restore"
                        component={PasswordRestore}
                    />
                    <Route
                        exact
                        path="/auth/password-restore/success"
                        component={PasswordRestoreSuccess}
                    />
                    <Route exact
                           path="/auth/password-restore/error"
                           component={PasswordRestoreError}
                    />
                    <Route
                        exact
                        path="/auth/password-restore/:token"
                        component={PasswordRestoreHandler}
                    />
                    <Route exact path="/group-list" component={GroupList} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/conversations" component={Conversations} exact />
                    <Route
                        path="/conversations/:id"
                        render={({ match }) => {
                            const { id } = match.params;
                            return <Chat id={id} />;
                        }}
                    />
                    <Route exact path="/home" component={Home} />
                    <Redirect exact from="/" to="/about" />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;