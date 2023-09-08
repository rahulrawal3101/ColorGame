export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_TAB":
            return { ...state, logInDashBoardScreen: 0 };

        case "REGISTER_TAB":
            return { ...state, logInDashBoardScreen: 1 };

        case 'Home':
            return { ...state, value: 'Home' };

        case 'Referral':
            return { ...state, value: 'Referral' };

        case 'promotion':
            return { ...state, value: 'promotion' };

        case 'Wallet':
            return { ...state, value: 'Wallet' };

        case 'Account':
            return { ...state, value: 'Account' }

        case 'REGISTER_API_STARTLOADING':
            return { ...state, isRegisterApiLoading: true }

        case 'REGISTER_API_STOPLOADING':
            return { ...state, isRegisterApiLoading: false }


        case 'VERIFY_API_STARTLOADING':
            return { ...state, isVerifyApiLoading: true }

        case 'VERIFY_API_STOPLOADING':
            return { ...state, isVerifyApiLoading: false }

        case "GET_LOCAL_TOKEN":
            return { ...state, isUserLoggedIn: action.payload }

        case 'LOG_OUT':
            return { ...state, isUserLoggedIn: false }

        case 'QUESTION':
            return { ...state, ques: action.payload }

        case 'SECONE':
            return { ...state, seconequestion: action.payload }

        case 'SECTWO':
            return { ...state, sectwoquestion: action.payload }

        case 'TWOMINQUIZID':
            return { ...state, twominquizroomid: action.payload }

        case 'TWOMINRESULT':
            return { ...state, twominquizresult: action.payload }

         case 'FINALRESULTANSWERS':
            return {...state,finalresultshow:action.payload}   

        default:
            return { ...state };
    }
}