import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
  useHistory,
  Redirect 
} from "react-router-dom";
import { GoogleLogin, GoogleLogout, useGoogleLogin } from 'react-google-login'
import Profile from './components/Profile';

export type ProfileObj = {
  email: string;
  imageUrl: string;
  name: string;
}

function App() {

  let history = useHistory()

  const onSuccessCallback = (resp: any) => {
    console.log(resp)
    setProfile(resp.profileObj)
    history.push('/profile')
  }

  const onFailureCallback = (resp: any) => {
    console.log(resp)
  }

  const { signIn, loaded } = useGoogleLogin({
    clientId: '1079953143144-rk4t7431edflq6t0k0er1391ur48hfhg.apps.googleusercontent.com',
    isSignedIn: true,
    onSuccess: onSuccessCallback,
    onFailure: () => history.push('/')
  })

  const [profile, setProfile] = useState<ProfileObj | null>(null)

  return (
    <div className='text-center space-y-3'>
      <p className='italic font-semibold text-lg'>My OAuth Application</p>

      <Switch>
        <Route path='/' exact>
          <p className='italic'>Please login</p>
          <GoogleLogin
            clientId='1079953143144-rk4t7431edflq6t0k0er1391ur48hfhg.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={onSuccessCallback}
            onFailure={onFailureCallback}
            cookiePolicy={'single_host_origin'}
          />
        </Route>

        <Route path='/profile'>
          {profile? <Profile profile={profile} /> : <Redirect to='/'/>}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
