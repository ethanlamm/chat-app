import { useSelector, useDispatch } from 'react-redux'

// action创建器
import { toggleSideBar, updateSideBar } from './slices/app'

// useDispatch 只能在函数中使用

export const useSideBar = () => {
    const dispatch = useDispatch()
    const { sidebar } = useSelector(state => state.app)

    const useToggleSideBar = () => {
        dispatch(updateSideBar({ type: 'CONTACT' }))
        dispatch(toggleSideBar())
    }

    // 注意参数
    const useUpdateSideBar = (payload) => {
        return () => dispatch(updateSideBar(payload))
    }

    return { sidebar, useToggleSideBar, useUpdateSideBar }
}
