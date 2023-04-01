import React from 'react';
import TextInput from '../TextInput';
import { Button } from 'react-bootstrap';
import '../css/AlignCenter.css';

const AlignCenterView = () => {
    return (
        <>
<nav class="navbar fixed-bottom">
    <div class="card-body d-flex justify-content-center">
<div class="card">
  <div class="card-body">This is some text within a card body.</div>
</div>
</div>

</nav>
</>
    );
};

export default AlignCenterView;