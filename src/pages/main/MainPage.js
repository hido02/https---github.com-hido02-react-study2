import React from 'react';
import '../../../src/App.css';
import Header from '../../components/Header';
import MainView from '../../views/MainView';
// import { Outlet } from 'react-router-dom';

const App = () => {
      return (
        <>
        <Header/>
        <div className="container">
            <div className="row my-4">
            <MainView/>
            </div>
            <footer class="pt-5 my-5 text-muted border-top">
                Created by Hido &middot; &copy; 2023
            </footer>
        </div>
        </>
      );
}

export default App;