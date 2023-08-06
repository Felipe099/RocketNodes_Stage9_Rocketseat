import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
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

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
