import { useNavigate } from 'react-router-dom';

import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import avatarPlaceHolder from '../../assets/placeHolderImg.svg';
import { api } from '../../services/api';

import { Container, Profile, Logout } from './styles';

export function Header() {
    const navigate = useNavigate();

    const { signOut, user } = useAuth();

    function hundleSignOut() {
        navigate('/');
        signOut();
    }

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder;
    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />

                <div>
                    <span>Bem Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={hundleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
