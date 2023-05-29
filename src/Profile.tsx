import { Card, PaletteMode } from "@mui/material";

export type Prof = {
  title: string;
  bio: string;
  discord: string;
  discordLink?: string;
  twitter?: string;
  twitterLink?: string;
  instagram?: string;
  instagramLink?: string;
  steam?: string;
  steamLink?: string;
  imgSrcLink?: string;
}

interface ProfileProps {
  prof: Prof;
  mode: PaletteMode;
}

const ProfileComponent = (props: ProfileProps) => {
  return (
    <Card variant={props.mode === 'dark' ? 'outlined' : 'elevation'} elevation={props.mode === 'dark' ? 0 : 10} sx={{
      borderRadius: 3,
      margin: 2,
      maxWidth: 420,
      padding: 5,
      textAlign: 'center',
    }}>
      <div style={{
        fontWeight: 'bold',
        margin: 10,  
      }}>
        {props.prof.title}
      </div>
      <div style={{
        marginBottom: 10,
      }}>
        {props.prof.bio}
      </div>
      <div>
        <div style={{
          fontWeight: 'bold',
          paddingTop: 2,
        }}>
          Discord
        </div>
        <a href={props.prof.discordLink || 'https://discord.gg/SxHX5uh6x9'}>
          {props.prof.discord} 
        </a>
      </div>
      {
        props.prof.twitter && (
          <div>
            <div style={{
              fontWeight: 'bold',
              paddingTop: 2,
            }}>
              Twitter
            </div>
            <a href={props.prof.twitterLink}>
              {props.prof.twitter}
            </a> 
          </div>
        )
      }
      {
        props.prof.instagram && (
          <div>
            <div style={{
              fontWeight: 'bold',
              paddingTop: 2,
            }}>
              Instagram
            </div>
            <a href={props.prof.instagramLink}>
              {props.prof.instagram}
            </a> 
          </div>
        )
      }
      {
        props.prof.steam && (
          <div>
            <div style={{
              fontWeight: 'bold',
              paddingTop: 2,
            }}>
              Steam
            </div>
            <a href="https://steamcommunity.com/id/bigbankfrank22/">{props.prof.steam}</a>
          </div>
        )
      }
    </Card>
  );
};

export default ProfileComponent;