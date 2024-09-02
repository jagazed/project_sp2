import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a,b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name)
                } else {
                    return b.name.localeCompare(a.name)
                }
            }) // need to fix
        }
        case 'check': {
            return state.filter((u:UserType) => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
