export default {
    actions:{
    },
    mutations:{
        updateSnakeColor(state,color){
            state.snakeColor = color.color;
        },
        updateFoodColor(state,color){
            state.foodColor = color.color;
        },
        updateFieldColor(state,color){
            state.fieldColor = color.color;
        }
    },
    state:{
        snakeColor: "#ff7979",
        foodColor: "#f6b93b",
        fieldColor: "#ffffff",
    },
    getters:{
        snake(state){
            return state.snakeColor
        },
        food(state){
            return state.foodColor
        },
        field(state){
            return state.fieldColor
        }
    }

}