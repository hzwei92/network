import { Brightness6Outlined, Twitter } from '@mui/icons-material';
import { createTheme, Fab, PaletteMode, Paper, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import AppBar from './AppBar';
import Profile, { Prof } from './Profile';



const profiles: Prof[] = [{
  title: 'JAMN Tutoring',
  bio: '$10 an hour for online private sessions. Refer to https://thenetworkstate.com, https://replit.com, https://lichess.com, https://online-go.com',
  discord: 'geometerJones#9757',
  twitter: '@weihz92',
  twitterLink: 'https://twitter.com/weihz92',
}, {
  title: 'q u e e n',
  bio: 'I only simp for anime bitches',
  discord: 'q u e e n#0001',
}, {
  title: "Big Bang Frank",
  bio: `I'm a passionate game developer immersed in the world of Roblox, crafting exciting experiences for players to enjoy. Additionally, I'm an avid collector and trader of CS:GO skins, always open to new opportunities in buying and selling within the CS:GO community.`,
  discord: 'Big Bank Frank#3991',
  twitter: '@bigbankfrank_',
  twitterLink: 'https://twitter.com/bigbankfrank_',
  steam: 'BigBangFrank // 253380452',
  steamLink: 'https://steamcommunity.com/id/bigbankfrank22/',
},{
  title: 'ALL THE VIBES',
  bio: '🥔',
  discord: 'Potato 🥔#7359',
}, {
  title: `4kphantom4k`,
  bio: 'It Just Happens',
  discord: '4kphantom4k#9481',
  twitter:'@adamaskilla',
  twitterLink: 'https://twitter.com/adamaskilla',
  instagram: '@adamas1080p',
  instagramLink: 'https://www.instagram.com/adamas1080p/',
}];

const shuffle = (array: Prof[]) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
      mode,
    },
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 110,
        paddingBottom: 100,
      }}>
        <AppBar mode={mode}/>
        <div>
          Visit us at <a href="https://discord.gg/SxHX5uh6x9">https://discord.gg/SxHX5uh6x9</a>
        </div>
        <div style={{
          margin: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {
            shuffle(profiles).map((p) => {
              return (
                <Profile prof={p} mode={mode} />
              )
            })
          }
        </div>
        <div style={{
          marginTop: 40,
        }}>
          Visit us at <a href="https://discord.gg/SxHX5uh6x9">https://discord.gg/SxHX5uh6x9</a>
        </div>
        <Fab size="small" onClick={handleClick} style={{
          position: 'fixed',
          left: 10,
          bottom: 10,
        }}>
          <Brightness6Outlined />
        </Fab>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
