import { INSIDE_BLOG, OUTSIDE_BLOG } from "../constants/myblogConstant";
const initialState = {
    insideBlog: false
}
export const myblogReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSIDE_BLOG:
            return {
                ...state,
                insideBlog: true
            }
        case OUTSIDE_BLOG:
            return {
                ...state,
                insideBlog: false
            }
        default:
            return {
                ...state,
                insideBlog: false
            }
    }
}
