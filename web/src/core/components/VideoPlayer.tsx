import ReactPlayer from 'react-player';

import { Box } from '@mui/material';

export type VideoPlayerProps = {
  src: string|undefined;
};

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <Box component="div">
      <ReactPlayer
        url={src}
        title={'video title'}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width={640}
        height={360}
      />
    </Box>

  )
}

export default VideoPlayer;
