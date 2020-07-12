import React, { createContext, useState } from 'react';

var initialGlobalStateData = {
    transactions: []  //Empty Initial Array Value
}
//Create Context
export const GlobalDataContext = createContext(initialGlobalStateData, () => {});
