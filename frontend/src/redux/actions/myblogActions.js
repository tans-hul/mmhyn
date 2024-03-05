import { INSIDE_BLOG, OUTSIDE_BLOG } from "../constants/myblogConstant"



export const insideBlog = () => (dispatch)=>{
    dispatch({
        type: INSIDE_BLOG
    })
}
export const outsideBlog = ()=>(dispatch)=>{
    dispatch({
        type: OUTSIDE_BLOG
    });
}

// export const get = ()=>(dispatch,getState)=>{
//     getState().blog
// }  if i want to use in action
