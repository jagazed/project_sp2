const initState: InitialStateType = {
    themeId: 1
}

export type InitialStateType = {
    themeId: number

}

export const themeReducer = (state: InitialStateType = initState, action: changeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const // fix any

type changeThemeIdType = ReturnType<typeof changeThemeId>