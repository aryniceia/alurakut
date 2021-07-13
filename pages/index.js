import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/index'


function ProfileSidebar (propriedades) {
  console.log(propriedades)
  return (
    <Box >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} /> {/* Essa forma de passar var não é exclusivo de react mas sim de JS. O que é exclusividade react é a {} externa que dá pra usar JS dentro do html */}
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'aryniceia';
  const pessoasFavoritas = [
    'HaluDeCassia', 
    'aryniceia'
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio}/> 
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className="Title">
              Bem vinde
            </h1>


            <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length}) {/*Conta o número de amigos*/}
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
