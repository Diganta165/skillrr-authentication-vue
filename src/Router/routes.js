import SignInComponent from '../components/SignInComponent'
import HomeComponent from '../components/HomeComponent'
import SignUpComponent from '../components/SignUpComponent'
import PageNotFoundComponent from '../components/PageNotFoundComponent'
import ResetPassComponent from '../components/ResetPassword/ResetPassComponent'
import ResetPassOTPComponent from '../components/ResetPassword/ResetPassOTPComponent'
import DashBoardComponent from '../components/DashBoard/DashBoardComponent'
import UpdateComponent from  '../components/UpdateComponent'

export  const routes =[
    {path: '/home', component:HomeComponent},
    {path:'/logIn', component:SignInComponent},
    {path: '/signUp', component: SignUpComponent},
    {path: '/resetPass', component: ResetPassComponent},
    {path: '/resetPassOTP', component: ResetPassOTPComponent},
    {path: '/dashboard', component: DashBoardComponent},
    {path: '/update/:id', component: UpdateComponent},
    {path: '*', component: PageNotFoundComponent}
]