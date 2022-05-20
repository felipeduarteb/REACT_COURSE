import { Container, Logo, ContainerLogo, List, ListItem, Link } from './styled'
const Nav = () => {
    return (
        <Container>
            <ContainerLogo>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/256px-ZDF_logo%21_Logo_2021.svg.png"></Logo>
            </ContainerLogo>
            <List>
                <ListItem>
                    <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Contato</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Cadastro</Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default Nav;