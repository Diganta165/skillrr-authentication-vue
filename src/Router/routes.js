import SignInComponent from '../components/SignInComponent'
import SignUpComponent from '../components/SignUpComponent'
import PageNotFoundComponent from '../components/PageNotFoundComponent'
import ResetPassComponent from '../components/ResetPassword/ResetPassComponent'
import ResetPassOTPComponent from '../components/ResetPassword/ResetPassOTPComponent'
import DashBoardComponent from '../components/DashBoard/DashBoardComponent'

export  const routes =[
    {path:'/logIn', component:SignInComponent},
    {path: '/signUp', component: SignUpComponent},
    {path: '/resetPass', component: ResetPassComponent},
    {path: '/resetPassOTP', component: ResetPassOTPComponent},
    {path: '/dashboard', component: DashBoardComponent},
    {path: '*', component: PageNotFoundComponent}
]