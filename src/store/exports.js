import { useSelector, useDispatch } from 'react-redux'

// action创建器
import { toggleSideBar, updateSideBar } from './slices/app'


const dispatch = useDispatch()

export const useSiderBar = () => {
    const { sidebar } = useSelector(state => state.app)

    const useToggleSideBar = () => {
        dispatch(toggleSideBar())
    }

    // 注意参数
    const useUpdateSideBar = (payload) => {
        dispatch(updateSideBar(payload))
    }

    return { sidebar, useToggleSideBar, useUpdateSideBar }
}
