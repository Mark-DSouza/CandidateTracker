import techonologies from './technologyData';

function initialState(scaffold) {
    const initState = {...scaffold};
    
    techonologies.forEach((technology) => {
        initState[`knows${technology}`] = false;
    })
    console.log(initState);
    return initState;
}

export default initialState;