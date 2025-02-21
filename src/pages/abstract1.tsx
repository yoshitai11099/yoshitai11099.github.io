import React from 'react';
import MainLayout from './mainLayout';

const Abstract1: React.FC = () => {

    return (
        <MainLayout>
            <div style={{ marginTop: "20px", color: "white" }}>
                <div className="mx-auto w-75 textColor">
                  <p className='text-center fw-bold'>Avatar Control Based on the Amount of Position Change of the Hand under Semi-Restraint</p>
                </div>
                <div className="mx-auto w-75">
                  <h6 className="text-decoration-underline text-info fw-bold" style={{marginTop: "15px"}}>Abstract</h6>
                  <h6 className='small'>&nbsp;&nbsp;In this research, we develop an encounter-type haptic display for the entire hand with multiple fingers. As an approach to realize such a display, an avatar hand motion technique has been proposed with minimal hand motion range. However, existing force input-based approaches have difficulty in presenting natural force-haptic sensations. Therefore, the authors propose an approach to control the avatar finger using the amount of position change of the hand under semi-constrained state as an input. Experimental results show that the proposed approach provides the same operability and self-projection as existing force-input-based approaches.</h6>
                </div>
                <div className="mx-auto w-75">
                  <h6 className="text-decoration-underline text-info fw-bold" style={{marginTop: "15px"}}>Keywords</h6>
                  <h6 className='small'>Semi-Restraint，Posture position，Avatar，Virtual Reality，Haptic Display，Encounter-Type</h6>
                </div>
            </div>
        </MainLayout>
    );
};

export default Abstract1;
