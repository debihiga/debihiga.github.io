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
        This section describes the general steps of reverse engineering, using the modem Huawei SmartAX MT882 as an example.
        <br />
        It explains the whole process, from the extraction of the firmware to the bug hunting.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Presented in the workshop "How much you trust in your ISP?" from the ekoparty Security Conference 2015.
      </Typography>
    </React.Fragment>
  );
}

export default ReverseEngineeringHuaweiSmartAXMT882;