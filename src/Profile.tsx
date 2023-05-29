import { Card } from "@mui/material";

export type Prof = {
  title: string;
  bio: string;
  discord: string;
  discordLink?: string;
  twitter?: string;
  twitterLink?: string;
  steam?: string;
  steamLink?: string;
  imgSrcLink?: string;
}

interface ProfileProps {
  prof: Prof;
}

const ProfileComponent = (props: ProfileProps) => {
  return (
    <Card elevation={15} sx={{
      borderRadius: 3,
      margin: 2,
      maxWidth: 420,
      padding: 5,
    }}>
      <div style={{
        fontWeight: 'bold',
      }}>
        {props.prof.title}
      </div>
      <div>
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
      {
        props.prof.steam && (
          <div>
            <div style={{
              fontWeight: 'bold',
              paddingTop: 2,
            }}>
              Steam
            </div>
            {props.prof.steam}
          </div>
        )
      }
    </Card>
  );
};

export default ProfileComponent;