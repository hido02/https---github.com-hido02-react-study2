import React from 'react';
import ResponsiveCard from "component/common/ResponsiveCard";

const GroupCardV2 = (props) => {
    return (
        <div>
            <ResponsiveCard
            actionArea
            onClick={() => props.handleGroupCard(props.group)}
        ></ResponsiveCard>
            
        </div>
    );
};

export default GroupCardV2;