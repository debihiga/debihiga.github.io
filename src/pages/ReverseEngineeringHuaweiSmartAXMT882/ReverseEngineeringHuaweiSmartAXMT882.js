import { Container, Divider } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Page from '../../components/Page';
import React from 'react';
import Typography from '@material-ui/core/Typography';

function ReverseEngineeringHuaweiSmartAXMT882(props) {

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Reverse Engineering:
        <br />
        Huawei SmartAX MT882
      </Typography>
      <Typography variant="body1" gutterBottom>
        This section describes the reverse engineering general steps, using the modem Huawei SmartAX MT882 as an example.
        <br />
        It explains the whole process, from the extraction of the firmware to the bug hunting.
        <Divider/>
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Box my={2}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Box>
    </React.Fragment>
  );
}

export default ReverseEngineeringHuaweiSmartAXMT882;