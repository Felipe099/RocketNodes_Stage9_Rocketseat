import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './styles';

export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/Felipe099.png"
                    alt="Imagem do Usuário"
                />

                <div>
                    <span>Bem Vindo</span>
                    <strong>Felipe Torres</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
