import { GoogleLogin, GoogleLogout, useGoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { ProfileObj } from '../App'

type ProfileProps = {
	profile: ProfileObj
}

const Profile = ({profile}: ProfileProps) => {

	const history = useHistory()

	return (
		<div>
			<p className='italic'>Profile</p>
			<img className='mx-auto rounded-full' src={profile?.imageUrl}></img>
			<p><span className='font-semibold'>Name : </span> {profile?.name}</p>
			<p><span className='font-semibold'>Email : </span> {profile?.email}</p>
			<GoogleLogout
				clientId='1079953143144-rk4t7431edflq6t0k0er1391ur48hfhg.apps.googleusercontent.com'
				buttonText='Logout'
				onLogoutSuccess={()=>history.push('/')}
			/>
		</div>)
}

export default Profile