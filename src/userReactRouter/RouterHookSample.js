import useReactRouter from 'use-react-router';

import React from 'react';

const RouterHookSample = () => {
    const { history, location, match } = useReactRouter;
    console.log({ history, location, match });
    return null;
};

export default RouterHookSample;