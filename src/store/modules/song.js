import fetch from '@/utils/fetch'

const songModule = {
    namespaced: true,
    state: {
        songMsg: 1001,
        songList: [] //音乐列表
    },
    getters: {},
    // 更新state
    mutations: {
        updateSongList(state, payload) {
            state.songList = payload
        }
    },
    actions: {
        // 封装一个获取QQ音乐列表的方法
        getQQMusic(store, payload) {
            // 使用自己封装好的axios请求
            fetch({
                // 请求地址
                url: '/soso/fcgi-bin/client_search_cp',
                // 请求方式
                methods: 'GET',
                // 请求参数
                params: payload
            }).then(res => {
                // 数据获取成功就把数据使用store.commit方法在mutations中修改数据
                store.commit('updateSongList', res.song.list)
            })
        }
    }
}

export default songModule