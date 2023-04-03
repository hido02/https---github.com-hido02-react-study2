import React from 'react';
import groupMember from './groupMember.jpg'; 

const ProfileCard = () => {

    const imgStyle = {
        width: '70px',
    }
    
    return (
        <div>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card">

          <div class="card-body p-4 text-black">

            <div class="d-flex align-items-center mb-4">
              <div class="flex-shrink-0">
                  <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

              </div>
            </div>
            <hr/>
            <p class="my-4 pb-1">52 comments</p>
            <button type="button" class="btn btn-success btn-rounded btn-block btn-lg"><i
                class="far fa-clock me-2"></i>Book now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default ProfileCard;