import React, {Component} from "react";
import {Provider} from "react-redux";
import  {store,persistor} from "./store";
import "./App.css";
import SonetService from "./services/sonet-service";
import {SonetServiceProvider} from "./components/chat/sonet-service-context/sonet-service";
import Router from "./router";
import Spinner from "./components/common/spinner";
import { PersistGate } from 'redux-persist/lib/integration/react';

const sonetService = new SonetService();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Spinner/>} persistor={persistor}>
                    <SonetServiceProvider value={sonetService}>
                            <Router/>
                    </SonetServiceProvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
