import React from 'react';
import '../App.css';
import Header from '../components/Header';
import MainView from '../views/MainView';

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