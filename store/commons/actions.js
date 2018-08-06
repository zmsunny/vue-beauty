import axios from 'axios'
import md5 from 'js-md5'
import { CHANGE_USER_STATE} from './const'
const actions = {
    action_login (context, {code, phone, success, fail}){
        axios.post('/mz/v4/api/login?__t=' + Date.now, {
            code: "",
            codeKey: "",
            loginType: 1,
            password: md5(code),
            username: phone
        }).then(res => {
            if(res.data.status === -23104){
                fail()
            }else{
                //更改state的数据所以要用mutations的方法
                context.commit({
                    type:CHANGE_USER_STATE,
                    user_state:res.data.data.data
                })
                success(res.data.data.data)
            }
        })
    }
}
export default actions