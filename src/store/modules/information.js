export default {
    actions:{
    },
    mutations:{
        setInstallPrompt(state, data){
           state.installPrompt = data;
        },
        updateNickname(state, nickname){
             state.nickname = nickname
        },
        updateScore(state){
            state.score +=10;
        },
        clearScore(state){
            state.score = 0;
        }
    },
    state:{
        nickname: "",
        score : 0,
        installPrompt: null
    },
    getters:{
        nickname(state){
            return state.nickname
        },
        score(state){
            return state.score
        },
        installPrompt(state){
            return state.installPrompt
        }
    }

}